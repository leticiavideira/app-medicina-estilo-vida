export type OpcaoAtividade = {
  valor: number;
  texto: string;
};

export type Atividade = {
  titulo: string;
  pergunta: string;
  instrucoes?: string;
  opcoes: OpcaoAtividade[];
  recompensaXP: number;
};

export type ConteudoDia = {
  numero: number;
  titulo: string;
  paragrafos: string[];
  fraseDestaque?: string;
  atividade?: Atividade;
  recompensaLeituraXP: number;
};

export type QuestaoQuiz = {
  enunciado: string;
  alternativas: {
    letra: string;
    texto: string;
  }[];
  respostaCorreta: string;
  feedback: string;
};

export type QuizModulo = {
  titulo: string;
  introducao: string;
  questoes: QuestaoQuiz[];
  recompensaConclusaoXP: number;
  recompensaBonusXP: number;
  minimoAcertosBonus: number;
};

export type VideoModulo = {
  titulo: string;
  descricao: string[];
  url?: string;
  recompensaXP?: number;
  recompensaMicropraticaXP?: number;
};

export type TriagemModulo = {
  titulo: string;
  introducao: string[];
  perguntas?: string[];
  recompensaConclusaoXP: number;
  recompensaDevolutivaXP: number;
};

export type ConteudoModulo = {
  introducao: string[];
  dias: ConteudoDia[];
  video?: VideoModulo;
  quiz?: QuizModulo;
  triagem?: TriagemModulo;
  fechamentoLeitura?: {
    paragrafos: string[];
    fraseDestaque?: string;
  };
};
