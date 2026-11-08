
import type { ConteudoModulo } from "@/types/conteudoModulo";

export const modulo3Conteudo: ConteudoModulo = {
  introducao: [
    "Bem-vindo(a) ao Módulo 03! Na semana passada, você conheceu as cinco fases da mudança e descobriu que a motivação pode ser fortalecida — ela não depende apenas de força de vontade. Agora, vamos aprofundar essa conversa: o que sustenta a motivação na prática e como transformar o esforço inicial em hábitos que quase se cuidam sozinhos.",
    "Nesta semana, você vai conhecer as três necessidades que alimentam a motivação — autonomia, competência e vínculo —, aprender a conectar a mudança aos seus valores pessoais, entender o ciclo que transforma uma ação em hábito e conhecer estratégias que tornam o comportamento saudável cada vez mais automático.",
    "A semana tem 7 dias: nos Dias 1 a 4 você realiza as leituras e reflexões, no Dia 5 assiste ao vídeo, no Dia 6 faz a revisão com o quiz e no Dia 7 responde à triagem sobre sua motivação e seus hábitos. Cada dia de leitura rende 15 XP (10 leitura + 5 reflexão), fechando a meta diária.",
  ],

  dias: [
    {
      numero: 1,
      titulo: "Motivação: as três necessidades que a sustentam",
      paragrafos: [
        "Na semana passada, você viu que a motivação pode crescer quando a mudança faz sentido, parece possível e conta com apoio. Agora, vale olhar mais de perto para cada um desses três apoios — autonomia, competência e vínculo — porque cada um responde a uma pergunta diferente que você faz a si mesmo(a).",
        "A autonomia responde à pergunta: \"essa mudança é minha?\". Quando a escolha é percebida como própria — e não como imposição de familiares, colegas ou do aplicativo —, a relação com o objetivo se torna mais pessoal e duradoura. Por isso, vale sempre responder por que a mudança importa para você, e não apenas por que ela importa para os outros.",
        "A competência responde à pergunta: \"eu consigo?\". Metas muito difíceis no início podem gerar frustração e sensação de fracasso, mesmo em pessoas dispostas. Já objetivos menores e alcançáveis permitem reconhecer avanços concretos — e cada avanço aumenta a confiança para continuar.",
        "O vínculo responde à pergunta: \"estou sozinho(a) nisso?\". Ter alguém com quem compartilhar dificuldades, receber incentivo ou realizar uma atividade juntos favorece a continuidade. O apoio não precisa ser grande: um recado, uma companhia para caminhar ou uma conversa sincera já sustentam o esforço.",
        "Nenhuma das três necessidades precisa estar perfeita para começar. Reconhecer qual delas precisa de mais cuidado neste momento já é um passo prático.",
      ],
      fraseDestaque:
        "Motivação sustentada nasce de escolhas próprias, progresso percebido e apoio verdadeiro.",
      atividade: {
        titulo: "Atividade Reflexiva do Dia 1",
        pergunta:
          "Em relação a uma mudança de hábito de saúde que você deseja fazer, o que mais poderia sustentá-la neste momento?",
        opcoes: [
          {
            valor: 1,
            texto: "A liberdade de escolher uma mudança que faça sentido para mim (autonomia).",
          },
          {
            valor: 2,
            texto: "Perceber que sou capaz, com passos pequenos e possíveis (competência).",
          },
          {
            valor: 3,
            texto: "Contar com apoio e companhia de pessoas que me incentivam (vínculo).",
          },
          { valor: 4, texto: "Duas dessas necessidades, juntas." },
          { valor: 5, texto: "As três, juntas." },
          {
            valor: 6,
            texto: "Nenhuma delas parece suficiente neste momento.",
          },
          { valor: 7, texto: "Prefiro não responder." },
        ],
        recompensaXP: 5,
      },
      recompensaLeituraXP: 10,
    },

    {
      numero: 2,
      titulo: "Conectando a mudança aos seus valores",
      paragrafos: [
        "Há uma diferença importante entre fazer algo porque \"deveria\" e fazer algo porque ele conversa com o que você valoriza. A motivação que vem de dentro — ligada ao prazer, aos valores e à identidade — é a que mais prediz a manutenção a longo prazo. Uma mudança sustentada apenas por cobrança externa tende a acabar quando a cobrança some.",
        "Conectar a meta aos seus valores significa responder: o que essa mudança representa na minha vida? Para algumas pessoas, é estar presente e saudável para a família; para outras, é ter energia para o trabalho ou os estudos; para outras ainda, é cuidar de si porque merecem atenção, ou viver com autonomia ao longo dos anos. Não existe valor certo — existe o seu.",
        "Quando a meta conversa com seus valores, o esforço ganha direção: nos dias difíceis, você lembra não apenas o que está fazendo, mas por que está fazendo. Esse é um dos motivos pelos quais o programa sempre convida você a escolher metas próprias, em vez de prescrever comportamentos prontos.",
        "Também vale lembrar: não é preciso esperar sentir motivação intensa para agir. Muitas vezes, é a pequena ação realizada que constrói a confiança — e a confiança reacende a motivação.",
      ],
      fraseDestaque:
        "Quando a meta conversa com seus valores, o esforço tem direção.",
      atividade: {
        titulo: "Atividade Reflexiva do Dia 2",
        pergunta:
          "Qual valor mais conecta você ao cuidado com a sua saúde neste momento?",
        opcoes: [
          {
            valor: 1,
            texto: "Estar presente e saudável para minha família.",
          },
          {
            valor: 2,
            texto: "Ter energia e disposição para meu trabalho ou estudos.",
          },
          {
            valor: 3,
            texto: "Cuidar de mim, porque mereço atenção e cuidado.",
          },
          {
            valor: 4,
            texto: "Viver mais e melhor, com autonomia ao longo dos anos.",
          },
          {
            valor: 5,
            texto: "Sentir-me bem com meu corpo e minha mente.",
          },
          {
            valor: 6,
            texto: "Ainda não consegui identificar um valor.",
          },
          { valor: 7, texto: "Prefiro não responder." },
        ],
        recompensaXP: 5,
      },
      recompensaLeituraXP: 10,
    },

    {
      numero: 3,
      titulo: "Do esforço ao hábito: o ciclo que automatiza",
      paragrafos: [
        "No início, qualquer comportamento novo exige atenção e esforço: é preciso lembrar, decidir e vencer a dificuldade de começar. Com a repetição em um contexto estável, porém, essa mesma ação pode se tornar quase automática — é assim que os hábitos se formam.",
        "O ciclo do hábito tem três peças. A deixa é o gatilho que inicia o comportamento: um horário, um lugar, uma situação ou uma atividade que acontece antes. A rotina é o comportamento em si: caminhar, preparar uma refeição, organizar o dia. A recompensa é o que reforça a repetição: a sensação de bem-estar, o prazer da atividade, o progresso percebido.",
        "Imagine alguém que deseja caminhar mais. Se a caminhada passa a acontecer sempre depois do almoço (deixa), por dez minutos (rotina) e vem acompanhada de um podcast favorito ou de uma sensação de leveza (recompensa), o cérebro começa a associar as três peças. Com o tempo, o comportamento acontece com menos decisão consciente e menos esforço.",
        "O objetivo dessa estratégia é simples e poderoso: reduzir a dependência da força de vontade. Quanto mais automático o comportamento, menos custoso ele se torna — e menos a mudança depende de \"se sentir motivado(a)\" todos os dias.",
      ],
      fraseDestaque:
        "Um hábito começa com uma ação possível e se fortalece com a repetição.",
      atividade: {
        titulo: "Atividade Reflexiva do Dia 3",
        pergunta:
          "Pensando em um hábito saudável que você quer construir, qual deixa poderia iniciá-lo na sua rotina?",
        opcoes: [
          {
            valor: 1,
            texto: "Um horário fixo do dia (por exemplo, logo após o almoço).",
          },
          {
            valor: 2,
            texto: "Um lugar ou situação estável (por exemplo, ao chegar em casa).",
          },
          {
            valor: 3,
            texto: "Uma atividade que já faço (por exemplo, depois do café da manhã).",
          },
          {
            valor: 4,
            texto: "Um objeto visível como lembrete (por exemplo, o tênis ao lado da porta).",
          },
          {
            valor: 5,
            texto: "Ainda não sei qual deixa funcionaria para mim.",
          },
          {
            valor: 6,
            texto: "Não pretendo construir um novo hábito neste momento.",
          },
        ],
        recompensaXP: 5,
      },
      recompensaLeituraXP: 10,
    },

    {
      numero: 4,
      titulo: "Da estratégia à prática: montando seu plano de hábito",
      paragrafos: [
        "Com o ciclo do hábito em mente, algumas estratégias ajudam a montar um plano que realmente funciona:",
        "Intenção de implementação: definir antecipadamente quando, onde e como a ação será realizada. Em vez de \"quero me movimentar mais\", a pessoa decide: \"nas segundas e quartas-feiras, vou caminhar por dez minutos depois do almoço\". Essa decisão concreta transforma intenção genérica em plano.",
        "Empilhamento de hábitos: ancorar o novo comportamento em uma rotina que já existe. Depois de preparar o café da manhã, reservar alguns minutos para um novo hábito — a rotina antiga vira a deixa do novo.",
        "Desenho do ambiente: tornar a escolha saudável a mais fácil e a mais visível. Deixar os materiais à vista, preparar antecipadamente o que for necessário e reduzir obstáculos do hábito indesejado (por exemplo, não estocar ultraprocessados) diminui o esforço de começar.",
        "Contexto estável: manter a mesma deixa, o mesmo lugar e o mesmo horário sempre que possível. A regularidade ensina o corpo e a mente a reconhecer o momento da ação.",
        "Monitoramento com retorno frequente: registrar quando o comportamento acontece ajuda a perceber a frequência real, identificar o que facilita e o que dificulta, e celebrar pequenos avanços.",
        "Perder um dia não significa perder todo o progresso. Os hábitos não se formam em um prazo igual para todas as pessoas — a retomada faz parte do processo.",
      ],
      fraseDestaque:
        "Um plano possível hoje vale mais do que um plano perfeito para amanhã.",
      atividade: {
        titulo: "Atividade Prática do Dia 4",
        pergunta:
          "Escolha um hábito que você quer construir e indique qual estratégia você vai usar nos próximos sete dias:",
        opcoes: [
          {
            valor: 1,
            texto: "Definir minha intenção de implementação: dia(s), horário e local da ação.",
          },
          {
            valor: 2,
            texto: "Empilhar: ancorar o novo hábito em uma rotina que já existe.",
          },
          {
            valor: 3,
            texto: "Desenhar o ambiente: deixar os materiais à vista e acessíveis.",
          },
          {
            valor: 4,
            texto: "Registrar cada vez que realizo a ação, para acompanhar o progresso.",
          },
          {
            valor: 5,
            texto: "Reduzir obstáculos do hábito indesejado (por exemplo, não estocar ultraprocessados).",
          },
          {
            valor: 6,
            texto: "Outra estratégia que faça sentido para mim.",
          },
          {
            valor: 7,
            texto: "Não pretendo realizar uma ação desse tipo nesta semana.",
          },
        ],
        recompensaXP: 10,
      },
      recompensaLeituraXP: 10,
    },
  ],

  fechamentoLeitura: {
    paragrafos: [
      "Com os Dias 1 a 4, você aprofundou o que sustenta a motivação — autonomia, competência, vínculo e a conexão com seus valores — e conheceu o ciclo que transforma esforço em hábito, junto com estratégias práticas: intenção de implementação, empilhamento, desenho do ambiente, contexto estável e monitoramento.",
      "Você não precisa de motivação intensa todos os dias. Precisa de um contexto que facilite a repetição — e de um próximo passo possível.",
      "No Dia 5 você assiste ao vídeo; no Dia 6 realiza a revisão com o quiz; e no Dia 7 responde à triagem sobre sua motivação e seus hábitos.",
    ],
    fraseDestaque:
      "Hábitos não dependem de motivação intensa todos os dias — dependem de contexto que facilite a repetição.",
  },

  video: {
    titulo: "O que sustenta a motivação e como transformar esforço em hábito",
    descricao: [
      "Neste dia, você assistirá a um vídeo educativo sobre o que sustenta a motivação e como o esforço se transforma em hábito, mostrando estratégias práticas de automatização do comportamento. Enquanto assiste, pense em um hábito que você deseja construir e em qual estratégia cabe melhor na sua rotina.",
    ],
    recompensaXP: 10,
  },

  quiz: {
    titulo: "Revisão do conteúdo e Quiz",
    introducao:
      "Você chegou ao momento de revisar os principais conceitos desta semana. O objetivo do quiz não é avaliar ou julgar o seu desempenho, mas ajudá-lo(a) a consolidar os conhecimentos apresentados ao longo dos dias de leitura. Lembre-se: errar faz parte da aprendizagem. Após cada resposta, você receberá um feedback explicando o conceito trabalhado.",
    questoes: [
      {
        enunciado: "O que sustenta a motivação ao longo do tempo?",
        alternativas: [
          {
            letra: "A",
            texto: "Cobranças externas e prazos rígidos.",
          },
          {
            letra: "B",
            texto: "Escolhas próprias (autonomia), percepção de capacidade (competência) e apoio de pessoas significativas (vínculo).",
          },
          {
            letra: "C",
            texto: "Motivação intensa todos os dias, sem exceção.",
          },
          {
            letra: "D",
            texto: "Resultados perfeitos e imediatos.",
          },
        ],
        respostaCorreta: "B",
        feedback:
          "Autonomia, competência e vínculo são as três necessidades que fortalecem a motivação — junto com a conexão aos seus valores pessoais.",
      },
      {
        enunciado: "Por que conectar a meta a valores pessoais ajuda?",
        alternativas: [
          {
            letra: "A",
            texto: "Porque valores tornam a meta obrigatória.",
          },
          {
            letra: "B",
            texto: "Porque a motivação que vem de dentro (prazer, valores, identidade) prediz a manutenção a longo prazo.",
          },
          {
            letra: "C",
            texto: "Porque valores substituem o esforço.",
          },
          {
            letra: "D",
            texto: "Porque só funciona para atletas.",
          },
        ],
        respostaCorreta: "B",
        feedback:
          "Conectar a meta ao que importa de verdade — família, trabalho, autocuidado — dá direção e aumenta a persistência.",
      },
      {
        enunciado: "Qual é o ciclo que transforma uma ação em hábito?",
        alternativas: [
          {
            letra: "A",
            texto: "Recompensa → deixa → rotina.",
          },
          {
            letra: "B",
            texto: "Deixa (gatilho) → rotina (comportamento) → recompensa (reforço).",
          },
          {
            letra: "C",
            texto: "Rotina → recompensa → deixa.",
          },
          {
            letra: "D",
            texto: "Deixa → recompensa → rotina.",
          },
        ],
        respostaCorreta: "B",
        feedback:
          "O hábito é um comportamento automatizado pela repetição em contexto estável: deixa, rotina e recompensa.",
      },
      {
        enunciado: "O que é \"empilhamento de hábitos\"?",
        alternativas: [
          {
            letra: "A",
            texto: "Fazer vários hábitos ao mesmo tempo.",
          },
          {
            letra: "B",
            texto: "Ancorar o novo comportamento em uma rotina que já existe.",
          },
          {
            letra: "C",
            texto: "Substituir um hábito por outro.",
          },
          {
            letra: "D",
            texto: "Repetir o hábito apenas nos fins de semana.",
          },
        ],
        respostaCorreta: "B",
        feedback:
          "Por exemplo: depois de preparar o café da manhã (rotina existente), reservar alguns minutos para um novo comportamento — a rotina antiga vira a deixa do novo.",
      },
      {
        enunciado: "Como o \"desenho do ambiente\" ajuda?",
        alternativas: [
          {
            letra: "A",
            texto: "Tornando a escolha saudável a mais fácil e a mais visível.",
          },
          {
            letra: "B",
            texto: "Escondendo todas as opções.",
          },
          {
            letra: "C",
            texto: "Aumentando a disciplina por força de vontade.",
          },
          {
            letra: "D",
            texto: "Eliminando a necessidade de repetição.",
          },
        ],
        respostaCorreta: "A",
        feedback:
          "Deixar os materiais acessíveis e à vista reduz obstáculos: o objetivo é reduzir a dependência da força de vontade — quanto mais automático, menos custoso.",
      },
      {
        enunciado: "O que fazer quando um dia é perdido?",
        alternativas: [
          {
            letra: "A",
            texto: "Abandonar o hábito definitivamente.",
          },
          {
            letra: "B",
            texto: "Começar tudo de novo do zero.",
          },
          {
            letra: "C",
            texto: "Retomar no dia seguinte — perder um dia não apaga o progresso.",
          },
          {
            letra: "D",
            texto: "Aumentar a meta para compensar.",
          },
        ],
        respostaCorreta: "C",
        feedback:
          "A retomada faz parte do processo; o importante é continuar praticando, sem culpa e sem punição.",
      },
    ],
    recompensaConclusaoXP: 20,
    recompensaBonusXP: 5,
    minimoAcertosBonus: 4,
  },

  triagem: {
    titulo: "Triagem de motivação e hábitos",
    introducao: [
      "Agora é hora de observar o que sustenta (ou trava) a sua motivação. Você responderá a uma triagem que convida à reflexão sobre o quanto a mudança que você deseja depende de suas próprias decisões, o quanto você se percebe capaz de realizá-la, o quanto conta com apoio de outras pessoas e como está a rotina que cerca o hábito escolhido.",
      "Não existe resposta ideal, e o objetivo não é avaliar sua personalidade ou sua capacidade. A proposta é identificar seu ponto de partida e orientar a reflexão sobre o próximo passo possível — fortalecer a autonomia, construir confiança ou buscar apoio.",
      "Ao final, procure reconhecer uma ação pequena e possível. A triagem não representa uma avaliação definitiva de quem você é e não substitui avaliação profissional.",
    ],
    recompensaConclusaoXP: 20,
    recompensaDevolutivaXP: 5,
  },
};
