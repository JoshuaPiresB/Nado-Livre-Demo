export const WHATSAPP_NUMBER = "5585000000000";
export const whatsappMessages = {
  general: "Olá! Conheci a Nado Livre pelo site e gostaria de saber mais sobre as aulas e agendamentos.",
  swimming: "Olá! Conheci a Nado Livre pelo site e gostaria de saber mais sobre as aulas de natação infantil, os valores e os horários disponíveis.",
  hydro: "Olá! Conheci a Nado Livre pelo site e gostaria de saber mais sobre as aulas de hidroginástica, os valores e os horários disponíveis.",
  partnership: "Olá! Conheci a Nado Livre pelo site e gostaria de conversar sobre uma possível parceria com a escola. Podemos falar sobre as possibilidades?",
} as const;
export function getWhatsAppLink(message: string) { return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }
