import { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return <div className="rounded-2xl border border-gold-500/35 bg-night-900/70 p-6 shadow-soft shadow-edge backdrop-blur-sm">{children}</div>;
}
