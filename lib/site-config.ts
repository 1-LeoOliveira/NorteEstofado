// Dados de contato e negócio — troque pelos dados reais da Norte Estofados.
export const siteConfig = {
  name: "Norte Estofados",
  tagline: "Tapeçaria Automotiva",
  phoneDisplay: "(91) 98905-1746",
  whatsappDisplay: "(91) 98905-1746",
  whatsappNumber: "5591989051746", // formato internacional sem símbolos, ex: 5511987654321
  whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar um orçamento.",
  email: "contato@norteestofados.com.br",
  address: {
    line1: "Rua Itabira, Nº 74 - Fundos - Centro",
    line2: "Ananindeua - PA",
  },
  hours: "Seg a Sex, 08h às 18h | Sáb, 08h às 12h",
  cnpj: "00.000.000/0001-00",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
    tiktok: "#",
  },
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
