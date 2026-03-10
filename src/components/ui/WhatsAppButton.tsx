import { buildWhatsAppLink } from '../../lib/whatsapp';

type WhatsAppButtonProps = {
  label: string;
  message: string;
  variant?: 'primary' | 'secondary';
};

export function WhatsAppButton({ label, message, variant = 'primary' }: WhatsAppButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300';
  const styles =
    variant === 'primary'
      ? 'bg-gold-500 text-night-950 shadow-glow hover:bg-gold-400'
      : 'border border-gold-400/80 bg-white/5 text-gold-300 hover:bg-gold-400/10';

  return (
    <a href={buildWhatsAppLink(message)} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
      {label}
    </a>
  );
}
