import { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl border border-gold-500/30 bg-night-900/65 p-6 shadow-soft backdrop-blur">
      {children}
    </div>
  );
}
