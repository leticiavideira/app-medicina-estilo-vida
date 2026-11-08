import type { ConteudoModulo } from "@/types/conteudoModulo";

export const modulo6Conteudo: ConteudoModulo = {
  introducao: [
    "Bem-vindo(a) ao Módulo 06! Você já ouviu que se movimentar faz bem — mas talvez tenha pensado que isso exigiria academia, tempo ou disposição que você não tem todos os dias?",
    "A boa notícia: atividade física não precisa ser perfeita nem acontecer só no treino. Ela pode ser construída aos poucos, no seu ritmo, com o que você tem à mão.",
    "Nesta semana, você vai conhecer as recomendações de movimento para adultos, entender a diferença entre sedentarismo e inatividade física, descobrir como o exercício conversa com seus genes e montar um plano realista para os próximos dias.",
    "A semana tem 7 dias: nos Dias 1 a 4 você realiza as leituras e reflexões, no Dia 5 assiste ao vídeo, no Dia 6 faz a revisão com o quiz e no Dia 7 responde à triagem sobre atividade física e tempo sentado. Cada dia de leitura rende 15 XP (10 leitura + 5 reflexão), fechando a meta diária.",
    "O melhor exercício é o que você consegue manter."
  ],

  dias: [
    {
      numero: 1,
      titulo: "O que é atividade física regular?",
      paragrafos: [
        "Atividade física é qualquer movimento do corpo que gasta energia acima do repouso — caminhar até o mercado, subir escadas, dançar, cuidar do quintal, brincar com crianças, além dos treinos e esportes.",
        "Para adultos, as recomendações gerais são: acumular de 150 a 300 minutos semanais de atividade aeróbica moderada, ou o equivalente em atividade vigorosa, ou uma combinação das duas; realizar exercícios de fortalecimento muscular em pelo menos dois dias da semana; e reduzir o tempo em posições sentadas ou reclinadas.",
        "Intensidade moderada é quando a respiração e os batimentos aumentam de forma perceptível — como na caminhada rápida —, e vigorosa é quando o esforço fica bem maior, como na corrida.",
        "Para quem está começando, qualquer quantidade já é um ponto de partida: progredir gradualmente, respeitando as condições e possibilidades de cada corpo, é o caminho mais seguro e sustentável."
      ],
      fraseDestaque: "Qualquer quantidade de movimento é melhor do que nenhuma.",
      atividade: {
        titulo: "Atividade Reflexiva do Dia 1",
        pergunta: "Considerando uma semana típica, como você avalia seu nível de atividade física?",
        opcoes: [
          { valor: 1, texto: "Alcanço as recomendações com regularidade." },
          { valor: 2, texto: "Me movimento, mas abaixo das recomendações." },
          { valor: 3, texto: "Me movimento pouco na maior parte da semana." },
          { valor: 4, texto: "Quase não realizo atividade física atualmente." },
          { valor: 5, texto: "Não consigo avaliar neste momento." }
        ],
        recompensaXP: 5
      },
      recompensaLeituraXP: 10
    },

    {
      numero: 2,
      titulo: "Sedentarismo não é o mesmo que inatividade física",
      paragrafos: [
        "Dois comportamentos diferentes — e ambos importam. A inatividade física é não atingir as recomendações semanais de movimento. O comportamento sedentário é passar muito tempo sentado ou reclinado — no trabalho, no deslocamento de carro, nas telas e na televisão — mesmo que você se exercite.",
        "Exemplo: uma pessoa pode se exercitar 30 minutos por dia e, ainda assim, passar mais de 8 horas sentada no restante do dia. Os dois comportamentos têm efeitos distintos no corpo.",
        "O excesso de tempo sentado, acumulado ao longo dos anos, associa-se a: mais inflamação — aumento de marcadores inflamatórios; menor sensibilidade à insulina — as células aproveitam a glicose com mais dificuldade; mitocôndrias menos eficientes — as usinas de energia das células perdem força; e genes protetores menos ativos — alterações na regulação da leitura do DNA.",
        "Reduzir o tempo sentado é uma meta à parte — e as pausas curtas já contam."
      ],
      fraseDestaque: "Reduzir o tempo sentado é uma meta à parte — e as pausas curtas já contam.",
      atividade: {
        titulo: "Atividade Reflexiva do Dia 2",
        pergunta: "Onde o tempo sentado se acumula mais no seu dia?",
        opcoes: [
          { valor: 1, texto: "No trabalho ou nos estudos (computador, reuniões)." },
          { valor: 2, texto: "No deslocamento (carro, ônibus)." },
          { valor: 3, texto: "Nas telas e na televisão (lazer)." },
          { valor: 4, texto: "Em mais de um desses momentos." },
          { valor: 5, texto: "Meu tempo sentado já é relativamente baixo." },
          { valor: 6, texto: "Não consigo identificar neste momento." }
        ],
        recompensaXP: 5
      },
      recompensaLeituraXP: 10
    },

    {
      numero: 3,
      titulo: "O exercício conversa com seus genes",
      paragrafos: [
        "A cada contração muscular, sinais são enviados ao corpo — como mensagens que avisam o organismo de que é hora de se preparar, se proteger e se fortalecer.",
        "Retomando a metáfora do livro: o DNA é o livro, os genes são os capítulos e os mecanismos epigenéticos são os marcadores que definem quais trechos são lidos. O movimento atua sobre esses marcadores: os sinais ajustam as etiquetas que facilitam ou dificultam a leitura dos genes, afrouxam ou apertam o enrolamento que controla o acesso às informações e calibram os mensageiros de ajuste fino que regulam a produção de proteínas.",
        "Os benefícios que a ciência já comprova aparecem em vários sistemas: coração mais forte, menor risco de diabetes tipo 2, menor risco de alguns tipos de câncer, saúde mental melhor (menos estresse, ansiedade e sintomas depressivos), sono de qualidade e melhor cognição e funcionalidade no dia a dia.",
        "Esses efeitos vêm de mudanças mensuráveis no corpo — inclusive na regulação dos seus genes. Por isso a atividade física não muda apenas o corpo: ela muda o jeito que seus genes funcionam, para melhor."
      ],
      fraseDestaque: "A cada movimento, uma mensagem de proteção para o seu corpo.",
      atividade: {
        titulo: "Atividade Reflexiva do Dia 3",
        pergunta: "Qual benefício da atividade física mais faz sentido para o seu momento atual?",
        opcoes: [
          { valor: 1, texto: "Saúde do coração e dos vasos." },
          { valor: 2, texto: "Prevenção do diabetes tipo 2 e das doenças crônicas." },
          { valor: 3, texto: "Saúde mental: menos estresse, ansiedade e sintomas depressivos." },
          { valor: 4, texto: "Sono de qualidade." },
          { valor: 5, texto: "Energia e disposição para o dia a dia." },
          { valor: 6, texto: "Todos fazem sentido — ainda não sei escolher um." }
        ],
        recompensaXP: 5
      },
      recompensaLeituraXP: 10
    },

    {
      numero: 4,
      titulo: "150 minutos que transformam a semana",
      paragrafos: [
        "O que importa é a regularidade — a distribuição é flexível. Veja alguns jeitos de chegar aos 150 minutos semanais: caminhada rápida de 30 minutos, 5 vezes por semana (acessível a quase todos); corrida leve de 25 minutos, 3 vezes por semana; pedalada de 40 minutos, 4 vezes por semana, de baixo impacto; natação ou hidroginástica de 45 minutos, 3 vezes por semana.",
        "Regra prática: distribua em pelo menos 3 dias da semana — e tente evitar dois dias seguidos sem se movimentar.",
        "Toda barreira tem um caminho de saída: falta de tempo → blocos de 10 minutos ao longo do dia; dor ou limitação → atividades de baixo impacto, com orientação profissional; desânimo → metas pequenas e companhia para caminhar; acesso limitado → praças, escadas, vídeos gratuitos e deslocamento a pé ou de bicicleta.",
        "Antes de iniciar um programa intenso — especialmente se você tem condições de saúde preexistentes — vale procurar avaliação profissional."
      ],
      fraseDestaque: "O melhor exercício é o que você consegue manter — e o melhor plano é o que cabe na sua semana.",
      atividade: {
        titulo: "Atividade Prática do Dia 4",
        pergunta: "Nos próximos sete dias, qual ação de movimento você considera mais viável?",
        opcoes: [
          { valor: 1, texto: "Caminhar em blocos de 10 minutos em pelo menos 3 dias." },
          { valor: 2, texto: "Incluir fortalecimento muscular em 2 dias da semana." },
          { valor: 3, texto: "Realizar pausas ativas de 1 a 2 minutos por hora no trabalho." },
          { valor: 4, texto: "Substituir trechos de carro por caminhada ou bicicleta." },
          { valor: 5, texto: "Participar de uma atividade em grupo ou com companhia." },
          { valor: 6, texto: "Outra ação que faça sentido para a minha rotina." },
          { valor: 7, texto: "Não pretendo realizar uma ação desse tipo nesta semana." }
        ],
        recompensaXP: 10
      },
      recompensaLeituraXP: 10
    }
  ],

  fechamentoLeitura: {
    paragrafos: [
      "Com os Dias 1 a 4, você conheceu as recomendações de movimento, a diferença entre sedentarismo e inatividade, os efeitos do tempo sentado e a conversa do exercício com seus genes — além de estratégias para montar um plano possível.",
      "No Dia 5 você assiste ao vídeo; no Dia 6 realiza a revisão com o quiz; e no Dia 7 responde à triagem sobre atividade física e tempo sentado."
    ],
    fraseDestaque: "Um plano possível hoje vale mais do que um plano perfeito para amanhã."
  },

  video: {
    titulo: "Atividade física regular e epigenética",
    descricao: [
      "Neste dia, você assistirá a um vídeo educativo sobre atividade física regular e epigenética, mostrando como o movimento conversa com seus genes.",
      "Enquanto assiste, pense em como o movimento já aparece na sua rotina e qual seria o seu próximo passo realista."
    ],
    recompensaXP: 10,
    recompensaMicropraticaXP: 5
  },

  quiz: {
    titulo: "Quiz de Revisão",
    introducao:
      "Você chegou ao momento de revisar os principais conceitos desta semana. O objetivo do quiz não é avaliar ou julgar o seu desempenho, mas ajudá-lo(a) a consolidar os conhecimentos apresentados ao longo dos dias de leitura. Lembre-se: errar faz parte da aprendizagem. Após cada resposta, você receberá um feedback explicando o conceito trabalhado.",
    questoes: [
      {
        enunciado:
          "Segundo as recomendações gerais para adultos, quanto de atividade aeróbica moderada deve ser acumulada por semana?",
        alternativas: [
          { letra: "A", texto: "Apenas 30 minutos no total da semana." },
          { letra: "B", texto: "De 500 a 600 minutos por semana." },
          { letra: "C", texto: "De 150 a 300 minutos por semana." },
          { letra: "D", texto: "Não há quantidade recomendada." }
        ],
        respostaCorreta: "C",
        feedback:
          "É possível chegar lá com caminhada rápida, pedalada, natação ou a soma de blocos menores ao longo da semana."
      },
      {
        enunciado:
          "Qual é a diferença entre inatividade física e comportamento sedentário?",
        alternativas: [
          { letra: "A", texto: "São o mesmo comportamento com nomes diferentes." },
          { letra: "B", texto: "Inatividade é não atingir as recomendações; comportamento sedentário é passar muito tempo sentado, mesmo que a pessoa se exercite." },
          { letra: "C", texto: "Sedentarismo é quem nunca se exercita na vida." },
          { letra: "D", texto: "Inatividade é apenas para idosos." }
        ],
        respostaCorreta: "B",
        feedback:
          "Os dois comportamentos têm efeitos distintos no corpo — e ambos importam."
      },
      {
        enunciado: "O excesso de tempo sentado pode provocar no corpo:",
        alternativas: [
          { letra: "A", texto: "Mais inflamação, menor sensibilidade à insulina, mitocôndrias menos eficientes e genes protetores menos ativos." },
          { letra: "B", texto: "Apenas cansaço nas pernas." },
          { letra: "C", texto: "Melhora da circulação sem outras mudanças." },
          { letra: "D", texto: "Nenhum efeito se a pessoa se exercita." }
        ],
        respostaCorreta: "A",
        feedback:
          "A boa notícia: pausas curtas de 1 a 2 minutos a cada hora já fazem diferença."
      },
      {
        enunciado: "Como o exercício conversa com os genes?",
        alternativas: [
          { letra: "A", texto: "Substituindo o DNA por genes novos." },
          { letra: "B", texto: "Enviando sinais que ajustam os marcadores que definem a leitura dos genes." },
          { letra: "C", texto: "Eliminando os genes da inflamação de vez." },
          { letra: "D", texto: "Não há relação entre exercício e genes." }
        ],
        respostaCorreta: "B",
        feedback:
          "A atividade física modula a leitura dos genes — sem alterar a sequência do DNA."
      },
      {
        enunciado:
          "Qual é a regra prática para distribuir os 150 minutos semanais?",
        alternativas: [
          { letra: "A", texto: "Fazer tudo em um único dia da semana." },
          { letra: "B", texto: "Distribuir em pelo menos 3 dias da semana, evitando dois dias seguidos sem movimento." },
          { letra: "C", texto: "Realizar apenas aos fins de semana." },
          { letra: "D", texto: "Não importa como distribuir." }
        ],
        respostaCorreta: "B",
        feedback:
          "A regularidade vale mais que a perfeição — a distribuição é flexível, mas espaçada pela semana."
      },
      {
        enunciado:
          "Qual afirmação é adequada para quem sente dor ou limitação para se exercitar?",
        alternativas: [
          { letra: "A", texto: "Nunca se movimentar, para evitar qualquer risco." },
          { letra: "B", texto: "Forçar sempre na intensidade máxima." },
          { letra: "C", texto: "Optar por atividades de baixo impacto, com orientação profissional, e progredir gradualmente." },
          { letra: "D", texto: "A atividade física não é indicada para pessoas com limitações." }
        ],
        respostaCorreta: "C",
        feedback:
          "Antes de iniciar programas intensos — especialmente com condições preexistentes — vale procurar avaliação profissional."
      }
    ],
    recompensaConclusaoXP: 20,
    recompensaBonusXP: 5,
    minimoAcertosBonus: 4
  },

  triagem: {
    titulo: "Triagem de atividade física e tempo sentado",
    introducao: [
      "Agora é hora de observar como o movimento e o tempo sentado aparecem na sua vida.",
      "Você responderá a uma triagem com itens sobre a frequência e o tempo de atividade em três domínios — trabalho, deslocamento e lazer —, a intensidade dessas atividades e o tempo que você costuma passar sentado(a) por dia.",
      "Não existe resposta ideal, e o objetivo é a reflexão — nunca comparação ou julgamento.",
      "Responda com sinceridade, considerando uma semana típica da sua rotina.",
      "O resultado é um retrato do momento, comparado com as recomendações gerais, e pode ajudar a definir seu próximo passo possível.",
      "Esta triagem não substitui avaliação profissional; antes de iniciar um programa intenso, especialmente com condições de saúde preexistentes, procure avaliação."
    ],
    recompensaConclusaoXP: 20,
    recompensaDevolutivaXP: 5
  }
};
