// Fotos temporárias (Unsplash, licença livre) — substituir pelas fotos reais dos projetos da Norte Estofados.
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
  { id: 1, title: "Banco em couro preto", category: "Bancos em Couro", image: unsplash("1582519366734-82dac0fcc12d") },
  { id: 2, title: "Banco em couro vermelho", category: "Bancos em Couro", image: unsplash("1636647510477-5ec1593b8be3") },
  { id: 3, title: "Banco em couro caramelo", category: "Bancos em Couro", image: unsplash("1691157415383-9e85455a0f9e") },
  { id: 4, title: "Interior clássico em couro", category: "Bancos em Couro", image: unsplash("1757926331188-cffceee50760") },
  { id: 5, title: "Volante revestido em couro", category: "Volante", image: unsplash("1502014335594-c026800f24ee") },
  { id: 6, title: "Volante esportivo personalizado", category: "Volante", image: unsplash("1679573084280-a8588dee1982") },
  { id: 7, title: "Painel personalizado", category: "Painéis", image: unsplash("1760688966853-3878cbec6528") },
  { id: 8, title: "Coifa de câmbio em couro", category: "Coifas e Manoplas", image: unsplash("1494363608357-c7fa659e7325") },
  { id: 9, title: "Manopla de câmbio personalizada", category: "Coifas e Manoplas", image: unsplash("1741311914505-e5ed6d4a6482") },
  { id: 10, title: "Iluminação interna em LED", category: "Iluminação Interna", image: unsplash("1605437241278-c1806d14a4d9") },
  { id: 11, title: "Interior completo personalizado", category: "Interior Completo", image: unsplash("1549064233-945d7063292f") },
  { id: 12, title: "Acabamento interno premium", category: "Interior Completo", image: unsplash("1649136378672-b965cb9935d5") },
  { id: 13, title: "Textura e costura em couro", category: "Detalhes", image: unsplash("1519120433933-22bc753101f3") },
  { id: 14, title: "Banco de popa em couro náutico", category: "Náutico", image: unsplash("1684849843504-7919ac9ede9c") },
  { id: 15, title: "Poltrona do timão", category: "Náutico", image: unsplash("1598448251941-ae4dd47dba33") },
  { id: 16, title: "Estofamento de cabine náutica", category: "Náutico", image: unsplash("1598448154313-6e7789856d06") },
  { id: 17, title: "Estofado de sofá náutico", category: "Náutico", image: unsplash("1600262394697-74ad15cb0ee8") },
];
