
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

// Permite manter as três versões de um mesmo quiz.
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

// Alternativas com pontuação para instrumentos de triagem.
export type OpcaoTriagem = {
  valor: number;
  texto: string;
};

// Item individual de um instrumento estruturado.
export type ItemTriagem = {
  enunciado: string;
  alternativas: OpcaoTriagem[];
};

// Faixas de interpretação de um instrumento.
export type FaixaInterpretacao = {
  minimo: number;
  maximo: number;
  classificacao: string;
  descricao: string;
};

// Configuração específica para instrumentos com pontuação.
export type InstrumentoTriagem = {
  nome: string;
  instrucoes: string;
  periodoReferencia?: string;
  itens: ItemTriagem[];
  pontuacaoMinima: number;
  pontuacaoMaxima: number;
  faixas: FaixaInterpretacao[];
  /**
   * Números dos itens cuja pontuação deve ser invertida.
   * A numeração começa em 1.
   * Exemplo: [4, 5, 7, 8].
   */
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
