
export type ModuloResumo = {
  slug: string;
  numero: number;
  nome: string;
  semana: number;
};

export const modulos: ModuloResumo[] = [
  {
    slug: "modulo-1",
    numero: 1,
    nome: "Os Seis Pilares da Medicina do Estilo de Vida",
    semana: 1,
  },
  {
    slug: "modulo-2",
    numero: 2,
    nome: "As Fases da Mudança e a Construção de Hábitos Saudáveis",
    semana: 2,
  },
  {
    slug: "modulo-3",
    numero: 3,
    nome: "O que Sustenta a Motivação e como Transformar Esforço em Hábito",
    semana: 3,
  },
  {
    slug: "modulo-4",
    numero: 4,
    nome: "Metas que Funcionam e como o Estilo de Vida Conversa com seus Genes",
    semana: 4,
  },
  {
    slug: "modulo-5",
    numero: 5,
    nome: "Alimentação Saudável Modula Mecanismos Epigenéticos",
    semana: 5,
  },
  {
    slug: "modulo-6",
    numero: 6,
    nome: "Atividade Física Regular Modula Mecanismos Epigenéticos",
    semana: 6,
  },
  {
    slug: "modulo-7",
    numero: 7,
    nome: "Sono Reparador Modula Mecanismos Epigenéticos",
    semana: 7,
  },
  {
    slug: "modulo-8",
    numero: 8,
    nome: "Manejo do Estresse Modula Mecanismos Epigenéticos",
    semana: 8,
  },
  {
    slug: "modulo-9",
    numero: 9,
    nome: "Manejo de Comportamentos Aditivos Modula Mecanismos Epigenéticos",
    semana: 9,
  },
  {
    slug: "modulo-10",
    numero: 10,
    nome: "Conexão Social Modula Mecanismos Epigenéticos",
    semana: 10,
  },
  {
    slug: "modulo-11",
    numero: 11,
    nome: "Benefícios de Adotar um Estilo de Vida Saudável Sem Cair nas Armadilhas",
    semana: 11,
  },
  {
    slug: "modulo-12",
    numero: 12,
    nome: "Transtorno Bipolar Modula Mecanismos Epigenéticos",
    semana: 12,
  },
  {
    slug: "modulo-13",
    numero: 13,
    nome: "Transtorno Depressivo Modula Mecanismos Epigenéticos",
    semana: 13,
  },
  {
    slug: "modulo-14",
    numero: 14,
    nome: "Obesidade Modula Mecanismos Epigenéticos",
    semana: 14,
  },
  {
    slug: "modulo-15",
    numero: 15,
    nome: "Experiências Adversas na Infância Modulam Mecanismos Epigenéticos",
    semana: 15,
  },
];

export function buscarModulo(slug: string): ModuloResumo | undefined {
  return modulos.find((modulo) => modulo.slug === slug);
}
