
import type {
  AssistModulo,
  ConteudoModulo,
  QuestaoQuiz,
} from "@/types/conteudoModulo";

// ======================================================
// QUIZ ORIGINAL
// ======================================================

const quizOriginal: QuestaoQuiz[] = [
  {
    enunciado: "Como o comportamento aditivo é compreendido neste módulo?",
    alternativas: [
      {
        letra: "A",
        texto: "Como uma escolha consciente que a pessoa faz todos os dias.",
      },
      {
        letra: "B",
        texto: "Como uma doença cerebral crônica — e não como falta de caráter ou fraqueza moral.",
      },
      {
        letra: "C",
        texto: "Como um sinal de baixa inteligência.",
      },
      {
        letra: "D",
        texto: "Como algo que só acontece com pessoas sem força de vontade.",
      },
    ],
    respostaCorreta: "B",
    feedback:
      "A dependência envolve desregulação dos circuitos de recompensa, motivação, estresse e controle executivo — a abordagem é de cuidado, não de julgamento.",
  },
  {
    enunciado: "Quais são os três estágios do ciclo do comportamento aditivo?",
    alternativas: [
      {
        letra: "A",
        texto: "Euforia, equilíbrio e cansaço.",
      },
      {
        letra: "B",
        texto: "Início, meio e fim.",
      },
      {
        letra: "C",
        texto: "Compulsão/busca de recompensa, abstinência/mal-estar e preocupação/antecipação (fissura).",
      },
      {
        letra: "D",
        texto: "Tolerância, curiosidade e abandono.",
      },
    ],
    respostaCorreta: "C",
    feedback:
      "O ciclo começa na busca pela recompensa imediata, passa pelo mal-estar na ausência do estímulo e é sustentado pela fissura (craving), que favorece recaídas.",
  },
  {
    enunciado:
      "O que o tabaco e o álcool em excesso podem deixar no corpo ao longo dos anos?",
    alternativas: [
      {
        letra: "A",
        texto: "Nenhum efeito duradouro.",
      },
      {
        letra: "B",
        texto: "Apenas benefícios para relaxar.",
      },
      {
        letra: "C",
        texto: "Efeitos apenas na garganta.",
      },
      {
        letra: "D",
        texto: "Inflamação crônica, estresse oxidativo, maior risco cardiometabólico e alterações na regulação da leitura dos genes.",
      },
    ],
    respostaCorreta: "D",
    feedback:
      "Tabaco e álcool atuam em múltiplos sistemas — e os efeitos se acumulam em silêncio durante anos antes de aparecerem como doença.",
  },
  {
    enunciado:
      "Na metáfora do livro, o que a cessação do uso pode fazer com as marcações do DNA?",
    alternativas: [
      {
        letra: "A",
        texto: "Reorganizar parcialmente as marcações em direção à proteção do organismo.",
      },
      {
        letra: "B",
        texto: "Apagar completamente todo o livro.",
      },
      {
        letra: "C",
        texto: "Nada, pois são permanentes.",
      },
      {
        letra: "D",
        texto: "Reescrever as letras do DNA.",
      },
    ],
    respostaCorreta: "A",
    feedback:
      "As marcas epigenéticas são parcialmente reversíveis — parar e adotar um estilo de vida saudável favorecem a reorganização protetora.",
  },
  {
    enunciado:
      "Qual é o primeiro passo para lidar com um comportamento aditivo?",
    alternativas: [
      {
        letra: "A",
        texto: "Esconder o comportamento dos outros.",
      },
      {
        letra: "B",
        texto: "Identificar os gatilhos — internos (emoções, tédio, estresse) e externos (lugares, telas, horários).",
      },
      {
        letra: "C",
        texto: "Aumentar a dose para criar resistência.",
      },
      {
        letra: "D",
        texto: "Esperar a vontade passar sozinha.",
      },
    ],
    respostaCorreta: "B",
    feedback:
      "Reconhecer os gatilhos é o primeiro passo para construir estratégias de enfrentamento e recuperação.",
  },
  {
    enunciado:
      "Ao apresentar o resultado da triagem de envolvimento com substâncias, o que a intervenção breve NÃO deve fazer?",
    alternativas: [
      {
        letra: "A",
        texto: "Apresentar o resultado de forma clara e não julgadora.",
      },
      {
        letra: "B",
        texto: "Reforçar que a decisão de mudar pertence à pessoa.",
      },
      {
        letra: "C",
        texto: "Julgar ou culpar a pessoa pelo seu padrão de uso.",
      },
      {
        letra: "D",
        texto: "Oferecer um menu de opções de mudança.",
      },
    ],
    respostaCorreta: "C",
    feedback:
      "A intervenção breve usa o modelo FRAMES — feedback sem julgamento, responsabilidade da pessoa, orientação, opções, empatia e autoeficácia — nunca culpa.",
  },
];

