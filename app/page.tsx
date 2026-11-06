import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  Heart,
  MapPin,
  Sparkles,
  Waves,
} from "lucide-react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { AvaliacoesNatacao } from "@/components/site/avaliacoes-natacao";
import { HeroVisual, Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import { school } from "@/data/school";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export default function Home() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: school.name,
    url: "https://nado-livre.example",
    telephone: school.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Portugal",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      addressCountry: "BR",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }} />
      <Header />
      <main>
        <section id="inicio" className="hero-section section-anchor">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="bubble bubble-one" />
          <div className="bubble bubble-two" />
          <div className="bubble bubble-three" />

          <div className="site-container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow">
                <Waves aria-hidden="true" size={18} />
                Natação infantil &amp; hidroginástica
              </div>
              <h1>
                Pequenos mergulhos,
                <span>grandes descobertas!</span>
              </h1>
              <p className="hero-lead">
                Um mundo de diversão, aprendizado e confiança dentro d&apos;água.
                Conheça nossas aulas de natação e hidroginástica em Fortaleza.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-sun"
                  href={getWhatsAppLink(whatsappMessages.general)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar uma aula
                  <ArrowUpRight aria-hidden="true" size={19} />
                </a>
                <a className="button button-ghost-light" href="#quem-somos">
                  Conheça nossa escola
                  <ArrowDown aria-hidden="true" size={18} />
                </a>
              </div>
              <div className="hero-location">
                <MapPin aria-hidden="true" size={18} />
                <span>Aldeota</span>
                <i />
                <span>Fortaleza, CE</span>
              </div>
            </div>

            <HeroVisual />
          </div>

          <div className="hero-wave" aria-hidden="true">
            <svg viewBox="0 0 1440 148" preserveAspectRatio="none">
              <path d="M0,84 C240,154 430,15 720,67 C1010,119 1180,10 1440,77 L1440,148 L0,148 Z" />
            </svg>
          </div>
        </section>

        <section id="quem-somos" className="about-section section-anchor">
          <div className="site-container about-grid">
            <Reveal className="about-visual">
              <div className="about-photo-wrap">
                <Image
                  src="/images/team/ana-martins.webp"
                  alt="Professora da Nado Livre à beira da piscina"
                  fill
                  sizes="(max-width: 900px) 92vw, 42vw"
                  className="cover-image"
                />
              </div>
              <div className="about-orbit" aria-hidden="true">
                <Sparkles size={22} />
                <span>Aprender</span>
                <span>Brincar</span>
                <span>Descobrir</span>
              </div>
              <span className="photo-label">Equipe Nado Livre</span>
            </Reveal>

            <div className="about-copy">
              <Reveal>
                <span className="section-kicker">Quem somos</span>
                <h2>Mais que aprender a nadar, é descobrir um mundo de possibilidades.</h2>
                <p>
                  Na Nado Livre, acreditamos que cada experiência na água
                  pode ser uma oportunidade de aprender, ganhar confiança e viver
                  momentos especiais.
                </p>
                <p>
                  Oferecemos aulas de natação e hidroginástica em um ambiente pensado
                  para acolher alunos de diferentes idades, incentivando o movimento,
                  o aprendizado e a convivência.
                </p>
              </Reveal>
              <Stagger className="value-list">
                {school.values.map((item, index) => (
                  <StaggerItem className="value-item" key={item.title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        <section id="modalidades" className="modalities-section section-anchor">
          <div className="site-container">
            <Reveal className="section-heading split-heading">
              <div>
                <span className="section-kicker section-kicker-light">Modalidades</span>
                <h2>Tem lugar para todo mundo na água!</h2>
              </div>
              <p>Descubra a modalidade ideal para você ou para sua família.</p>
            </Reveal>

            <Stagger className="modalities-grid">
              {school.modalities.map((modality, index) => (
                <StaggerItem className={`modality-card modality-card-${index + 1}`} key={modality.name}>
                  <div className="modality-image">
                    <Image
                      src={modality.image}
                      alt={modality.alt}
                      fill
                      sizes="(max-width: 800px) 92vw, 46vw"
                      className="cover-image"
                    />
                    {modality.illustrative && <span className="image-note">Imagem ilustrativa</span>}
                  </div>
                  <div className="modality-content">
                    <div className="modality-number">0{index + 1}</div>
                    <div>
                      <h3>{modality.name}</h3>
                      <p>{modality.description}</p>
                      <a href={`#${modality.scheduleId}`}>
                        Conhecer horários
                        <ArrowDown aria-hidden="true" size={18} />
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="modalities-ripple" aria-hidden="true" />
        </section>

        <AvaliacoesNatacao />

        <section id="equipe" className="team-section section-anchor">
          <div className="site-container">
            <Reveal className="section-heading centered-heading">
              <span className="section-kicker">Nossa equipe</span>
              <h2>Quem transforma cada aula em uma nova descoberta?</h2>
              <p>Conheça alguns dos profissionais da nossa equipe.</p>
            </Reveal>

            <Stagger className="team-grid">
              {school.teachers.map((teacher, index) => (
                <StaggerItem className={`teacher-card teacher-card-${index + 1}`} key={teacher.name}>
                  <div className="teacher-photo">
                    <Image
                      src={teacher.image}
                      alt={`${teacher.role} ${teacher.name} à beira da piscina`}
                      fill
                      sizes="(max-width: 560px) 88vw, (max-width: 900px) 46vw, 23vw"
                      className="cover-image"
                    />
                  </div>
                  <div className="teacher-info">
                    <span>{teacher.role}</span>
                    <h3>{teacher.name}</h3>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="planos" className="plans-section section-anchor">
          <div className="site-container">
            <Reveal className="section-heading centered-heading plans-heading">
              <span className="section-kicker section-kicker-light">Planos &amp; horários</span>
              <h2>Encontre sua próxima aventura na água!</h2>
              <p>
                Escolha sua modalidade, confira os horários e converse com nossa equipe
                para conhecer os planos.
              </p>
            </Reveal>

            <div className="schedule-grid">
              <Reveal className="schedule-card schedule-kids" id="natacao-horarios">
                <div className="schedule-topline">
                  <span>Natação infantil</span>
                  <Waves aria-hidden="true" size={23} />
                </div>
                <h3>Aprendizado e diversão dentro da água.</h3>
                <div className="schedule-blocks">
                  <div className="time-block">
                    <span>Manhã</span>
                    <strong>7h às 11h</strong>
                  </div>
                  <div className="time-block">
                    <span>Tarde</span>
                    <strong>14h às 18h</strong>
                  </div>
                </div>
                <p className="schedule-note">Consulte a disponibilidade de turmas pelo WhatsApp.</p>
                <div className="schedule-footer">
                  <p><span>Valores</span><strong>Sob consulta</strong></p>
                  <a className="button button-deep" href={getWhatsAppLink(whatsappMessages.swimming)} target="_blank" rel="noreferrer">
                    Agendar<ArrowUpRight aria-hidden="true" size={18} />
                  </a>
                </div>
              </Reveal>

              <Reveal className="schedule-card schedule-hydro" id="hidro-horarios" delay={0.12}>
                <div className="schedule-topline">
                  <span>Hidroginástica</span>
                  <Heart aria-hidden="true" size={22} />
                </div>
                <h3>Movimento, bem-estar e momentos especiais na água.</h3>
                <div className="hydro-times">
                  {school.hydroSchedules.map((schedule) => (
                    <div className="hydro-time" key={schedule.days}>
                      <Clock3 aria-hidden="true" size={19} />
                      <span>{schedule.days}</span>
                      <strong>{schedule.time}</strong>
                    </div>
                  ))}
                </div>
                <div className="schedule-footer">
                  <p><span>Valores</span><strong>Sob consulta</strong></p>
                  <a className="button button-deep" href={getWhatsAppLink(whatsappMessages.hydro)} target="_blank" rel="noreferrer">
                    Agendar<ArrowUpRight aria-hidden="true" size={18} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
