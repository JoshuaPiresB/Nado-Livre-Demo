import Link from "next/link";
import { Logo } from "./logo";
import { WhatsAppIcon } from "./whatsapp-icon";
import { school } from "@/data/school";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0 62C251 3 466 99 731 57c267-43 451-54 709-12v55H0Z" />
          </svg>
        </div>
        <div className="site-container footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>Movimento, aprendizado e alegria dentro d&apos;água.</p>
          </div>
          <nav aria-label="Navegação do rodapé">
            <strong>Navegue</strong>
            {school.navigation.slice(1).map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>
          <div className="footer-contact">
            <strong>Venha nos conhecer</strong>
            <p>{school.address}</p>
            <a href={`tel:${school.phoneDigits}`}>{school.phone}</a>
            <a href={getWhatsAppLink(whatsappMessages.general)} target="_blank" rel="noreferrer">{school.whatsappDisplay}</a>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <span>© {new Date().getFullYear()} {school.name}.</span>
          <span>Todos os direitos reservados.</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={getWhatsAppLink(whatsappMessages.general)}
        target="_blank"
        rel="noreferrer"
        aria-label={`Conversar com a ${school.name} pelo WhatsApp`}
      >
        <WhatsAppIcon aria-hidden="true" size={23} />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
