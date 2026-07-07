import { UserPlus } from 'lucide-react';
import { getContextAction } from '@extracom/site-kit/server';
import type { TermsDocument } from '@extracom/site-kit';
import { RegisterForm } from '@/components/site/RegisterForm';
import { AuthCard } from '@/components/site/AuthCard';

export const dynamic = 'force-dynamic';

export default async function InscriptionPage() {
  let terms: TermsDocument[] = [];
  try {
    const ctx = await getContextAction();
    terms = ctx.terms ?? [];
  } catch {
    terms = [];
  }

  return (
    <AuthCard
      icon={UserPlus}
      title="Créer un compte"
      subtitle="Ouvrez votre compte professionnel pour commander en ligne."
      size="lg"
    >
      <RegisterForm terms={terms} />
    </AuthCard>
  );
}
