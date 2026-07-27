// Fotos reais dos projetos ficam em public/img/{automotivo,nautico}.
// As demais ainda são temporárias (Unsplash, licença livre) até termos mais fotos reais.
function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;
}

export const categories = [
  "Todos",
  "Bancos em Couro",
  "Volante",
  "Painéis",
  "Coifas e Manoplas",
  "Iluminação Interna",
  "Interior Completo",
  "Detalhes",
  "Náutico",
] as const;

export type Category = (typeof categories)[number];

export type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<Category, "Todos">;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  // Fotos reais de projetos da Norte Estofados
  { id: 1, title: "Banco em couro preto", category: "Bancos em Couro", image: "/img/automotivo/foto-2.jpg" },
  { id: 2, title: "Banco em couro para caminhão", category: "Bancos em Couro", image: "/img/automotivo/foto-4.jpeg" },
  { id: 3, title: "Painel personalizado de caminhão", category: "Painéis", image: "/img/automotivo/foto-1.jpg" },
  { id: 4, title: "Interior completo de caminhão", category: "Interior Completo", image: "/img/automotivo/foto-3.jpg" },
  { id: 5, title: "Capota náutica instalada", category: "Náutico", image: "/img/nautico/foto-2.jpeg" },
  { id: 6, title: "Toldo náutico personalizado", category: "Náutico", image: "/img/nautico/foto-1.jpeg" },

  // Fotos ilustrativas (substituir por mais fotos reais quando disponíveis)
  { id: 7, title: "Banco em couro caramelo", category: "Bancos em Couro", image: unsplash("1691157415383-9e85455a0f9e") },
  { id: 8, title: "Interior clássico em couro", category: "Bancos em Couro", image: unsplash("1757926331188-cffceee50760") },
  { id: 9, title: "Volante revestido em couro", category: "Volante", image: unsplash("1502014335594-c026800f24ee") },
  { id: 10, title: "Volante esportivo personalizado", category: "Volante", image: unsplash("1679573084280-a8588dee1982") },
  { id: 11, title: "Painel personalizado", category: "Painéis", image: unsplash("1760688966853-3878cbec6528") },
  { id: 12, title: "Coifa de câmbio em couro", category: "Coifas e Manoplas", image: unsplash("1494363608357-c7fa659e7325") },
  { id: 13, title: "Manopla de câmbio personalizada", category: "Coifas e Manoplas", image: unsplash("1741311914505-e5ed6d4a6482") },
  { id: 14, title: "Iluminação interna em LED", category: "Iluminação Interna", image: unsplash("1605437241278-c1806d14a4d9") },
  { id: 15, title: "Acabamento interno premium", category: "Interior Completo", image: unsplash("1649136378672-b965cb9935d5") },
  { id: 16, title: "Textura e costura em couro", category: "Detalhes", image: unsplash("1519120433933-22bc753101f3") },
  { id: 17, title: "Banco de popa em couro náutico", category: "Náutico", image: unsplash("1684849843504-7919ac9ede9c") },
  { id: 18, title: "Poltrona do timão", category: "Náutico", image: unsplash("1598448251941-ae4dd47dba33") },
];
