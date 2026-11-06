export const school = {
  name: "Nado Livre — Escola Aquática",
  address: "Praça Portugal — Aldeota, Fortaleza — CE",
  phone: "(85) 0000-0000",
  phoneDigits: "558500000000",
  whatsappDisplay: "(85) 00000-0000",
  partnershipEmail: "parcerias@nado-livre.example",
  navigation: [
    { label: "Início", href: "/#inicio" }, { label: "Quem somos", href: "/#quem-somos" },
    { label: "Modalidades", href: "/#modalidades" }, { label: "Equipe", href: "/#equipe" },
    { label: "Planos", href: "/#planos" }, { label: "Contato", href: "/contato" },
  ],
  values: [
    { title: "Aprendizado", description: "Novas descobertas dentro da água." },
    { title: "Diversão", description: "Momentos de movimento e alegria." },
    { title: "Acolhimento", description: "Uma experiência agradável para cada aluno." },
  ],
  modalities: [
    { name: "Natação Infantil", description: "Uma experiência de aprendizado que combina movimento, diversão e novas descobertas dentro da piscina.", image: "/images/modalidade-natacao.webp", alt: "Crianças sorrindo durante aula de natação", scheduleId: "natacao-horarios", illustrative: true },
    { name: "Hidroginástica", description: "Movimente-se, aproveite a água e descubra uma forma agradável de praticar atividades físicas.", image: "/images/modalidade-hidroginastica.webp", alt: "Profissional de natação em frente à piscina", scheduleId: "hidro-horarios", illustrative: true },
  ],
  teachers: [
    { name: "Ana Martins", role: "Professora", image: "/images/team/ana-martins.webp" },
    { name: "Rafael Costa", role: "Professor", image: "/images/team/rafael-costa.webp" },
    { name: "Beatriz Oliveira", role: "Professora", image: "/images/team/beatriz-oliveira.webp" },
    { name: "Daniel Souza", role: "Professor", image: "/images/team/daniel-souza.webp" },
  ],
  hydroSchedules: [
    { days: "Segunda a sexta", time: "6h30 às 7h20" },
    { days: "Segunda, quarta e sexta", time: "7h20 às 8h30" },
    { days: "Segunda e quarta", time: "8h30 às 9h20" },
  ],
} as const;
