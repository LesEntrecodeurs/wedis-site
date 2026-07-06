import Image from 'next/image';
import { BRANDS } from '@/data/brands';

export function BrandsBand() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
      {BRANDS.map((b) => (
        <Image
          key={b.name}
          src={b.logo}
          alt={b.name}
          width={130}
          height={60}
          className="h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
        />
      ))}
    </div>
  );
}