// ======================================================
// QUIZ ALTERNATIVO A
// ======================================================

const quizA: QuestaoQuiz[] = [
  {
    enunciado: "O que é um comportamento aditivo?",
    alternativas: [
      {
        letra: "A",
        texto: "Uma escolha consciente que a pessoa faz todos os dias.",
      },
      {
        letra: "B",
        texto: "Um sinal de fraqueza moral.",
      },
      {
        letra: "C",
        texto: "Um padrão repetitivo de busca por prazer ou alívio imediato que, com o tempo, escapa ao controle e gera prejuízos — podendo envolver substâncias ou comportamentos sem substância.",
      },
      {
        letra: "D",
        texto: "Algo que só envolve drogas ilícitas.",
      },
    ],
    respostaCorreta: "C",
    feedback:
      "O comportamento aditivo é uma doença cerebral crônica — não falta de caráter — e pode envolver substâncias ou comportamentos como jogos, telas e compulsão alimentar.",
  },
  {
    enunciado: "Quais são os três estágios do ciclo do comportamento aditivo?",
    alternativas: [
      {
        letra: "A",
        texto: "Euforia, equilíbrio e cansaço.",
      },
      {
        letra: "B",
        texto: "Compulsão/busca de recompensa, abstinência/mal-estar e preocupação/antecipação (fissura).",
      },
      {
        letra: "C",
        texto: "Início, meio e fim.",
      },
      {
        letra: "D",
        texto: "Tolerância, curiosidade e abandono.",
      },
    ],
    respostaCorreta: "B",
    feedback:
      "O ciclo começa na busca pela recompensa imediata, passa pelo mal-estar na ausência do estímulo e é sustentado pela fissura (craving), que favorece recaídas.",
  },
  {
    enunciado:
      "O que o tabaco e o álcool em excesso podem causar no corpo ao longo dos anos?",
    alternativas: [
      {
        letra: "A",
        texto: "Nenhum efeito duradouro.",
      },
      {
        letra: "B",
        texto: "Apenas benefícios para relaxar.",
      },
      {
        letra: "C",
        texto: "Efeitos apenas na garganta.",
      },
      {
        letra: "D",
        texto: "Inflamação crônica, estresse oxidativo, maior risco cardiometabólico e alterações na regulação da leitura dos genes.",
      },
    ],
    respostaCorreta: "D",
    feedback:
      "Tabaco e álcool atuam em múltiplos sistemas — e os efeitos se acumulam em silêncio durante anos antes de aparecerem como doença.",
  },
  {
    enunciado:
      "Na metáfora do livro, o que a cessação do uso pode fazer com as marcações do DNA?",
    alternativas: [
      {
        letra: "A",
        texto: "Reorganizar parcialmente as marcações em direção à proteção do organismo.",
      },
      {
        letra: "B",
        texto: "Apagar completamente todo o livro.",
      },
      {
        letra: "C",
        texto: "Nada, pois são permanentes.",
      },
      {
        letra: "D",
        texto: "Reescrever as letras do DNA.",
      },
    ],
    respostaCorreta: "A",
    feedback:
      "As marcas epigenéticas são parcialmente reversíveis — parar e adotar um estilo de vida saudável favorecem a reorganização protetora.",
  },
  {
    enunciado: "O que são os gatilhos de um comportamento aditivo?",
    alternativas: [
      {
        letra: "A",
        texto: "Apenas os sintomas físicos de abstinência.",
      },
      {
        letra: "B",
        texto: "As consequências do uso.",
      },
      {
        letra: "C",
        texto: "Estímulos internos (emoções, tédio, estresse) ou externos (lugares, telas, horários) que disparam o desejo de usar ou repetir o comportamento.",
      },
      {
        letra: "D",
        texto: "Os medicamentos usados no tratamento.",
      },
    ],
    respostaCorreta: "C",
    feedback:
      "Reconhecer os gatilhos é o primeiro passo para construir estratégias de enfrentamento e recuperação.",
  },
  {
    enunciado:
      "Como a triagem de envolvimento com substâncias deve ser interpretada?",
    alternativas: [
      {
        letra: "A",
        texto: "Como um diagnóstico médico definitivo.",
      },
      {
        letra: "B",
        texto: "Como um retrato do momento que orienta a reflexão e, se necessário, a busca por avaliação profissional — nunca como um rótulo ou julgamento.",
      },
      {
        letra: "C",
        texto: "Como uma medida de força de vontade.",
      },
      {
        letra: "D",
        texto: "Como uma competição com outras pessoas.",
      },
    ],
    respostaCorreta: "B",
    feedback:
      "O resultado aponta onde a pessoa pode receber o melhor cuidado — sem definir quem ela é.",
  },
];

