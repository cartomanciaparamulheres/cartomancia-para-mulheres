import { buildWhatsAppLink } from '../../lib/whatsapp';

type WhatsAppButtonProps = {
  label: string;
  message: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
};

export function WhatsAppButton({ label, message, variant = 'primary', fullWidth = false }: WhatsAppButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300';
  const styles =
    variant === 'primary'
      ? 'bg-gold-500 text-night-950 shadow-glow hover:-translate-y-0.5 hover:bg-gold-400'
      : 'border border-gold-400/75 bg-night-900/40 text-gold-300 hover:bg-gold-400/10';

  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles} ${fullWidth ? 'w-full' : ''}`}
    >
      {label}
    </a>
  );
}
