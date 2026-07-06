'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import type { CatalogNode } from '@extracom/site-kit';

function catHref(node: CatalogNode): string {
  return `/catalogue?catalog=${node.id}&clevel=${node.level}`;
}

// Chemin racine→noeud (inclus) vers l'id, ou null.
function findPath(
  nodes: CatalogNode[],
  id: number,
  trail: CatalogNode[] = []
): CatalogNode[] | null {
  for (const node of nodes) {
    const next = [...trail, node];
    if (Number(node.id) === id) return next;
    const found = node.children ? findPath(node.children, id, next) : null;
    if (found) return found;
  }
  return null;
}

// Ligne de catégorie : lien (navigue) + expander `+/−` (accordéon) si enfants.
// La branche active est ouverte par défaut. 100% façon wedis.fr.
function SidebarNode({
  node,
  activeId,
  activePath
}: {
  node: CatalogNode;
  activeId?: number;
  activePath: Set<number>;
}) {
  const children = node.children ?? [];
  const hasChildren = children.length > 0;
  const nodeId = Number(node.id);
  const [open, setOpen] = useState(activePath.has(nodeId));
  const isActive = nodeId === activeId;

  return (
    <li>
      <div className="flex items-center justify-between gap-2 border-b border-neutral-100">
        <Link
          href={catHref(node)}
          className={`flex-1 py-2.5 transition-colors ${
            isActive
              ? 'font-semibold text-[var(--brand-dark)]'
              : 'text-neutral-700 hover:text-[var(--brand-dark)]'
          }`}
        >
          {node.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Réduire' : 'Développer'}
            aria-expanded={open}
            className="rounded p-1 text-neutral-400 transition-colors hover:text-[var(--brand)]"
          >
            {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className="ml-3 border-l border-neutral-200 pl-2">
          {children.map((child) => (
            <SidebarNode
              key={child.id}
              node={child}
              activeId={activeId}
              activePath={activePath}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

/**
 * Sidebar catégories contextuelle façon wedis.fr : titre de la catégorie
 * courante (souligné teal) + ses sous-catégories en accordéon (`+/−`, branche
 * active dépliée). Sans catégorie active → liste des catégories racines.
 */
export function CatalogueSidebar({
  categories,
  activeId
}: {
  categories: CatalogNode[];
  activeId?: number;
}) {
  if (categories.length === 0) return null;

  const path = activeId != null ? (findPath(categories, activeId) ?? []) : [];
  const activePath = new Set(path.map((n) => Number(n.id)));
  const active = path[path.length - 1];
  // Contexte affiché : le noeud actif s'il a des enfants, sinon son parent.
  const context = active?.children?.length ? active : path[path.length - 2];
  const title = context ? context.label : 'Toutes les catégories';
  const list = context ? (context.children ?? []) : categories;

  return (
    <nav aria-label="Catégories" className="text-sm">
      <div className="mb-1 border-b-2 border-[var(--brand-accent)] pb-2">
        <span className="text-lg font-bold text-[var(--brand-slate)]">
          {title}
        </span>
      </div>
      <ul>
        {list.map((node) => (
          <SidebarNode
            key={node.id}
            node={node}
            activeId={activeId}
            activePath={activePath}
          />
        ))}
      </ul>
      {context && (
        <Link
          href="/catalogue"
          className="mt-3 inline-block text-xs text-neutral-500 transition-colors hover:text-[var(--brand)]"
        >
          ← Toutes les catégories
        </Link>
      )}
    </nav>
  );
}