// ======================================================
// QUIZ ALTERNATIVO B
// ======================================================

const quizB: QuestaoQuiz[] = [
  {
    enunciado:
      "Qual é a compreensão correta do comportamento aditivo neste módulo?",
    alternativas: [
      {
        letra: "A",
        texto: "É uma escolha que a pessoa pode abandonar a qualquer momento.",
      },
      {
        letra: "B",
        texto: "É um sinal de baixa inteligência.",
      },
      {
        letra: "C",
        texto: "É algo que só ocorre com pessoas sem disciplina.",
      },
      {
        letra: "D",
        texto: "É uma doença cerebral crônica, passível de tratamento — e não falta de caráter ou fraqueza moral.",
      },
    ],
    respostaCorreta: "D",
    feedback:
      "A dependência envolve desregulação dos circuitos de recompensa, motivação, estresse e controle executivo — a abordagem é de cuidado, não de julgamento.",
  },
  {
    enunciado:
      "O que a fissura (craving) representa no ciclo do comportamento aditivo?",
    alternativas: [
      {
        letra: "A",
        texto: "A fase de recompensa imediata.",
      },
      {
        letra: "B",
        texto: "O alívio completo do mal-estar.",
      },
      {
        letra: "C",
        texto: "O desejo intenso e recorrente que domina o pensamento e sustenta o ciclo, favorecendo recaídas.",
      },
      {
        letra: "D",
        texto: "A ausência de qualquer desejo.",
      },
    ],
    respostaCorreta: "C",
    feedback:
      "A fissura é a fase de preocupação/antecipação — reconhecê-la ajuda a planejar estratégias de enfrentamento.",
  },
  {
    enunciado:
      "Além das substâncias, quais comportamentos podem ativar o mesmo circuito de recompensa do cérebro?",
    alternativas: [
      {
        letra: "A",
        texto: "Jogos, apostas, uso excessivo de telas e redes sociais e compulsão alimentar.",
      },
      {
        letra: "B",
        texto: "Apenas exercícios físicos.",
      },
      {
        letra: "C",
        texto: "Somente atividades de lazer saudáveis.",
      },
      {
        letra: "D",
        texto: "Nenhum comportamento sem substância.",
      },
    ],
    respostaCorreta: "A",
    feedback:
      "Comportamentos sem substância ativam os mesmos circuitos de dopamina — e o primeiro passo para lidar com eles é identificar os gatilhos.",
  },
  {
    enunciado:
      "Qual é o primeiro passo para lidar com um comportamento aditivo?",
    alternativas: [
      {
        letra: "A",
        texto: "Esconder o comportamento dos outros.",
      },
      {
        letra: "B",
        texto: "Identificar os gatilhos — internos (emoções, tédio, estresse) e externos (lugares, telas, horários).",
      },
      {
        letra: "C",
        texto: "Aumentar a dose para criar resistência.",
      },
      {
        letra: "D",
        texto: "Esperar a vontade passar sozinha.",
      },
    ],
    respostaCorreta: "B",
    feedback:
      "Reconhecer os gatilhos é o primeiro passo para construir estratégias de enfrentamento e recuperação.",
  },
  {
    enunciado:
      "Como a recaída deve ser interpretada no processo de recuperação?",
    alternativas: [
      {
        letra: "A",
        texto: "Como parte do processo — uma informação sobre o que precisa de mais apoio, não um fracasso.",
      },
      {
        letra: "B",
        texto: "Como um sinal de que a mudança é impossível.",
      },
      {
        letra: "C",
        texto: "Como um motivo para desistir.",
      },
      {
        letra: "D",
        texto: "Como algo que nunca deve acontecer.",
      },
    ],
    respostaCorreta: "A",
    feedback:
      "A recaída não anula os avanços — ela indica onde o suporte precisa ser reforçado, com autocompaixão e persistência.",
  },
  {
    enunciado:
      "Quando é recomendado buscar ajuda profissional?",
    alternativas: [
      {
        letra: "A",
        texto: "Apenas quando a pessoa perde o emprego.",
      },
      {
        letra: "B",
        texto: "Somente em casos de uso de drogas ilícitas.",
      },
      {
        letra: "C",
        texto: "Nunca, pois deve-se resolver sozinho.",
      },
      {
        letra: "D",
        texto: "Quando há dificuldade de controlar o uso apesar dos prejuízos, fissura intensa, sintomas de abstinência ou uso por via injetável.",
      },
    ],
    respostaCorreta: "D",
    feedback:
      "Buscar ajuda não é sinal de fraqueza — é um passo de cuidado; há serviços como UBS, CAPS-AD e o CVV (Ligue 188) para acolher.",
  },
];

