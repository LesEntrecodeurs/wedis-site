'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-bold">Une erreur est survenue</h1>
      <p className="text-muted-foreground">
        Merci de réessayer dans un instant.
      </p>
      <Button onClick={() => reset()}>Réessayer</Button>
    </div>
  );
}
