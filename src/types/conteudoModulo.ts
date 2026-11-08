
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

export type VersoesQuiz = {
  original: QuestaoQuiz[];
  A: QuestaoQuiz[];
  B: QuestaoQuiz[];
};

export type QuizModulo = {
  titulo: string;
  introducao: string;
  questoes: QuestaoQuiz[];
  versoes?: VersoesQuiz;
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

export type OpcaoTriagem = {
  valor: number;
  texto: string;
};

export type ItemTriagem = {
  enunciado: string;
  alternativas: OpcaoTriagem[];
};

export type FaixaInterpretacao = {
  minimo: number;
  maximo: number;
  classificacao: string;
  descricao: string;
};

export type InstrumentoTriagem = {
  nome: string;
  instrucoes: string;
  periodoReferencia?: string;
  itens: ItemTriagem[];
  pontuacaoMinima: number;
  pontuacaoMaxima: number;
  faixas: FaixaInterpretacao[];
  itensInvertidos?: number[];
  alertaSeguranca?: string;
  limiteAlerta?: number;
  mensagemAlerta?: string;
};

export type TriagemModulo = {
  titulo: string;
  introducao: string[];
  perguntas?: string[];
  instrumento?: InstrumentoTriagem;
  recompensaConclusaoXP: number;
  recompensaDevolutivaXP: number;
};

// Tipos específicos da triagem ASSIST-OMS (Módulo 9).

export type SubstanciaAssist = {
  id: string;
  nome: string;
};

export type OpcaoAssist = {
  valor: number;
  texto: string;
};

export type QuestaoAssist = {
  numero: 2 | 3 | 4 | 5 | 6 | 7 | 8;
  titulo: string;
  enunciado: string;
  alternativas: OpcaoAssist[];
};

export type AssistModulo = {
  titulo: string;
  introducao: string[];
  substancias: SubstanciaAssist[];
  perguntaUsoNaVida: string;
  questoes: QuestaoAssist[];
  mensagemSeguranca: string;
  devolutivas: {
    baixo: string;
    moderado: string;
    alto: string;
  };
  mensagemFinal: string;
  recompensaConclusaoXP: number;
  recompensaDevolutivaXP: number;
};

export type ConteudoModulo = {
  introducao: string[];
  dias: ConteudoDia[];
  video?: VideoModulo;
  quiz?: QuizModulo;
  triagem?: TriagemModulo;
  assist?: AssistModulo;
  fechamentoLeitura?: {
    paragrafos: string[];
    fraseDestaque?: string;
  };
};