// ======================================================
// INSTRUMENTO ASSIST-OMS
// ======================================================

const assistSubstancias = [
  { id: "tabaco", nome: "Tabaco" },
  { id: "alcool", nome: "Bebidas alcoólicas" },
  { id: "cannabis", nome: "Cannabis (maconha)" },
  { id: "cocaina", nome: "Cocaína e derivados (crack)" },
  {
    id: "estimulantes",
    nome: "Estimulantes do tipo anfetamínico",
  },
  {
    id: "inalantes",
    nome: "Inalantes e solventes voláteis",
  },
  {
    id: "sedativos",
    nome: "Sedativos, hipnóticos e calmantes",
  },
  { id: "alucinogenos", nome: "Alucinógenos" },
  { id: "opioides", nome: "Opioides" },
  { id: "outras", nome: "Outras substâncias não listadas" },
];

const questoesAssist: AssistModulo["questoes"] = [
  {
    numero: 2,
    titulo: "Frequência de uso",
    enunciado: "Com que frequência você utilizou esta substância nos últimos três meses?",
    alternativas: [
      { valor: 0, texto: "Nunca" },
      { valor: 2, texto: "Uma ou duas vezes" },
      { valor: 3, texto: "Mensalmente" },
      { valor: 4, texto: "Semanalmente" },
      { valor: 6, texto: "Diariamente ou quase diariamente" },
    ],
  },
  {
    numero: 3,
    titulo: "Forte desejo ou urgência de usar",
    enunciado:
      "Com que frequência você sentiu forte desejo ou urgência de consumir esta substância (fissura/craving)?",
    alternativas: [
      { valor: 0, texto: "Nunca" },
      { valor: 3, texto: "Uma ou duas vezes" },
      { valor: 4, texto: "Mensalmente" },
      { valor: 5, texto: "Semanalmente" },
      { valor: 6, texto: "Diariamente ou quase diariamente" },
    ],
  },
  {
    numero: 4,
    titulo: "Problemas relacionados ao uso",
    enunciado:
      "Com que frequência o uso desta substância resultou em problemas de saúde, sociais, legais ou financeiros?",
    alternativas: [
      { valor: 0, texto: "Nunca" },
      { valor: 4, texto: "Uma ou duas vezes" },
      { valor: 5, texto: "Mensalmente" },
      { valor: 6, texto: "Semanalmente" },
      { valor: 7, texto: "Diariamente ou quase diariamente" },
    ],
  },
  {
    numero: 5,
    titulo: "Impacto nas tarefas esperadas",
    enunciado:
      "Com que frequência você deixou de fazer tarefas que eram normalmente esperadas de você por causa do uso desta substância?",
    alternativas: [
      { valor: 0, texto: "Nunca" },
      { valor: 5, texto: "Uma ou duas vezes" },
      { valor: 6, texto: "Mensalmente" },
      { valor: 7, texto: "Semanalmente" },
      { valor: 8, texto: "Diariamente ou quase diariamente" },
    ],
  },
  {
    numero: 6,
    titulo: "Preocupação de pessoas próximas",
    enunciado:
      "Um amigo, parente ou outra pessoa demonstrou preocupação com seu uso desta substância?",
    alternativas: [
      { valor: 0, texto: "Não, nunca" },
      {
        valor: 3,
        texto: "Sim, mas não nos últimos três meses",
      },
      {
        valor: 6,
        texto: "Sim, nos últimos três meses",
      },
    ],
  },
  {
    numero: 7,
    titulo: "Tentativas de controlar ou interromper o uso",
    enunciado:
      "Você já tentou controlar, diminuir ou parar o uso desta substância e não conseguiu?",
    alternativas: [
      { valor: 0, texto: "Não, nunca" },
      {
        valor: 3,
        texto: "Sim, mas não nos últimos três meses",
      },
      {
        valor: 6,
        texto: "Sim, nos últimos três meses",
      },
    ],
  },
  {
    numero: 8,
    titulo: "Uso por via injetável",
    enunciado:
      "Você já utilizou alguma substância por via injetável?",
    alternativas: [
      { valor: 0, texto: "Não, nunca" },
      {
        valor: 2,
        texto: "Sim, mas não nos últimos três meses",
      },
      {
        valor: 4,
        texto: "Sim, nos últimos três meses",
      },
    ],
  },
];

