import { Card } from './components/ui/Card';
import { Section } from './components/ui/Section';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { landingContent } from './content/landingContent';

function App() {
  return (
    <div className="cosmic-shell min-h-screen bg-radial-depth text-mist-200">
      <header className="sticky top-0 z-30 border-b border-gold-500/20 bg-night-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <p className="font-display text-xl text-gold-300 sm:text-2xl">{landingContent.brand.title}</p>
          <nav className="hidden gap-4 text-xs text-mist-200/90 xl:flex">
            {landingContent.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-gold-300">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section id="hero" className="scroll-mt-24 px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs tracking-[0.28em] text-gold-300 uppercase">{landingContent.brand.signature}</p>
            <h1 className="mt-4 font-display text-5xl text-mist-100 sm:text-7xl">{landingContent.brand.title}</h1>
            <p className="mx-auto mt-6 max-w-4xl font-display text-3xl leading-tight text-mist-100 sm:text-5xl">{landingContent.hero.heading}</p>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gold-300 sm:text-2xl">{landingContent.hero.subheading}</p>
            <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-mist-200">{landingContent.hero.body}</p>
            <p className="mt-8 text-sm text-mist-300">CTA principal: {landingContent.ctas.consulta.label}</p>
            <p className="mt-1 text-sm text-mist-300">CTA secundário: {landingContent.ctas.audio.label}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppButton label={landingContent.ctas.consulta.label} message={landingContent.ctas.consulta.message} />
              <WhatsAppButton label={landingContent.ctas.audio.label} message={landingContent.ctas.audio.message} variant="secondary" />
            </div>
          </div>
        </section>

        <Section id="dor" title="Dor real da cliente">
          <Card>
            <div className="space-y-4 leading-relaxed">
              {landingContent.dor.paragraphs.map((paragraph) => (
                <p key={paragraph} className={paragraph.startsWith('"') ? 'font-display text-2xl text-gold-300' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="leitura" title="O que essa leitura realmente faz">
          <Card>
            <div className="space-y-4 leading-relaxed">
              {landingContent.leitura.paragraphs.map((paragraph) => (
                <p key={paragraph} className={paragraph.startsWith('"') ? 'font-display text-2xl text-gold-300' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="como-funciona" title="Como funciona">
          <p className="mb-5 text-mist-200">{landingContent.comoFunciona.intro}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {landingContent.comoFunciona.steps.map((item) => (
              <Card key={item.title}>
                <h3 className="mb-3 text-lg text-gold-300">{item.title}</h3>
                <p>{item.body}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="somos" title="O que somos">
          <Card>
            <div className="space-y-4 leading-relaxed">
              {landingContent.somos.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="para-quem" title="Para quem é">
          <Card>
            <ul className="space-y-3 leading-relaxed">
              {landingContent.paraQuem.items.map((item) => (
                <li key={item} className={item.startsWith('"') ? 'font-display text-2xl text-gold-300' : 'pl-4 before:mr-2 before:text-gold-400 before:content-["✦"]'}>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Section>

        <Section id="nao-e" title="Para quem não é">
          <Card>
            <div className="space-y-4 leading-relaxed">
              {landingContent.paraQuemNaoE.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="atendimento" title="Formas de atendimento">
          <div className="grid gap-5 md:grid-cols-2">
            {landingContent.atendimento.map((item, index) => (
              <Card key={item.title}>
                <h3 className="font-display text-3xl text-mist-100">{item.title}</h3>
                {item.price ? <p className="mt-2 text-2xl text-gold-300">{item.price}</p> : null}
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <p className="mt-5 text-sm text-mist-300">CTA: {item.ctaLabel}</p>
                <div className="mt-3">
                  <WhatsAppButton label={item.ctaLabel} message={item.ctaMessage} variant={index === 0 ? 'primary' : 'secondary'} fullWidth />
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="quem-conduz" title="Quem conduz">
          <Card>
            <div className="space-y-4 leading-relaxed">
              {landingContent.quemConduz.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="faq" title="Perguntas frequentes">
          <div className="space-y-4">
            {landingContent.faq.map(([question, answer]) => (
              <Card key={question}>
                <h3 className="text-lg font-semibold text-gold-300">{question}</h3>
                <p className="mt-2 leading-relaxed">{answer}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="cta-final" title="CTA final">
          <Card>
            <div className="space-y-4 leading-relaxed">
              {landingContent.ctaFinal.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 text-sm text-mist-300">CTA principal: {landingContent.ctas.consultaFinal.label}</p>
            <p className="mt-1 text-sm text-mist-300">CTA secundário: {landingContent.ctas.audioFinal.label}</p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton label={landingContent.ctas.consultaFinal.label} message={landingContent.ctas.consultaFinal.message} fullWidth />
              <WhatsAppButton
                label={landingContent.ctas.audioFinal.label}
                message={landingContent.ctas.audioFinal.message}
                variant="secondary"
                fullWidth
              />
            </div>
            <p className="mt-7 text-sm text-mist-300">{landingContent.ctaFinal.signature}</p>
          </Card>
        </Section>
      </main>
    </div>
  );
}

export default App;
