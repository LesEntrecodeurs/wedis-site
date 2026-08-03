import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Wédis",
  description: "Wédis - Matériel et solutions d'hygiène pour les professionnels du Grand Est",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