// ======================================================
// DADOS DA TRIAGEM
// ======================================================

const assist: AssistModulo = {
  titulo: "Triagem ASSIST-OMS",
  introducao: [
    "Esta etapa utiliza o ASSIST (Alcohol, Smoking and Substance Involvement Screening Test), instrumento de rastreamento padronizado pela Organização Mundial da Saúde (OMS) para identificar níveis de risco associados ao uso de substâncias psicoativas.",
    "O questionário contempla dez classes de substâncias. Primeiro, você indicará quais delas já utilizou ao longo da vida. Somente as substâncias assinaladas serão consideradas nas perguntas seguintes.",
    "Cada substância terá seu próprio resultado. A triagem não constitui diagnóstico psiquiátrico ou clínico: ela serve para favorecer a reflexão pessoal e orientar a busca por cuidado quando necessário.",
  ],
  substancias: assistSubstancias,
  perguntaUsoNaVida:
    "Ao longo da sua vida, você já utilizou alguma das substâncias abaixo? Considere o uso sem orientação ou finalidade médica, quando aplicável.",
  questoes: questoesAssist,
  mensagemSeguranca:
    "Atenção: esta triagem é uma ferramenta de reflexão sobre seu envolvimento com substâncias. Ela não substitui avaliação clínica nem diagnóstico profissional. Se o resultado indicar risco moderado ou alto, procure um serviço de saúde para orientação e apoio. Se você usa substâncias por via injetável, busque avaliação especializada. Se estiver em sofrimento intenso ou tiver pensamentos de se machucar, procure ajuda imediatamente: serviços de saúde, CAPS, UPA ou CVV (Ligue 188).",
  devolutivas: {
    baixo:
      "Seu índice de envolvimento atual encontra-se em patamar baixo. Este momento é ideal para consolidar atitudes de cuidado, fortalecer as conexões saudáveis do seu cotidiano e preservar o equilíbrio celular e genético que você já sustenta.",
    moderado:
      "Seus apontamentos revelam alguns sinais de alerta que merecem vigilância atenta. O padrão relatado pode predispor a dificuldades de saúde e convivência no médio prazo. Recomendamos uma conversa sincera com um profissional de confiança na sua Unidade de Saúde para explorar estratégias práticas de redução de danos. Desafie-se a estabelecer uma meta pequena e viável de manejo para os próximos sete dias.",
    alto:
      "Os dados sugerem um envolvimento expressivo que exige acompanhamento técnico próximo. Buscar orientação especializada em serviços de referência (como o CAPS-AD da sua localidade ou profissionais médicos) representa um passo firme e legítimo de proteção à sua integridade. Cuidar de si com auxílio capacitado reflete maturidade e autocuidado.",
  },
  mensagemFinal:
    "Este resultado não define quem você é — ele aponta onde você pode receber o melhor cuidado.",
  recompensaConclusaoXP: 0,
  recompensaDevolutivaXP: 0,
};

// ======================================================
// CONTEÚDO DO MÓDULO 9
// ======================================================

