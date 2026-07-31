import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Wédis – Robots, machines et produits de nettoyage professionnel",
  description:
    "Wédis vous accompagne dans le choix de robots, machines et produits de nettoyage professionnel adaptés à vos enjeux : conseil, installation, formation et suivi.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header>
          <div className="container">
            <div className="brand">Wédis</div>
            <nav>
              <a href="/">Accueil</a>
              <a href="/robots-et-machines">Robots &amp; machines</a>
              <a href="/produits-entretien">Produits d&apos;entretien</a>
              <a href="/marques">Marques</a>
              <a href="/services">Services</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact / Devis</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer>
          <div className="container">
            <p>© {new Date().getFullYear()} Wédis. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
