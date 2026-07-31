/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    // Le host du proxy média (photos produit) est autorisé dynamiquement depuis
    // l'environnement — sans quoi next/image rejette les URLs distantes. Host
    // vide (projet non-marchand) ⇒ aucune autorisation distante.
    remotePatterns: process.env.EXTRACOM_MEDIA_HOST
      ? [
          {
            protocol: process.env.EXTRACOM_MEDIA_PROTOCOL ?? "https",
            hostname: process.env.EXTRACOM_MEDIA_HOST,
          },
        ]
      : [],
  },
};

export default nextConfig;