export const modulo9Conteudo: ConteudoModulo & {
  assist: AssistModulo;
} = {
  introducao: [
    "O Módulo 9 aprofunda o pilar da prevenção e manejo de comportamentos aditivos no âmbito da Medicina do Estilo de Vida, estabelecendo a conexão entre padrões aditivos — com e sem substâncias — e a modulação de mecanismos epigenéticos relacionados às doenças crônicas não transmissíveis (DCNT).",
    "O módulo adota uma perspectiva científica não julgadora e desestigmatizante: o comportamento aditivo é compreendido como uma condição de saúde e uma doença cerebral crônica passível de tratamento, afastando-se de noções morais ou de falhas individuais de caráter.",
    "Ao longo das sete telas educativas, você conhecerá os mecanismos envolvidos nos comportamentos aditivos, seus efeitos no organismo, estratégias de enfrentamento e formas de buscar apoio.",
  ],

  dias: [
    // --------------------------------------------------
    // DIA 1 — TELA 6.1
    // --------------------------------------------------
    {
      numero: 1,
      titulo: "O que são comportamentos aditivos?",
      paragrafos: [
        "Um comportamento aditivo caracteriza-se por um padrão repetitivo de busca por prazer imediato ou por alívio momentâneo de desconfortos que, progressivamente, foge ao controle consciente da pessoa. Com a repetição e a adaptação do organismo, esse hábito passa a produzir consequências danosas e visíveis na saúde física, na convivência familiar, nas amizades e no rendimento profissional.",
        "Esse padrão pode manifestar-se por meio do consumo de substâncias químicas — tais como tabaco, bebidas alcoólicas e outras drogas lícitas ou ilícitas — ou por condutas comportamentais sem substância direta, a exemplo de jogos de aposta, tempo excessivo diante de telas e redes sociais, jogos eletrônicos e episódios frequentes de compulsão alimentar.",
        "A neurociência moderna demonstra que o comportamento aditivo decorre de alterações reais nos circuitos neurais de recompensa e autocontrole, configurando uma condição de saúde crônica, e nunca uma falha de conduta, fragilidade moral ou carência de força de vontade.",
      ],
      fraseDestaque:
        "Comportamento aditivo é doença cerebral crônica — e a porta de saída existe.",
      recompensaLeituraXP: 0,
    },

    // --------------------------------------------------
    // DIA 2 — TELA 6.2
    // --------------------------------------------------
    {
      numero: 2,
      titulo: "O ciclo do comportamento aditivo",
      paragrafos: [
        "O avanço do comportamento aditivo ocorre por meio de uma repetição previsível e contínua que atua diretamente nos centros cerebrais de tomada de decisão. O processo organiza-se em três etapas interligadas:",
        "Compulsão e busca: a pessoa busca ativamente o consumo ou a conduta impulsionada pela perspectiva de gratificação rápida ou pela necessidade de extinguir um desconforto momentâneo, promovendo uma descarga desproporcional de neurotransmissores nos circuitos de recompensa.",
        "Abstinência e mal-estar: quando o estímulo cessa e os níveis neuroquímicos retornam a patamares reduzidos, o cérebro manifesta extrema dificuldade em sentir satisfação habitual, gerando irritabilidade marcante, inquietude motora, angústia e reatividade aumentada ao estresse, fatores que empurram o organismo novamente para o uso.",
        "Preocupação e antecipação (fissura): o pensamento passa a ser progressivamente monopolizado pela lembrança do estímulo e pelo planejamento do próximo consumo. Essa fissura persistente afeta o autocontrole voluntário e precipita o reinício do ciclo, consolidando o risco de recaídas mesmo diante do desejo expresso de interromper o hábito.",
      ],
      fraseDestaque:
        "O cérebro aprende rapidamente; o corpo paga a conta lentamente.",
      recompensaLeituraXP: 0,
    },

    // --------------------------------------------------
    // DIA 3 — TELA 6.3
    // --------------------------------------------------
    {
      numero: 3,
      titulo: "O que tabaco e álcool fazem no corpo",
      paragrafos: [
        "O uso contínuo de tabaco expõe o corpo humano a milhares de compostos tóxicos e irritantes, deflagrando um estado inflamatório permanente nos vasos sanguíneos e nas vias aéreas. Esse ambiente gera sobrecarga oxidativa contínua, danifica as células do endotélio e eleva expressivamente a vulnerabilidade biológica para múltiplos tumores, acidentes vasculares encefálicos, infartos agudos do miocárdio e disfunções pulmonares obstrutivas crônicas.",
        "De modo correspondente, o consumo abusivo ou crônico de bebidas alcoólicas sobrecarrega o metabolismo hepático, gera acúmulo de gordura no fígado, desestabiliza o perfil glicêmico e precipita quadros de hipertensão arterial sistêmica, alimentando a inflamação sistêmica.",
        "Concomitantemente, ambas as substâncias agem de modo profundo sobre o sistema nervoso central, remodelando conexões neuronais e fortalecendo as vias que demandam repetição imediata da dose para que a pessoa experimente uma sensação transitória de alívio ou normalidade funcional.",
      ],
      fraseDestaque:
        "Toda substância aditiva cobra um preço — e o corpo paga em silêncio durante anos.",
      recompensaLeituraXP: 0,
    },

    // --------------------------------------------------
    // DIA 4 — TELA 6.4
    // --------------------------------------------------
    {
      numero: 4,
      titulo: "O comportamento aditivo conversa com seus genes",
      paragrafos: [
        "Para compreender como as rotinas aditivas afetam o organismo em nível celular, retomamos a analogia do livro biológico: o conjunto do nosso DNA funciona como as páginas e capítulos de uma grande obra literária; as sequências das letras genéticas permanecem estáveis ao longo da existência; os mecanismos epigenéticos atuam exatamente como pequenos marcadores de leitura ou notas adesivas que estabelecem quais capítulos devem permanecer abertos para leitura diária e quais devem ficar silenciosamente fechados.",
        "A exposição frequente a substâncias como tabaco e álcool insere sinalizações moleculares anômalas nessas páginas, bloqueando a ativação de genes de defesa celular e facilitando a leitura de rotas inflamatórias, sem que uma única letra do DNA tenha sido modificada.",
        "O achado mais transformador da ciência médica reside na reversibilidade parcial dessas marcações: a cessação do tabagismo, o equilíbrio no consumo alcoólico e a consolidação de hábitos protetores viabilizam a gradual remoção dessas sinalizações prejudiciais, reorientando o maquinário celular para a proteção e restauração dos tecidos.",
      ],
      fraseDestaque:
        "Parar é um ato de reescrita biológica: as marcas do hábito podem ser revertidas.",
      recompensaLeituraXP: 0,
    },

    // --------------------------------------------------
    // DIA 5 — TELA 6.5
    // --------------------------------------------------
    {
      numero: 5,
      titulo: "Além das substâncias: telas, jogos e alimentação",
      paragrafos: [
        "Os processos de dependência não estão restritos à ingestão de produtos químicos. Condutas como a dedicação contínua a plataformas de jogos de aposta virtuais, a navegação sem limite em redes sociais digitais, a dependência em jogos eletrônicos e o descontrole periódico com alimentos ultraprocessados hiperpalatáveis recrutam as mesmas vias de dopamina e gratificação ativadas por drogas convencionais.",
        "Na compulsão alimentar episódica, por exemplo, o indivíduo experimenta a ingestão rápida de grandes volumes de produtos ricos em gorduras refinadas e açúcares sem que haja fome fisiológica, desencadeando subsequentes sentimentos de culpa, vergonha e desconforto físico.",
        "Em qualquer modalidade aditiva, a matriz de manutenção é rigorosamente a mesma: respostas automatizadas a gatilhos que operam sem reflexão prévia. O passo inicial e decisivo para a retomada da autonomia consiste na identificação clara desses disparadores, permitindo antecipar e reorganizar o comportamento.",
      ],
      fraseDestaque:
        "Gatilhos podem ser internos (emoções, tédio, estresse) ou externos (lugares, telas, horários) — reconhecê-los é o primeiro passo.",
      recompensaLeituraXP: 0,
    },

    // --------------------------------------------------
    // DIA 6 — TELA 6.6
    // --------------------------------------------------
    {
      numero: 6,
      titulo: "Estratégias de enfrentamento e recuperação",
      paragrafos: [
        "Uma vez reconhecidos os contextos e sentimentos que precipitam a busca pelo comportamento, torna-se viável desenhar respostas estruturadas para interromper o automatismo, estabelecendo uma relação entre gatilho e ação planejada.",
        "Estresse agudo, sobrecarga ou ansiedade: responder com micropausas, manobras de respiração diafragmática pausada, caminhadas leves ao ar livre e estabilização das horas de repouso noturno, conectando os pilares trabalhados nos módulos anteriores.",
        "Tédio no período noturno ou aprisionamento diante de telas: implementar rotinas sistemáticas de higiene digital, removendo aparelhos do dormitório e resgatando atividades manuais, leitura física ou passatempos desconectados.",
        "Fissura repentina por guloseimas e ultraprocessados: manter acesso prático a opções alimentares in natura ou minimamente processadas, antecipando compras estruturadas e planejamento prévio dos horários de refeição.",
        "Cobrança social direta ou permanência em ambientes facilitadores de consumo: reconfigurar temporariamente a exposição a círculos sociais de risco, estabelecendo limites interpessoais afirmativos e aproximando-se de pessoas que compartilhem metas de autocuidado.",
        "A jornada de recuperação apoia-se em avanços graduais sustentados, busca por apoio de confiança e prática genuína de autocompaixão. Episódios de retorno momentâneo ao hábito (recaídas) devem ser compreendidos como etapas inerentes ao processo de reaprendizagem neurológica e de consolidação comportamental, jamais como sentenças de fracasso ou encerramento da busca por bem-estar.",
      ],
      fraseDestaque:
        "Recaída não é fracasso: é informação sobre o que precisa de mais apoio.",
      recompensaLeituraXP: 0,
    },

    // --------------------------------------------------
    // DIA 7 — TELA 6.7
    // --------------------------------------------------
    {
      numero: 7,
      titulo: "Quando e como buscar ajuda",
      paragrafos: [
        "Buscar auxílio profissional especializado não constitui fragilidade ou ausência de determinação, configurando uma decisão madura de responsabilidade com a própria vida. A solicitação de suporte técnico torna-se prioritária quando o participante reconhece indicativos específicos em sua rotina:",
        "Fracassos sucessivos nas tentativas voluntárias de diminuir ou interromper o padrão aditivo, com permanência do uso a despeito de danos declarados.",
        "Presença diária de pensamentos intrusivos e impulsos intensos voltados à obtenção da substância ou à execução da conduta (fissura).",
        "Manifestação de desconfortos fisiológicos e emocionais perante períodos sem o estímulo (tremores, suor frio, náuseas, oscilações intensas de humor).",
        "Verbalização frequente de preocupação por parte de familiares, colegas de trabalho e pessoas do convívio direto.",
        "Queda expressiva no rendimento acadêmico ou corporativo, abandono de cuidados pessoais básicos e isolamento relacional progressivo.",
        "Qualquer histórico ou prática corrente de utilização de substâncias por via injetável.",
        "A rede de acolhimento técnico e apoio comunitário encontra-se amplamente estruturada no sistema público de saúde e em instâncias da sociedade:",
        "Unidades Básicas de Saúde (UBS): porta de entrada territorial para avaliação clínica inicial, acolhimento de enfermagem, suporte médico continuado e acompanhamento de rotina.",
        "Centros de Atenção Psicossocial — Álcool e Drogas (CAPS-AD): serviços de saúde mental com equipes multidisciplinares completas, direcionados ao cuidado especializado e comunitário.",
        "Ambulatórios Especializados em Saúde Mental e Hospitais Gerais: suporte médico para manejos complexos e desintoxicação supervisionada quando indicado.",
        "Irmandades e Grupos Mútuos de Autoajuda: reuniões locais ou remotas focadas em partilha empática de experiências, como Alcoólicos Anônimos (AA) e Narcóticos Anônimos (NA).",
        "Centro de Valorização da Vida (CVV — Disque 188): canal nacional gratuito de suporte emocional confidencial, disponível 24 horas todos os dias.",
        "Atenção: se você está em sofrimento intenso ou tem pensamentos de se machucar, não espere: procure ajuda imediatamente — serviços de saúde, CAPS, UPA ou o CVV (Ligue 188).",
      ],
      fraseDestaque:
        "Buscar ajuda é uma decisão de cuidado e responsabilidade com a própria vida.",
      recompensaLeituraXP: 0,
    },
  ],

  // ----------------------------------------------------
  // QUIZ — DIA 8
  // ----------------------------------------------------
  quiz: {
    titulo: "Quiz de consolidação",
    introducao:
      "Você chegou ao momento de revisar os principais conceitos deste módulo. O objetivo do quiz não é avaliar ou julgar seu desempenho, mas ajudar a consolidar os conhecimentos apresentados nas telas educativas. Após cada resposta, você receberá um feedback explicativo.",
    questoes: quizOriginal,
    versoes: {
      original: quizOriginal,
      A: quizA,
      B: quizB,
    },
    recompensaConclusaoXP: 0,
    recompensaBonusXP: 0,
    minimoAcertosBonus: 4,
  },

  // ----------------------------------------------------
  // TRIAGEM ASSIST-OMS — DIA 9
  // ----------------------------------------------------
  assist,
};
