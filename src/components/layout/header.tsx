import Link from "next/link";

export function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold">
          Wédis
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/catalogue">Catalogue</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/compte">Mon compte</Link>
        </nav>
      </div>
    </header>
  );
}
