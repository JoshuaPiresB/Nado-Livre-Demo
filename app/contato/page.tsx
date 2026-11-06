import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock3,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Waves,
} from "lucide-react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Reveal } from "@/components/site/motion";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { school } from "@/data/school";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato e Parcerias | Nado Livre",
  description: "Entre em contato com a Nado Livre para conhecer as aulas, agendar uma visita ou conversar sobre parcerias.",
};

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.address)}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(school.address)}&output=embed`;
const partnershipEmailUrl = `mailto:${school.partnershipEmail}?subject=${encodeURIComponent("Proposta de parceria com a Nado Livre")}&body=${encodeURIComponent("Olá! Gostaria de conversar sobre uma possível parceria com a Nado Livre.")}`;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-bubble contact-hero-bubble-one" aria-hidden="true" />
          <div className="contact-hero-bubble contact-hero-bubble-two" aria-hidden="true" />
          <div className="site-container contact-hero-grid">
            <Reveal className="contact-hero-copy">
              <span className="eyebrow hero-eyebrow"><Waves aria-hidden="true" size={18} />Fale com a gente</span>
              <h1>Vamos conversar?</h1>
              <p>
                Tire suas dúvidas, conheça nossas aulas, agende uma visita ou descubra
                novas possibilidades de parceria com a Nado Livre.
              </p>
            </Reveal>
            <Reveal className="contact-hero-card" delay={0.12}>
              <span>Atendimento rápido</span>
              <h2>Escolha o canal que preferir.</h2>
              <a href={getWhatsAppLink(whatsappMessages.general)} target="_blank" rel="noreferrer">
                <span className="contact-hero-icon"><WhatsAppIcon aria-hidden="true" size={21} /></span>
                <span><small>WhatsApp</small>{school.whatsappDisplay}</span>
                <ArrowUpRight aria-hidden="true" size={19} />
              </a>
              <a href={`tel:${school.phoneDigits}`}>
                <span className="contact-hero-icon"><Phone aria-hidden="true" size={21} /></span>
                <span><small>Telefone</small>{school.phone}</span>
                <ArrowUpRight aria-hidden="true" size={19} />
              </a>
            </Reveal>
          </div>
          <div className="contact-hero-wave" aria-hidden="true">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0 76c263 61 439-45 721-8 292 39 459-33 719-6v58H0Z" /></svg>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="site-container contact-info-grid">
            <Reveal className="contact-copy">
              <span className="section-kicker">Contato &amp; localização</span>
              <h2>Estamos esperando por você!</h2>
              <p>
                Venha conhecer a nossa estrutura e descubra tudo o que a água pode
                proporcionar para você e sua família.
              </p>
              <div className="contact-list">
                <a href={mapsUrl} target="_blank" rel="noreferrer">
                  <span className="contact-icon"><MapPin aria-hidden="true" size={21} /></span>
                  <span><small>Endereço</small>{school.address}</span>
                </a>
                <a href={`tel:${school.phoneDigits}`}>
                  <span className="contact-icon"><Phone aria-hidden="true" size={21} /></span>
                  <span><small>Telefone</small>{school.phone}</span>
                </a>
                <a href={getWhatsAppLink(whatsappMessages.general)} target="_blank" rel="noreferrer">
                  <span className="contact-icon"><WhatsAppIcon aria-hidden="true" size={21} /></span>
                  <span><small>WhatsApp</small>{school.whatsappDisplay}</span>
                </a>
              </div>
              <div className="contact-actions">
                <a className="button button-deep" href={getWhatsAppLink(whatsappMessages.general)} target="_blank" rel="noreferrer"><WhatsAppIcon aria-hidden="true" size={19} />Conversar no WhatsApp</a>
                <a className="button button-outline" href={mapsUrl} target="_blank" rel="noreferrer">Como chegar</a>
              </div>
            </Reveal>

            <Reveal className="map-card" delay={0.1}>
              <iframe title="Mapa da Nado Livre" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="map-badge">
                <MapPin aria-hidden="true" size={20} />
                <span><strong>Nado Livre</strong>Aldeota, Fortaleza</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="partnership-section">
          <div className="site-container partnership-grid">
            <Reveal className="partnership-copy">
              <span className="partnership-icon"><Handshake aria-hidden="true" size={28} /></span>
              <span className="section-kicker section-kicker-light">Parcerias</span>
              <h2>Boas parcerias fazem grandes ideias ganharem movimento.</h2>
              <p>
                A Nado Livre está aberta a construir projetos com escolas,
                empresas, condomínios, profissionais da saúde e iniciativas da nossa
                comunidade. Juntos, podemos criar ações especiais, benefícios e
                experiências que aproximem mais pessoas da atividade aquática.
              </p>
              <p>
                Tem uma ideia ou gostaria de conhecer nossas possibilidades? Fale com
                a nossa equipe. Vamos ouvir sua proposta e encontrar a melhor forma de
                construir essa parceria.
              </p>
            </Reveal>

            <Reveal className="partnership-card" delay={0.12}>
              <span className="partnership-card-label">Canal de parcerias</span>
              <h3>Conte sua ideia para a gente.</h3>
              <p>Escolha uma das opções abaixo para iniciar a conversa com nossa equipe.</p>
              <div className="partnership-actions">
                <a className="button partnership-whatsapp" href={getWhatsAppLink(whatsappMessages.partnership)} target="_blank" rel="noreferrer">
                  <WhatsAppIcon aria-hidden="true" size={20} />Falar pelo WhatsApp<ArrowUpRight aria-hidden="true" size={18} />
                </a>
                <a className="button partnership-email" href={partnershipEmailUrl}>
                  <Mail aria-hidden="true" size={20} />Enviar um e-mail<ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </div>
              <div className="partnership-details">
                <p><Mail aria-hidden="true" size={18} /><span><small>E-mail para parcerias</small>{school.partnershipEmail}</span></p>
                <p><Clock3 aria-hidden="true" size={18} /><span><small>Retorno</small>Responderemos assim que possível</span></p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
