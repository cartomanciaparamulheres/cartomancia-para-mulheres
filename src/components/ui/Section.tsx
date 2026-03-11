import { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string;
}>;

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="relative scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8">
          <p className="ornament-line mb-3" />
          <h2 className="font-display text-3xl font-semibold text-mist-100 sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-3 max-w-3xl text-mist-200/90">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
