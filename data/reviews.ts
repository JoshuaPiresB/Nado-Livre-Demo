export type SwimmingReview = Readonly<{
  name: string;
  quote: string;
  image: string;
  imageAlt: string;
  tone: "sun" | "aqua" | "blue" | "coral";
}>;

export const swimmingReviews = [
  {
    name: "Marina Alves",
    quote: "Eu evitava a parte funda. Hoje nado a piscina inteira com calma e confiança.",
    image: "/images/reviews/marina-alves.webp",
    imageAlt: "Retrato de Marina Alves sorrindo à beira da piscina",
    tone: "sun",
  },
  {
    name: "Lucas Menezes",
    quote: "As correções são simples e muito claras. Em poucas aulas meu nado ficou mais leve.",
    image: "/images/reviews/lucas-menezes.webp",
    imageAlt: "Retrato de Lucas Menezes sorrindo na piscina",
    tone: "aqua",
  },
  {
    name: "Sofia Ribeiro",
    quote: "Aprendi no meu tempo e sem pressão. Agora a aula de natação é meu momento favorito.",
    image: "/images/reviews/sofia-ribeiro.webp",
    imageAlt: "Retrato de Sofia Ribeiro sorrindo após a aula de natação",
    tone: "blue",
  },
  {
    name: "Roberto Nunes",
    quote: "Voltei a me exercitar com segurança. Saio de cada aula com mais energia.",
    image: "/images/reviews/roberto-nunes.webp",
    imageAlt: "Retrato de Roberto Nunes sorrindo à beira da piscina",
    tone: "coral",
  },
] as const satisfies readonly SwimmingReview[];
