"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function Reveal({ children, className = "", delay = 0, id }: { children: ReactNode; className?: string; delay?: number; id?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div id={id} className={className} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.12 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>{children}</motion.div>;
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.article className={className} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } } }}>{children}</motion.article>;
}

export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : 48]);
  return (
    <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 28 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ y: imageY }}>
      <div className="hero-photo-shell">
        <Image src="/images/hero-natacao.webp" alt="Crianças em uma aula de natação com uma instrutora" fill priority sizes="(max-width: 900px) 92vw, 53vw" className="cover-image" />
        <div className="hero-photo-shade" /><span className="image-note hero-image-note">Imagem ilustrativa</span>
      </div>
      <div className="hero-sticker" aria-hidden="true"><span>Vem</span><strong>pra água!</strong></div>
      <div className="hero-waterline" aria-hidden="true" />
    </motion.div>
  );
}
