export const siteConfig = {
  name: "Amáli",
  tagline: "Autêntica, feminina e inspiradora",
  description:
    "Portfólio da agência Amáli — Publicidade e Propaganda, UNIFRAN Franca. Audiovisual, campanhas, produção de rádio e TCC.",
  university: "UNIFRAN — Universidade de Franca",
  email: "amalicomunicacao@gmail.com",
  instagram: "https://www.instagram.com/amaliagencia",
  aboutText: `O nome Amáli carrega em sua sonoridade a leveza, a delicadeza e a sensibilidade que definem a essência da nossa agência. Surgiu da combinação criativa entre os nomes das fundadoras, como um símbolo da união de ideias, talentos e sonhos.

Mais do que uma junção de letras, Amáli representa o encontro de visões complementares que se transformaram em uma só voz: autêntica, feminina e inspiradora.`,
} as const;

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Audiovisual", href: "#audiovisual" },
  { label: "Campanhas", href: "#campanhas" },
  { label: "Rádio", href: "#radio" },
  { label: "TCC", href: "#tcc" },
] as const;

export type ProjectCategory =
  | "sobre"
  | "audiovisual"
  | "institucional"
  | "conscientizacao"
  | "radio"
  | "tcc"
  | "web";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  type: "canva" | "youtube" | "spotify" | "website";
  url: string;
  embedUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "sobre-agencia",
    title: "Apresentação Institucional",
    description:
      "Conheça a história, a essência e os valores que guiam nossa agência de publicidade.",
    category: "sobre",
    type: "canva",
    url: "https://www.canva.com/design/DAGirWcNDBY/cMCwArr9e-OjSHC8yEkABw/view",
    embedUrl:
      "https://www.canva.com/design/DAGirWcNDBY/cMCwArr9e-OjSHC8yEkABw/view?embed",
    featured: true,
  },
  {
    id: "video-1",
    title: "Produção Audiovisual I",
    description:
      "Trabalho audiovisual desenvolvido no curso de Publicidade e Propaganda.",
    category: "audiovisual",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=CZbxBYgZKVY",
    embedUrl: "https://www.youtube.com/embed/CZbxBYgZKVY",
  },
  {
    id: "video-2",
    title: "Produção Audiovisual II",
    description:
      "Segunda peça audiovisual da agência, explorando narrativa e direção de arte.",
    category: "audiovisual",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=xVop1f1E8U8",
    embedUrl: "https://www.youtube.com/embed/xVop1f1E8U8",
  },
  {
    id: "video-short",
    title: "Conteúdo em Formato Curto",
    description:
      "Peça em formato vertical para redes sociais e plataformas de short-form.",
    category: "audiovisual",
    type: "youtube",
    url: "https://www.youtube.com/shorts/-s_cQnIVExY",
    embedUrl: "https://www.youtube.com/embed/-s_cQnIVExY",
  },
  {
    id: "video-3",
    title: "Produção Audiovisual III",
    description:
      "Terceira produção audiovisual da agência com direção criativa e storytelling.",
    category: "audiovisual",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=7rpqz5kJtlw",
    embedUrl: "https://www.youtube.com/embed/7rpqz5kJtlw",
  },
  {
    id: "campanha-institucional-1",
    title: "Campanha Institucional I",
    description:
      "Apresentação de campanha institucional com estratégia de marca e posicionamento.",
    category: "institucional",
    type: "canva",
    url: "https://www.canva.com/design/DAGBQy1pHMI/iFu0Di9PxfZPSiQv2J6p-A/view",
    embedUrl:
      "https://www.canva.com/design/DAGBQy1pHMI/iFu0Di9PxfZPSiQv2J6p-A/view?embed",
    featured: true,
  },
  {
    id: "campanha-institucional-2",
    title: "Campanha Institucional II",
    description:
      "Segunda campanha institucional com foco em identidade visual e comunicação integrada.",
    category: "institucional",
    type: "canva",
    url: "https://www.canva.com/design/DAGTuyzzMik/m3X2oKBds_OM5aKiSXzQuA/view",
    embedUrl:
      "https://www.canva.com/design/DAGTuyzzMik/m3X2oKBds_OM5aKiSXzQuA/view?embed",
  },
  {
    id: "campanha-conscientizacao",
    title: "Campanha de Conscientização",
    description:
      "Campanha de conscientização social com abordagem criativa e impacto emocional.",
    category: "conscientizacao",
    type: "canva",
    url: "https://www.canva.com/design/DAHEJ7N-ZeM/SNP_8JMkGjaF5uIFog-wYg/view",
    embedUrl:
      "https://www.canva.com/design/DAHEJ7N-ZeM/SNP_8JMkGjaF5uIFog-wYg/view?embed",
    featured: true,
  },
  {
    id: "video-conscientizacao",
    title: "Vídeo — Campanha de Conscientização",
    description:
      "Peça audiovisual produzida como complemento à campanha de conscientização sobre doação de sangue.",
    category: "conscientizacao",
    type: "youtube",
    url: "https://youtu.be/gaUUGwbXPUs",
    embedUrl: "https://www.youtube.com/embed/gaUUGwbXPUs",
  },
  {
    id: "serra-canastra",
    title: "Serra da Canastra",
    description:
      "Site institucional desenvolvido pela agência — natureza, cultura e sabores de Minas Gerais.",
    category: "web",
    type: "website",
    url: "https://serra-da-canastra.vercel.app/",
    featured: true,
  },
  {
    id: "crise-dos-20",
    title: "Crise dos 20",
    description:
      "Podcast produzido pela Amáli sobre as mudanças e desafios da vida na casa dos 20 anos.",
    category: "radio",
    type: "spotify",
    url: "https://creators.spotify.com/pod/profile/amali3/",
    featured: true,
  },
  {
    id: "tcc",
    title: "Trabalho de Conclusão de Curso",
    description:
      "Apresentação do TCC — síntese do percurso acadêmico e profissional da agência.",
    category: "tcc",
    type: "canva",
    url: "https://www.canva.com/design/DAG1P8gTBT8/9TfiKyEIJo1dCvp9p_6tkQ/view",
    embedUrl:
      "https://www.canva.com/design/DAG1P8gTBT8/9TfiKyEIJo1dCvp9p_6tkQ/view?embed",
    featured: true,
  },
];

export const sobreProject = projects.find((p) => p.id === "sobre-agencia")!;
export const audiovisualProjects = projects.filter(
  (p) => p.category === "audiovisual"
);
export const institucionalProjects = projects.filter(
  (p) => p.category === "institucional"
);
export const conscientizacaoProjects = projects.filter(
  (p) => p.category === "conscientizacao"
);
export const webProject = projects.find((p) => p.id === "serra-canastra")!;
export const radioProject = projects.find((p) => p.id === "crise-dos-20")!;
export const tccProject = projects.find((p) => p.id === "tcc")!;
