"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { swimmingReviews } from "@/data/reviews";

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const easeOutCubic = (value: number) => 1 - (1 - value) ** 3;

export function AvaliacoesNatacao() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>("[data-review-card]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const render = () => {
      animationFrame = 0;

      if (reducedMotion.matches) {
        section.style.setProperty("--reviews-heading-y", "0px");
        cards.forEach((card) => {
          card.style.setProperty("--card-scroll-y", "0px");
          card.style.setProperty("--card-scroll-opacity", "1");
        });
        return;
      }

      const viewportHeight = window.innerHeight;
      const sectionRect = section.getBoundingClientRect();
      const scrollDistance = Math.max(section.offsetHeight - viewportHeight, 1);
      const progress = clamp(-sectionRect.top / scrollDistance);
      const headingProgress = easeOutCubic(clamp((progress - 0.04) / 0.4));

      section.style.setProperty("--reviews-heading-y", `${headingProgress * -19}vh`);

      cards.forEach((card, index) => {
        const cardProgress = easeOutCubic(clamp((progress - 0.1 - index * 0.035) / 0.42));
        card.style.setProperty("--card-scroll-y", `${(1 - cardProgress) * 72}vh`);
        card.style.setProperty("--card-scroll-opacity", String(clamp(cardProgress * 1.8)));
      });
    };

    const requestRender = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    reducedMotion.addEventListener("change", requestRender);

    return () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      reducedMotion.removeEventListener("change", requestRender);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="avaliacoes"
      className="reviews-section section-anchor"
      aria-labelledby="reviews-title"
    >
      <div className="reviews-sticky">
        <div className="site-container reviews-stage">
          <header className="reviews-heading">
            <span className="section-kicker">Histórias que inspiram</span>
            <h2 id="reviews-title">Amor que vira braçada</h2>
          </header>

          <ul className="reviews-list" aria-label="Avaliações de alunos" tabIndex={0}>
            {swimmingReviews.map((review, index) => (
              <li
                className={`review-card-shell review-card-shell-${index + 1}`}
                data-review-card
                key={review.name}
              >
                <article className={`review-card review-card-${review.tone}`}>
                  <Image
                    className="review-photo"
                    src={review.image}
                    alt={review.imageAlt}
                    width={96}
                    height={96}
                    sizes="96px"
                  />
                  <blockquote>
                    <p>{review.quote}</p>
                    <footer>
                      <cite>{review.name}</cite>
                    </footer>
                  </blockquote>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
