export function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Wédis. Tous droits réservés.</p>
        <div className="flex gap-4">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-de-confidentialite">Politique de confidentialité</a>
          <a href="/cgv">CGV</a>
        </div>
      </div>
    </footer>
  );
}
