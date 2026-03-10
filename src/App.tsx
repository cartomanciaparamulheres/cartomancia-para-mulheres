import { Card } from './components/ui/Card';
import { Section } from './components/ui/Section';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { landingContent } from './content/landingContent';

function App() {
  return (
    <div className="min-h-screen bg-radial-depth text-mist-200">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(246,223,162,0.12),transparent_35%),radial-gradient(circle_at_15%_65%,rgba(138,159,223,0.15),transparent_38%)]" />
      <header className="sticky top-0 z-30 border-b border-gold-500/20 bg-night-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <p className="text-sm text-gold-300">{landingContent.brand.title}</p>
          <nav className="hidden gap-4 text-xs text-mist-200/85 lg:flex">
            {landingContent.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-gold-300">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative">
        <section id="hero" className="scroll-mt-24 px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm tracking-[0.2em] text-gold-300 uppercase">{landingContent.brand.signature}</p>
            <h1 className="mt-4 text-4xl font-semibold text-mist-100 sm:text-6xl">{landingContent.brand.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-mist-100">Você já sente que algo precisa mudar. A clareza pode começar aqui.</p>
            <p className="mx-auto mt-6 max-w-3xl leading-relaxed">Tem mulher que já entendeu muita coisa sobre si. Tem mulher que ainda não sabe explicar, mas sente que do jeito que está não dá mais.</p>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed">A Cartomancia para Mulheres existe para esse momento.</p>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed">O Baralho Cigano entra como espelho para organizar o que está confuso, nomear o que está ativo e mostrar um próximo passo possível com mais clareza, verdade e direção.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton {...landingContent.ctas.consulta} />
              <WhatsAppButton {...landingContent.ctas.audio} variant="secondary" />
            </div>
          </div>
        </section>

        <Section id="dor" title="Dor real da cliente">
          <Card>
            <div className="space-y-4 leading-relaxed">
              <p>Você não precisa estar no fundo do poço para perceber que algo precisa mudar.</p>
              <p>Talvez você já tenha feito terapia. Talvez já tenha lido, estudado, pensado, sentido e entendido muita coisa. E mesmo assim continua vivendo dias em que sabe o que deveria fazer, mas não consegue sustentar.</p>
              <p>Ou talvez você nem consiga organizar tudo em palavras ainda. Só sente um incômodo constante. Uma sensação de cansaço por dentro. Uma percepção silenciosa de que a sua vida está pedindo mudança.</p>
              <p>Nem sempre o problema aparece como crise. Às vezes ele aparece como repetição. Como dúvida que volta. Como relação que pesa. Como escolha adiada. Como rotina que vai te afastando de você.</p>
              <p>A questão nem sempre é falta de informação. Muitas vezes a questão é falta de clareza organizada na hora de olhar para o que está acontecendo de verdade.</p>
            </div>
          </Card>
        </Section>

        <Section id="leitura" title="O que essa leitura realmente faz">
          <Card>
            <div className="space-y-4 leading-relaxed">
              <p>Você chega com uma pergunta, uma situação ou um incômodo. Eu abro o Baralho Cigano.</p>
              <p>As cartas não entram para mandar na sua vida. Elas entram para ajudar a mostrar o que está acontecendo com mais clareza.</p>
              <p>É como acender a luz em um quarto escuro. O quarto já estava lá. Os móveis já estavam lá. A resposta já existia em algum nível dentro de você. A luz só ajuda você a enxergar melhor.</p>
              <p>Ela ajuda a perceber o padrão que está se repetindo; entender o que essa situação está mostrando; separar medo, intuição, cansaço e desejo; enxergar qual próximo passo faz sentido agora.</p>
              <p>Então não é sobre prever o futuro. É sobre olhar o presente com mais verdade. É sobre organizar o que você sente. É sobre sair com direção, e não com mais confusão.</p>
            </div>
          </Card>
        </Section>

        <Section id="como-funciona" title="Como funciona" subtitle="A leitura acontece em três movimentos simples.">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <h3 className="mb-3 text-gold-300">1. Você traz o que está vivendo</h3>
              <p>Pode ser uma decisão, um relacionamento, um limite, um cansaço, uma repetição ou uma fase em que você sente que precisa mudar, mas ainda não sabe por onde começar.</p>
            </Card>
            <Card>
              <h3 className="mb-3 text-gold-300">2. A leitura organiza o que está ativo</h3>
              <p>As cartas ajudam a nomear o padrão com mais precisão. Não para criar dependência. Para devolver entendimento.</p>
            </Card>
            <Card>
              <h3 className="mb-3 text-gold-300">3. Você sai com um próximo passo possível</h3>
              <p>O objetivo não é te entregar uma vida nova em uma frase. O objetivo é te devolver chão para seguir com mais clareza na vida que você já tem.</p>
            </Card>
          </div>
        </Section>

        <Section id="somos" title="O que somos">
          <Card>
            <div className="space-y-4">
              <p>Cartomancia para Mulheres é um espaço de clareza.</p>
              <p>É um atendimento para mulheres que querem olhar para a própria vida com mais verdade, mais direção e mais consciência prática.</p>
              <p>Aqui, o Baralho Cigano funciona como espelho. Ele organiza padrões e mostra possibilidades. Ele não determina o seu futuro.</p>
              <p>O trabalho é conduzido com escuta, precisão e linguagem simples. Sem dramatização. Sem promessas grandiosas. Sem alguém decidindo por você.</p>
              <p>O foco é clareza com autonomia, que é exatamente a base de comunicação e método do Ecossistema Alvura.</p>
            </div>
          </Card>
        </Section>

        <Section id="para-quem" title="Para quem é">
          <Card>
            <ul className="list-disc space-y-3 pl-5">
              <li>Você já se conhece bem, mas sente dificuldade de viver no cotidiano o que já sabe sobre si.</li>
              <li>Você sente que está cansada de se ajustar sem se organizar.</li>
              <li>Você percebe padrões se repetindo e quer olhar para isso com mais clareza.</li>
              <li>Você está em uma fase de decisão, transição ou mudança interna.</li>
              <li>Você não sabe explicar tudo com exatidão, mas sente com força que do jeito que está já não está bom.</li>
              <li>Você quer direção prática sem perder sua autonomia.</li>
            </ul>
          </Card>
        </Section>

        <Section id="nao-e" title="Para quem não é">
          <Card>
            <p>Esse trabalho não foi feito para criar dependência. Ele não foi pensado para quem quer terceirizar decisões. Também não foi pensado para quem busca promessa de transformação instantânea, previsão fechada de futuro ou respostas mágicas.</p>
            <p className="mt-4">A proposta aqui é outra: organizar, clarear, nomear e devolver autonomia.</p>
          </Card>
        </Section>

        <Section id="atendimento" title="Formas de atendimento">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="text-xl text-mist-100">Consulta ao Vivo — 1 hora</h3>
              <p className="mt-1 text-gold-300">R$313</p>
              <p className="mt-4">Uma sessão individual online para quando a situação pede mais espaço, mais profundidade e mais clareza.</p>
              <p className="mt-3">Você traz o que está vivendo. A leitura acontece ao vivo. O padrão é nomeado com precisão. E a sessão termina com uma direção concreta para o seu próximo passo.</p>
              <p className="mt-3">Essa opção é ideal para você se você sente que há mais camadas na situação e quer organizar tudo com mais profundidade.</p>
              <div className="mt-6"><WhatsAppButton {...landingContent.ctas.consulta} /></div>
            </Card>
            <Card>
              <h3 className="text-xl text-mist-100">Pergunta Pontual por Áudio</h3>
              <p className="mt-1 text-gold-300">R$51</p>
              <p className="mt-4">Uma resposta personalizada via WhatsApp em até 72 horas para quando você tem uma pergunta específica e quer uma direção objetiva.</p>
              <p className="mt-3">Você envia sua pergunta com contexto. As cartas são abertas. E você recebe um áudio com clareza sobre aquela situação.</p>
              <p className="mt-3">Essa opção é ideal para você se você quer olhar para uma dúvida pontual sem precisar de uma sessão completa.</p>
              <div className="mt-6"><WhatsAppButton {...landingContent.ctas.audio} variant="secondary" /></div>
            </Card>
          </div>
        </Section>

        <Section id="quem-conduz" title="Quem conduz">
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
            {[
              ['Isso é previsão de futuro?', 'Não. Aqui, o Baralho Cigano funciona como espelho. A leitura organiza padrões, mostra o que está ativo e ilumina possibilidades para o momento presente.'],
              ['Eu preciso já saber explicar tudo o que estou sentindo?', 'Não. Você pode chegar com clareza ou pode chegar só com um incômodo. A leitura também serve para organizar o que ainda está sem nome.'],
              ['Eu já fiz terapia e já entendo muita coisa sobre mim. Isso ainda pode me ajudar?', 'Sim. Esse trabalho foi pensado exatamente para a mulher que já tem consciência, mas sente dificuldade de transformar isso em direção prática na vida comum.'],
              ['E se eu não entender muita coisa sobre mim ainda?', 'Também pode fazer sentido. Muitas mulheres chegam sem conseguir explicar com precisão o que vivem, mas com a sensação nítida de que algo precisa mudar. A leitura ajuda justamente a dar forma a isso.'],
              ['Vou receber uma resposta vaga?', 'Não é essa a proposta. O trabalho busca clareza objetiva: entender o padrão, nomear o que está acontecendo e mostrar um próximo passo possível.'],
              ['Vocês vão decidir por mim?', 'Não. A decisão continua sendo sua. A leitura existe para devolver clareza, não para tomar o seu lugar.'],
              ['Tenho medo de entrar em algo místico demais.', 'A condução é simples, clara e prática. Sem excessos. Sem promessas grandiosas. Sem linguagem que afasta. O foco é entendimento, direção e autonomia.'],
              ['Como saber se escolho a consulta ao vivo ou a pergunta por áudio?', 'A pergunta por áudio funciona melhor para uma dúvida específica. A consulta ao vivo funciona melhor quando a situação tem mais camadas e pede aprofundamento.'],
              ['Em quanto tempo recebo a resposta por áudio?', 'Em até 72 horas pelo WhatsApp.'],
              ['Isso substitui terapia?', 'Não. A Cartomancia para Mulheres não substitui terapia nem acompanhamento clínico. Ela oferece clareza prática para uma situação do seu momento atual.'],
              ['Vou ficar dependente de novas leituras?', 'Não é esse o objetivo. A proposta do trabalho é devolver chão, clareza e autonomia para que você consiga seguir com mais verdade.'],
            ].map(([q, a]) => (
              <Card key={q}>
                <h3 className="text-lg text-gold-300">{q}</h3>
                <p className="mt-2">{a}</p>
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
            <p className="mt-6 text-sm text-mist-200/80">Assinatura: Cartomancia para Mulheres por Ecossistema Alvura</p>
          </Card>
        </Section>
      </main>
    </div>
  );
}

export default App;
