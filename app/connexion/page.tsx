"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "@extracom/site-kit/react";

export default function ConnexionPage() {
  const { login, isLoading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFeedback(null);
    try {
      await login({ email, password });
      setFeedback("Connexion réussie. Vous êtes maintenant connecté à votre espace client Wédis.");
    } catch (e) {
      setFeedback("La connexion a échoué. Merci de vérifier vos identifiants ou de réessayer dans quelques instants.");
    }
  }

  return (
    <main className="mx-auto flex max-w-xl flex-col gap-10 px-4 py-12">
      {/* Intro */}
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Accès à votre espace client Wédis
        </h1>
        <p className="text-base text-neutral-700">
          Connectez-vous à votre espace client pour retrouver vos commandes, vos devis
          et vos informations de compte en toute sécurité.
        </p>
        <p className="text-sm text-neutral-600">
          L’accès est réservé aux clients professionnels Wédis. Si vous n’avez pas encore
          de compte, vous pourrez en créer un en quelques instants.
        </p>
      </section>

      {/* Formulaire de connexion */}
      <section aria-labelledby="connexion-form-title" className="space-y-6 rounded-lg border bg-white p-6 shadow-sm">
        <div className="space-y-1">
          <h2 id="connexion-form-title" className="text-xl font-semibold">
            Connectez-vous à votre compte
          </h2>
          <p className="text-sm text-neutral-600">
            Indiquez votre adresse e-mail professionnelle et votre mot de passe pour
            accéder à votre espace client.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Adresse e-mail professionnelle
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border px-3 py-2 text-sm"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-md border px-3 py-2 text-sm"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {(feedback || error) && (
            <p className="text-sm text-red-600" role="alert">
              {feedback ?? "Une erreur est survenue lors de la connexion. Merci de réessayer."}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex w-full items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>

        <div className="flex flex-col gap-1 text-sm text-neutral-700">
          <a href="/inscription" className="text-blue-900 underline">
            Créer un compte professionnel
          </a>
          <a href="/mot-de-passe-oublie" className="text-blue-900 underline">
            Mot de passe oublié
          </a>
        </div>
      </section>

      {/* Aide en cas de difficulté */}
      <section className="space-y-2 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-800">
        <h2 className="text-base font-semibold">Besoin d’aide pour vous connecter ?</h2>
        <p>
          Si vous ne parvenez pas à vous connecter, commencez par vérifier votre adresse
          e-mail et votre mot de passe. Vous pouvez également utiliser le lien « Mot de
          passe oublié » pour réinitialiser votre accès.
        </p>
        <p>
          En cas de difficulté persistante, contactez l’équipe Wédis : nous vous aiderons à
          retrouver l’accès à votre espace client dans les meilleurs délais.
        </p>
      </section>
    </main>
  );
}
