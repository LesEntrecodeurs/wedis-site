"use client";

import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <main className="container mx-auto max-w-xl py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Mot de passe oublié</h1>
        <p className="text-muted-foreground">
          Vous avez oublié votre mot de passe ? Cette page vous permet de retrouver rapidement
          l’accès à votre espace client Wédis, de manière simple et sécurisée.
        </p>
      </header>

      <section aria-labelledby="reset-title" className="space-y-4">
        <h2 id="reset-title" className="text-xl font-semibold">
          Réinitialiser votre mot de passe
        </h2>
        <p className="text-muted-foreground">
          Pour recevoir un lien de réinitialisation, indiquez l’adresse e-mail utilisée pour
          votre compte professionnel Wédis. Nous vous enverrons un message avec un lien pour
          choisir un nouveau mot de passe.
        </p>

        <form className="space-y-4" aria-label="Formulaire de demande de réinitialisation de mot de passe">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Adresse e-mail de votre compte
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="vous@entreprise.fr"
            />
          </div>

          <Button type="submit" className="w-full">
            Envoyer le lien de réinitialisation
          </Button>
        </form>

        <p className="text-sm text-muted-foreground">
          Pour votre sécurité, le lien de réinitialisation est limité dans le temps et ne peut
          être utilisé qu’une seule fois.
        </p>
      </section>

      <section aria-labelledby="help-title" className="space-y-3">
        <h2 id="help-title" className="text-xl font-semibold">
          Si vous ne recevez pas l’e-mail
        </h2>
        <p className="text-muted-foreground">
          Si vous ne voyez pas l’e-mail de réinitialisation dans les minutes qui suivent :
        </p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>vérifiez vos dossiers « courriers indésirables » ou « spam » ;</li>
          <li>assurez-vous d’avoir saisi l’adresse utilisée pour créer votre compte Wédis ;</li>
          <li>si besoin, renouvelez la demande après quelques instants.</li>
        </ul>
        <p className="text-muted-foreground">
          En cas de difficulté persistante (adresse inconnue, compte bloqué, plusieurs comptes
          possibles), contactez directement les équipes Wédis : elles vous accompagneront pour
          sécuriser l’accès à votre espace client et remettre votre compte en service dans les
          meilleures conditions.
        </p>
      </section>
    </main>
  );
}
