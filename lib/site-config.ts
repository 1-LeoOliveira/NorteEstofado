// Dados de contato e negócio — troque pelos dados reais da Norte Estofados.
export const siteConfig = {
  name: "Norte Estofados",
  tagline: "Tapeçaria Automotiva",
  phoneDisplay: "(00) 0000-0000",
  whatsappDisplay: "(00) 00000-0000",
  whatsappNumber: "5500000000000", // formato internacional sem símbolos, ex: 5511987654321
  whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar um orçamento.",
  email: "contato@norteestofados.com.br",
  address: {
    line1: "Rua Exemplo, 123 - Bairro",
    line2: "Cidade - UF, 00000-000",
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
