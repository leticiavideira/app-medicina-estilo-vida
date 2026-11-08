import type { ConteudoModulo } from "@/types/conteudoModulo";

export const modulo4Conteudo: ConteudoModulo = {
  introducao: [
    "Bem-vindo(a) ao Módulo 04! Você já conhece as fases da mudança, o que sustenta a motivação e como transformar esforço em hábito. Nesta semana, o foco é o planejamento: metas que funcionam de verdade — e uma descoberta surpreendente: suas escolhas diárias conversam com seus genes.",

    "Nesta semana, você vai aprender a desenhar metas específicas e possíveis, conhecer o conceito de Meta Mínima Viável, descobrir — sem promessas milagrosas — como o estilo de vida pode modular a leitura dos seus genes, e registrar a meta que vai acompanhá-lo(a) nas próximas semanas do programa.",

    "A semana tem 7 dias: nos Dias 1 a 4 você realiza as leituras e reflexões, no Dia 5 assiste ao vídeo, no Dia 6 faz a revisão com o quiz e no Dia 7 responde à triagem sobre prontidão para a mudança. Cada dia de leitura rende 15 XP (10 leitura + 5 reflexão), fechando a meta diária.",

    "Uma meta possível hoje vale mais do que um plano perfeito para amanhã.",
  ],

  dias: [
    {
      numero: 1,
      titulo: "Metas que funcionam: específicas e mensuráveis",

      paragrafos: [
        'Transformar uma intenção em comportamento exige planejamento. Metas amplas — como "vou cuidar melhor da saúde" — são difíceis de acompanhar e fáceis de abandonar, porque não dizem o que fazer, quando nem como.',

        'Uma meta útil tem três características. Ela é específica: descreve um comportamento concreto ("incluir uma caminhada curta"), e não um resultado vago ("ficar mais saudável"). Ela é mensurável: permite saber se aconteceu — quantos dias, quantos minutos, quantas porções. E ela tem prazo: um horizonte claro, como "nos próximos sete dias".',

        "Quanto mais claro for o comportamento desejado, mais fácil é identificar quando e como realizá-lo — e mais simples se torna perceber o progresso. Você pode notar a conexão com a semana anterior: uma meta específica alimenta a intenção de implementação (quando, onde e como), que é uma das estratégias que transformam esforço em hábito.",

        "Também é importante que a meta considere as condições reais da sua semana: o tempo disponível, as obrigações e o que já funciona na sua rotina. Meta possível é meta que respeita a sua vida, e não o contrário.",
      ],

      fraseDestaque: "Uma meta clara transforma intenção em ação.",

      atividade: {
        titulo: "Atividade Reflexiva do Dia 1",
        pergunta:
          "Em relação a uma meta de saúde que você deseja alcançar, qual afirmação descreve melhor sua situação atual?",

        opcoes: [
          {
            valor: 1,
            texto: "Já tenho uma meta específica, com comportamento e prazo definidos.",
          },
          {
            valor: 2,
            texto: "Tenho uma meta geral, mas ainda preciso torná-la específica.",
          },
          {
            valor: 3,
            texto: "Tenho várias metas ao mesmo tempo e me sinto disperso(a).",
          },
          {
            valor: 4,
            texto: "Ainda não defini uma meta clara neste momento.",
          },
          {
            valor: 5,
            texto: "Prefiro não responder.",
          },
        ],

        recompensaXP: 5,
      },

      recompensaLeituraXP: 10,
    },

    {
      numero: 2,
      titulo: "Começar pequeno: a Meta Mínima Viável",

      paragrafos: [
        "Muitas mudanças começam com expectativas elevadas: tentar alterar vários aspectos da rotina ao mesmo tempo, cobrar resultados rápidos e ambicionar a versão ideal de si. Quando os resultados demoram ou surgem dificuldades, é comum sentir frustração e abandonar o objetivo.",

        'Por isso, começar pequeno não é falta de ambição — é uma estratégia. Uma Meta Mínima Viável é uma ação pequena, específica e realista que serve de ponto de partida. Em vez de "caminhar uma hora todos os dias", por exemplo: "caminhar dez minutos em três dias da semana". O tamanho pequeno não reduz o valor da mudança: ele cria a oportunidade real de começar, protege a confiança em si e deixa espaço para crescer.',

        "A progressão gradual é o próximo passo: aumentar o volume e a intensidade aos poucos, conforme a adaptação. Uma caminhada de dez minutos pode se tornar vinte; três dias podem se tornar quatro. Cada aumento vem depois que o anterior já está confortável.",

        "Quando a meta é possível, o progresso aparece — e o progresso percebido alimenta a competência, uma das necessidades que sustentam a motivação, como você viu no Módulo 03.",
      ],

      fraseDestaque:
        "Começar pequeno protege a confiança — e a confiança sustenta o caminho.",

      atividade: {
        titulo: "Atividade Reflexiva do Dia 2",
        pergunta: "O que mais dificulta o início de mudanças para você?",

        opcoes: [
          {
            valor: 1,
            texto: "Expectativas muito altas e planos grandes demais.",
          },
          {
            valor: 2,
            texto: "Falta de tempo para ações maiores.",
          },
          {
            valor: 3,
            texto: "Medo de não conseguir manter.",
          },
          {
            valor: 4,
            texto: "Desânimo quando os resultados não aparecem rápido.",
          },
          {
            valor: 5,
            texto: "Nada disso — consigo começar mesmo com ações grandes.",
          },
          {
            valor: 6,
            texto: "Ainda não sei identificar.",
          },
          {
            valor: 7,
            texto: "Prefiro não responder.",
          },
        ],

        recompensaXP: 5,
      },

      recompensaLeituraXP: 10,
    },

    {
      numero: 3,
      titulo: "O estilo de vida conversa com seus genes",

      paragrafos: [
        "Além de influenciar hábitos e rotina, o estilo de vida se relaciona a processos biológicos. Para compreender essa relação, retome a metáfora do livro: o DNA é um livro de instruções, os genes são os capítulos e os mecanismos epigenéticos funcionam como marcadores que influenciam quais trechos são utilizados pelo organismo. O livro continua o mesmo — o que pode mudar é como ele é lido.",

        "A epigenética estuda como fatores do ambiente e do estilo de vida participam da regulação da expressão dos genes sem alterar a sequência do DNA. Alimentação, atividade física, sono, estresse, exposição a substâncias e qualidade dos vínculos podem estar envolvidos nesses processos.",

        "É importante delimitar o alcance dessa descoberta. Isso não significa que cada escolha determina diretamente como seus genes funcionarão, nem que mudar um hábito garanta a prevenção de doenças. O organismo é complexo, e a saúde resulta da interação de diferentes fatores — genéticos, ambientais e de cuidado.",

        "O que essa relação reforça é a importância de cuidar da saúde de maneira contínua, sem buscar resultados imediatos ou perfeição. As escolhas cotidianas são uma parte do cuidado — e cada pessoa pode construir estratégias que façam sentido para sua realidade.",
      ],

      fraseDestaque:
        "Suas escolhas de hoje ajudam a definir a leitura de amanhã — sem alterar o texto original.",

      atividade: {
        titulo: "Atividade Reflexiva do Dia 3",
        pergunta:
          "Qual afirmação melhor descreve sua compreensão sobre a relação entre estilo de vida e genes?",

        opcoes: [
          {
            valor: 1,
            texto: "O estilo de vida pode modular a leitura dos genes, sem alterá-los.",
          },
          {
            valor: 2,
            texto: "O estilo de vida reescreve o DNA de cada pessoa.",
          },
          {
            valor: 3,
            texto: "O estilo de vida garante que ninguém desenvolva doenças.",
          },
          {
            valor: 4,
            texto: "O estilo de vida não tem qualquer relação com os genes.",
          },
          {
            valor: 5,
            texto: "Não tenho clareza sobre essa relação ainda.",
          },
        ],

        recompensaXP: 5,
      },

      recompensaLeituraXP: 10,
    },

    {
      numero: 4,
      titulo: "Registrando sua Meta Mínima Viável da semana",

      paragrafos: [
        "Uma meta que permanece apenas na cabeça compete com dezenas de outras preocupações. Registrar a meta por escrito — no aplicativo, em um caderno ou em um lembrete visível — a mantém presente e facilita acompanhar os avanços. A meta registrada também fica disponível para revisão: se a semana mudar, a meta pode ser ajustada com honestidade, sem julgamento.",

        "Junto com o registro, dois gestos sustentam o caminho. O primeiro é antecipar obstáculos: se a caminhada ao ar livre não for possível em determinado dia, qual seria a alternativa compatível — um trecho a pé, alguns minutos em casa, outra atividade? Pensar na alternativa antes da dificuldade evita que um imprevisto vire abandono.",

        "O segundo é celebrar o progresso. Reconhecer o que foi possível realizar é tão importante quanto planejar: o progresso não precisa ser perfeito para ter valor. Cada semana em que a Meta Mínima Viável aparece — mesmo que de forma imperfeita — é uma semana de cuidado construído.",

        "Dificuldades e interrupções fazem parte de muitos processos de mudança. Uma interrupção não apaga automaticamente o que já foi construído; observar o que dificultou e ajustar a estratégia é o que mantém o caminho vivo.",

        "Sua Meta Mínima Viável registrada hoje vai acompanhar você nos próximos módulos do programa: ela será retomada nas devolutivas das triagens e nas celebrações de fim de módulo.",
      ],

      fraseDestaque:
        "Registrar, celebrar e ajustar: três gestos que sustentam a mudança.",

      atividade: {
        titulo: "Atividade Prática do Dia 4",
        pergunta:
          "Registre sua Meta Mínima Viável para os próximos sete dias — uma ação pequena, específica e possível. Qual alternativa melhor representa seu registro?",

        opcoes: [
          {
            valor: 1,
            texto: "Defini uma ação concreta, com dia(s), horário e local.",
          },
          {
            valor: 2,
            texto: "Defini a ação, mas ainda preciso definir dia e horário.",
          },
          {
            valor: 3,
            texto: "Tenho uma intenção geral, mas não defini uma ação concreta.",
          },
          {
            valor: 4,
            texto: "Já estou realizando a mudança e pretendo mantê-la.",
          },
          {
            valor: 5,
            texto: "Preciso adaptar meu plano por causa de obstáculos práticos.",
          },
          {
            valor: 6,
            texto: "Não pretendo definir uma meta nesta semana.",
          },
          {
            valor: 7,
            texto: "Ainda não identifiquei um hábito para trabalhar.",
          },
        ],

        recompensaXP: 10,
      },

      recompensaLeituraXP: 10,
    },
  ],

  fechamentoLeitura: {
    paragrafos: [
      "Com os Dias 1 a 4, você aprendeu a desenhar metas específicas, mensuráveis e com prazo; conheceu a Meta Mínima Viável e a progressão gradual; descobriu como o estilo de vida pode modular a leitura dos seus genes — sem promessas milagrosas e com marcas parcialmente reversíveis; e registrou a meta que vai acompanhá-lo(a) no programa.",

      "No Dia 5 você assiste ao vídeo; no Dia 6 realiza a revisão com o quiz; e no Dia 7 responde à triagem sobre prontidão para a mudança.",
    ],

    fraseDestaque:
      "Metas possíveis e cuidado contínuo: é assim que a mudança se sustenta.",
  },

  video: {
    titulo: "Metas que funcionam e como o estilo de vida conversa com seus genes",

    descricao: [
      "Neste dia, você assistirá a um vídeo educativo sobre metas que funcionam e sobre a conversa entre estilo de vida e genes. Enquanto assiste, reveja a Meta Mínima Viável que você registrou e pense em como ela se conecta aos seus valores e à sua rotina.",
    ],

    recompensaXP: 10,
    recompensaMicropraticaXP: 5,
  },

  quiz: {
    titulo: "Quiz de Revisão",
    introducao: [
      "Você chegou ao momento de revisar os principais conceitos desta semana. O objetivo do quiz não é avaliar ou julgar o seu desempenho, mas ajudá-lo(a) a consolidar os conhecimentos apresentados ao longo dos dias de leitura. Lembre-se: errar faz parte da aprendizagem. Após cada resposta, você receberá um feedback explicando o conceito trabalhado.",

      "O objetivo não é acertar tudo — é compreender como metas possíveis e o estilo de vida se conectam à saúde.",
    ],

    questoes: [
      {
        enunciado: "O que caracteriza uma meta que funciona?",

        alternativas: [
          {
            letra: "A",
            texto: 'Um objetivo amplo como "vou cuidar melhor da saúde".',
          },
          {
            letra: "B",
            texto: "Uma ação específica, mensurável e com prazo definido.",
          },
          {
            letra: "C",
            texto: "Mudar tudo ao mesmo tempo.",
          },
          {
            letra: "D",
            texto: "Uma meta que produz resultados imediatos.",
          },
        ],

        respostaCorreta: "B",

        feedback:
          "Metas específicas permitem identificar quando e como realizá-las — e acompanhar o progresso ao longo da semana.",
      },

      {
        enunciado: "O que é uma Meta Mínima Viável?",

        alternativas: [
          {
            letra: "A",
            texto: "Uma meta que precisa ser cumprida perfeitamente todos os dias.",
          },
          {
            letra: "B",
            texto:
              "Uma ação pequena, específica e realista que serve de ponto de partida para a mudança.",
          },
          {
            letra: "C",
            texto: "Uma meta igual para todas as pessoas.",
          },
          {
            letra: "D",
            texto: "Um objetivo de longo prazo, sem prazo definido.",
          },
        ],

        respostaCorreta: "B",

        feedback:
          "Começar pequeno não é falta de ambição: cria a oportunidade real de começar e protege a confiança em si.",
      },

      {
        enunciado: "Por que a progressão gradual importa?",

        alternativas: [
          {
            letra: "A",
            texto: "Para acelerar os resultados.",
          },
          {
            letra: "B",
            texto:
              "Para aumentar o volume e a intensidade aos poucos, conforme a adaptação.",
          },
          {
            letra: "C",
            texto: "Para evitar qualquer esforço.",
          },
          {
            letra: "D",
            texto: "Para competir com outras pessoas.",
          },
        ],

        respostaCorreta: "B",

        feedback:
          "Aumentar aos poucos respeita as condições de cada pessoa e torna a mudança sustentável.",
      },

      {
        enunciado: "Na metáfora do livro, o que representam os genes?",

        alternativas: [
          {
            letra: "A",
            texto: "O livro completo.",
          },
          {
            letra: "B",
            texto: "Os capítulos.",
          },
          {
            letra: "C",
            texto: "Os marcadores.",
          },
          {
            letra: "D",
            texto: "A capa.",
          },
        ],

        respostaCorreta: "B",

        feedback:
          "O DNA é o livro de instruções; os genes são os capítulos; os mecanismos epigenéticos são os marcadores que definem o que será lido.",
      },

      {
        enunciado: "O que o estilo de vida PODE fazer em relação aos genes?",

        alternativas: [
          {
            letra: "A",
            texto: "Alterar a sequência do DNA.",
          },
          {
            letra: "B",
            texto: "Modular a leitura dos genes, sem alterar a sequência do DNA.",
          },
          {
            letra: "C",
            texto: "Garantir prevenção absoluta de doenças.",
          },
          {
            letra: "D",
            texto: "Eliminar genes de risco.",
          },
        ],

        respostaCorreta: "B",

        feedback:
          "A epigenética estuda a regulação da expressão dos genes por fatores do ambiente e do estilo de vida — sem mudar o texto original.",
      },

      {
        enunciado: "Por que registrar a meta por escrito ajuda?",

        alternativas: [
          {
            letra: "A",
            texto: "Porque torna a meta visível e facilita acompanhar os avanços.",
          },
          {
            letra: "B",
            texto: "Porque substitui a ação.",
          },
          {
            letra: "C",
            texto: "Porque garante que a meta será cumprida.",
          },
          {
            letra: "D",
            texto: "Porque evita qualquer obstáculo.",
          },
        ],

        respostaCorreta: "A",

        feedback:
          "Registrar aumenta a adesão: a meta fica visível, o progresso pode ser acompanhado e celebrado — mesmo quando não é perfeito.",
      },
    ],

    recompensaConclusaoXP: 20,
    recompensaBonusXP: 5,
    minimoAcertosBonus: 4,
  },

  triagem: {
    titulo: "Triagem de prontidão para a mudança",

    introducao: [
      "Agora é hora de olhar para o seu momento diante da mudança. Você responderá a três perguntas em escala de 0 a 10 sobre um hábito de saúde que você gostaria de modificar ou fortalecer: o quanto essa mudança é IMPORTANTE para você, o quanto você se sente CONFIANTE de conseguir realizá-la e o quanto se sente PRONTO(A) para começar.",

      "Antes de responder, pense em um hábito específico — o mesmo que você trabalhou nas semanas anteriores, se desejar. A fase pode variar conforme o hábito considerado, e não existe resposta ideal: o objetivo não é comparar você com outras pessoas, nem medir sua capacidade.",

      "O resultado é um retrato do momento — nunca um rótulo e nunca um diagnóstico. A devolutiva vai convidar à reflexão: o que motivou a escolha de cada valor? O que seria necessário para avançar um ponto? Essa conversa consigo mesmo(a) é, muitas vezes, o próximo passo mais valioso.",

      "A triagem é um instrumento de reflexão e acompanhamento; ela não substitui avaliação profissional nem diagnóstico. Ao concluir, você recebe XP apenas por finalizar o instrumento, independentemente das respostas.",
    ],

    perguntas: [
      "O quanto essa mudança é importante para você neste momento?",
      "O quanto você se sente confiante de conseguir realizar essa mudança?",
      "O quanto você se sente pronto(a) para começar essa mudança?",
    ],

    recompensaConclusaoXP: 20,
    recompensaDevolutivaXP: 5,
  },
};