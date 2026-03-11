import { Card } from './components/ui/Card';
import { Section } from './components/ui/Section';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { landingContent, sectionsContent } from './content/landingContent';

const atendimento = [
  {
    title: 'Consulta ao Vivo — 1 hora',
    price: 'R$313',
    body: [
      'Uma sessão individual online para quando a situação pede mais espaço, mais profundidade e mais clareza.',
      'Você traz o que está vivendo. A leitura acontece ao vivo. O padrão é nomeado com precisão. E a sessão termina com uma direção concreta para o seu próximo passo.',
      'Essa opção é ideal para você se você sente que há mais camadas na situação e quer organizar tudo com mais profundidade.',
    ],
    cta: landingContent.ctas.consulta,
    secondary: false,
  },
  {
    title: 'Pergunta Pontual por Áudio',
    price: 'R$51',
    body: [
      'Uma resposta personalizada via WhatsApp em até 72 horas para quando você tem uma pergunta específica e quer uma direção objetiva.',
      'Você envia sua pergunta com contexto. As cartas são abertas. E você recebe um áudio com clareza sobre aquela situação.',
      'Essa opção é ideal para você se você quer olhar para uma dúvida pontual sem precisar de uma sessão completa.',
    ],
    cta: landingContent.ctas.audio,
    secondary: true,
  },
];

function App() {
  return (
    <div className="cosmic-shell min-h-screen bg-radial-depth text-mist-200">
      <header className="sticky top-0 z-30 border-b border-gold-500/20 bg-night-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <p className="font-display text-2xl text-gold-300">{landingContent.brand.title}</p>
          <nav className="hidden gap-4 text-xs text-mist-200/90 lg:flex">
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
            <p className="text-sm tracking-[0.24em] text-gold-300 uppercase">{landingContent.brand.signature}</p>
            <h1 className="mt-5 font-display text-5xl text-mist-100 sm:text-7xl">{landingContent.brand.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl whitespace-pre-line font-display text-3xl text-mist-100 sm:text-4xl">{landingContent.hero.title}</p>
            {landingContent.hero.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mx-auto mt-5 max-w-3xl leading-relaxed text-mist-200">
                {paragraph}
              </p>
            ))}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton {...landingContent.ctas.consulta} />
              <WhatsAppButton {...landingContent.ctas.audio} variant="secondary" />
            </div>
          </div>
        </section>

        <Section id="dor" title="Dor real da cliente">
          <Card>
            <div className="space-y-4 leading-relaxed">
              {sectionsContent.dor.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="leitura" title="O que essa leitura realmente faz">
          <Card>
            <div className="space-y-4 leading-relaxed">
              {sectionsContent.leitura.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="como-funciona" title="Como funciona" subtitle="A leitura acontece em três movimentos simples.">
          <div className="grid gap-4 md:grid-cols-3">
            {sectionsContent.comoFunciona.map((item) => (
              <Card key={item.title}>
                <h3 className="mb-3 text-lg text-gold-300">{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="somos" title="O que somos">
          <Card>
            <div className="space-y-4">{sectionsContent.somos.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </Card>
        </Section>

        <Section id="para-quem" title="Para quem é">
          <Card>
            <ul className="list-disc space-y-3 pl-5">
              {sectionsContent.paraQuem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </Section>

        <Section id="nao-e" title="Para quem não é">
          <Card>
            <div className="space-y-4">{sectionsContent.naoE.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </Card>
        </Section>

        <Section id="atendimento" title="Formas de atendimento">
          <div className="grid gap-4 md:grid-cols-2">
            {atendimento.map((item) => (
              <Card key={item.title}>
                <h3 className="font-display text-3xl text-mist-100">{item.title}</h3>
                <p className="mt-1 text-gold-300">{item.price}</p>
                {item.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-6">
                  <WhatsAppButton
                    label={item.secondary ? 'Quero enviar minha pergunta' : 'Quero agendar minha consulta'}
                    message={item.cta.message}
                    variant={item.secondary ? 'secondary' : 'primary'}
                  />
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="quem-conduz" title="Quem conduz esse trabalho">
          <Card>
            <div className="space-y-4">
              <p>Eu sou Caroline, criadora do Ecossistema Alvura.</p>
              <p>Uso o Baralho Cigano não como ferramenta para prever o futuro, mas como espelho para organizar o que já está vivo na experiência da mulher que chega até mim.</p>
              <p>Meu papel não é decidir por você. Meu papel é ajudar a nomear o que está acontecendo, traduzir isso com clareza e devolver direção para que a decisão continue sendo sua.</p>
              <p>Essa lógica também está no centro da função da Alvinha dentro do projeto: perceber o padrão, nomear com precisão, propor um próximo passo e sair de cena.</p>
            </div>
          </Card>
        </Section>

        <Section id="faq" title="Perguntas que costumam aparecer antes do agendamento">
          <div className="space-y-4">
            {sectionsContent.faq.map(([question, answer]) => (
              <Card key={question}>
                <h3 className="text-lg text-gold-300">{question}</h3>
                <p className="mt-2">{answer}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="cta-final" title="Você não precisa sair daqui com tudo resolvido.">
          <Card>
            <p>Só precisa dar o próximo passo com mais clareza.</p>
            <p className="mt-3">Se existe algo em você pedindo mudança, isso já é importante.</p>
            <p className="mt-3">A Cartomancia para Mulheres pode ser o começo de uma leitura mais honesta do que você está vivendo agora.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton label="Agendar consulta ao vivo" message={landingContent.ctas.consulta.message} />
              <WhatsAppButton label="Enviar pergunta por áudio" message={landingContent.ctas.audio.message} variant="secondary" />
            </div>
            <p className="mt-7 text-sm text-mist-300">Assinatura: Cartomancia para Mulheres por Ecossistema Alvura</p>
          </Card>
        </Section>
      </main>
    </div>
  );
}

export default App;
