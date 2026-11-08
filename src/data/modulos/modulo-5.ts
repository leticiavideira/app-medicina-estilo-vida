import type { ConteudoModulo } from "@/types/conteudoModulo";

export const modulo5Conteudo: ConteudoModulo = {
  introducao: [
    "Bem-vindo(a) ao Módulo 05! Você já percebeu como surgem novas dietas, alimentos da moda e promessas de resultados rápidos o tempo todo? Com tantas informações disponíveis, pode ser difícil saber o que realmente faz diferença para a saúde. Nesta semana, vamos focar no que a ciência já sabe: não são escolhas perfeitas que transformam a saúde, mas sim hábitos que conseguimos manter no dia a dia.",
    "A semana tem 7 dias: nos Dias 1 a 4 você realiza as leituras e reflexões, no Dia 5 assiste ao vídeo, no Dia 6 faz a revisão com o quiz e no Dia 7 responde à triagem alimentar. Cada dia de leitura rende 15 XP (10 leitura + 5 reflexão), fechando a meta diária.",
    "Mais importante do que mudar tudo de uma vez é dar o próximo passo possível."
  ],

  dias: [
    {
      numero: 1,
      titulo: "O padrão importa mais que um alimento",
      paragrafos: [
        "Quando pensamos em melhorar a alimentação, é comum procurarmos um alimento específico que resolva tudo: a fruta da moda, o chá do momento ou um suplemento que promete resultados rápidos. Porém, a ciência mostra que o nosso organismo não responde a um único alimento, mas ao padrão alimentar que construímos ao longo do tempo.",
        "Esse padrão é formado pelas escolhas que repetimos diariamente: os alimentos que consumimos com mais frequência, a variedade presente nas refeições, a forma como combinamos os alimentos e a capacidade de manter esses hábitos de maneira sustentável na rotina.",
        "Por isso, uma alimentação saudável não depende da perfeição nem de restrições extremas. O que realmente faz diferença são as pequenas escolhas consistentes que conseguimos manter ao longo das semanas, meses e anos."
      ],
      fraseDestaque: "Não existe alimento milagroso, existe rotina alimentar.",
      atividade: {
        titulo: "Atividade Reflexiva do Dia 1",
        pergunta: "Qual alternativa melhor descreve o aspecto mais importante de uma alimentação saudável no cotidiano?",
        opcoes: [
          {
            valor: 1,
            texto: "Consumir diariamente um alimento considerado especialmente saudável."
          },
          {
            valor: 2,
            texto: "Manter um padrão alimentar variado e equilibrado, com escolhas que possam ser sustentadas ao longo do tempo."
          },
          {
            valor: 3,
            texto: "Evitar completamente todos os alimentos considerados menos saudáveis."
          },
          {
            valor: 4,
            texto: "Utilizar suplementos para compensar a alimentação cotidiana."
          },
          {
            valor: 5,
            texto: "Não consigo avaliar."
          }
        ],
        recompensaXP: 5
      },
      recompensaLeituraXP: 10
    },

    {
      numero: 2,
      titulo: "Como a alimentação influencia o funcionamento do corpo",
      paragrafos: [
        "Tudo o que comemos fornece ao organismo energia e nutrientes necessários para suas funções diárias. Quando predominam alimentos naturais e variados, o corpo tende a funcionar de forma mais equilibrada. Já quando a alimentação é composta principalmente por produtos ultraprocessados, bebidas açucaradas e excesso de alimentos ricos em gorduras e açúcares, podem surgir alterações graduais que nem sempre são percebidas imediatamente.",
        "Entre essas alterações estão o aumento de processos inflamatórios, o estresse oxidativo e dificuldades no controle do metabolismo da glicose. Com o passar do tempo, esses fatores podem contribuir para o desenvolvimento de diversas doenças crônicas.",
        "Por isso, a alimentação não influencia apenas o peso corporal. Ela participa de diversos processos importantes para a saúde e para o funcionamento adequado do organismo."
      ],
      fraseDestaque: "A saúde é construída pelas escolhas que repetimos todos os dias.",
      atividade: {
        titulo: "Atividade Reflexiva do Dia 2",
        pergunta: "Na sua rotina atual, em que medida você considera que suas escolhas alimentares favorecem o funcionamento e a saúde do organismo?",
        opcoes: [
          { valor: 1, texto: "Favorecem muito." },
          { valor: 2, texto: "Favorecem bastante." },
          { valor: 3, texto: "Favorecem moderadamente." },
          { valor: 4, texto: "Favorecem pouco." },
          { valor: 5, texto: "Não favorecem." },
          { valor: 6, texto: "Não consigo avaliar." }
        ],
        recompensaXP: 5
      },
      recompensaLeituraXP: 10
    },

    {
      numero: 3,
      titulo: "Como seus hábitos conversam com seus genes",
      paragrafos: [
        "Você já conheceu a metáfora do livro no módulo anterior. Imagine novamente que o DNA seja um grande livro de instruções que acompanha você desde o nascimento. As páginas desse livro permanecem as mesmas ao longo da vida.",
        "A epigenética estuda justamente como fatores do ambiente e do estilo de vida podem influenciar a forma como essas instruções são utilizadas pelo organismo. Em vez de alterar o conteúdo do livro, esses fatores atuam como marcadores que facilitam ou dificultam o acesso a determinadas páginas.",
        "A alimentação é um dos fatores capazes de participar desse processo. Nutrientes presentes nos alimentos ajudam a sustentar mecanismos biológicos que regulam a atividade celular, contribuindo para um funcionamento mais equilibrado do organismo.",
        "Para que isso aconteça, o organismo precisa receber nutrientes de forma regular. Folhas verde-escuras, feijões, lentilhas, ovos, cereais integrais, peixes, frutas e sementes fornecem componentes importantes para esses processos de regulação. A boa notícia é que esses nutrientes podem ser encontrados em alimentos simples e acessíveis, presentes na alimentação tradicional brasileira.",
        "Não são necessários alimentos exóticos, suplementos caros ou produtos importados. Muitas vezes, escolhas que já fazem parte da nossa cultura alimentar oferecem tudo o que o organismo precisa para funcionar adequadamente.",
        "É importante lembrar que a alimentação não reescreve o DNA, não garante proteção absoluta contra doenças e não substitui tratamentos médicos. Seu papel é oferecer suporte para que o corpo funcione da melhor maneira possível."
      ],
      fraseDestaque: "O livro continua o mesmo, o que muda é a forma como ele é lido.",
      atividade: {
        titulo: "Atividade Reflexiva do Dia 3",
        pergunta: "Após a leitura, qual aspecto da relação entre alimentação e funcionamento do organismo mais chamou sua atenção?",
        opcoes: [
          {
            valor: 1,
            texto: "A alimentação fornece nutrientes necessários a diferentes processos biológicos."
          },
          {
            valor: 2,
            texto: "Fatores do estilo de vida podem participar da regulação da atividade dos genes sem alterar a sequência do DNA."
          },
          {
            valor: 3,
            texto: "Nutrientes importantes podem ser encontrados em alimentos simples e acessíveis."
          },
          {
            valor: 4,
            texto: "A alimentação contribui para a saúde, mas não garante proteção absoluta contra doenças nem substitui tratamentos."
          },
          {
            valor: 5,
            texto: "Todos os aspectos acima chamaram minha atenção de forma semelhante."
          },
          {
            valor: 6,
            texto: "Nenhum desses aspectos chamou minha atenção."
          },
          {
            valor: 7,
            texto: "Não consigo avaliar."
          }
        ],
        recompensaXP: 5
      },
      recompensaLeituraXP: 10
    },

    {
      numero: 4,
      titulo: "Alimentação saudável na prática",
      paragrafos: [
        "Embora existam diferentes modelos alimentares estudados pela ciência, muitos deles compartilham características semelhantes: maior consumo de frutas, verduras, legumes, feijões, grãos integrais e alimentos minimamente processados, associado à redução de ultraprocessados e bebidas açucaradas.",
        "Um dos padrões alimentares mais estudados no mundo é a Dieta Mediterrânea, associada a diversos benefícios para a saúde. Apesar do nome, seus princípios podem ser aplicados facilmente no Brasil: mais frutas, verduras, legumes, feijões e grãos integrais; consumo equilibrado de peixes e aves; e menor presença de ultraprocessados, embutidos e bebidas açucaradas.",
        "Na prática, muitos alimentos tradicionais brasileiros já seguem esses princípios. O clássico arroz com feijão, frutas da estação, verduras, ovos, sardinha, amendoim e temperos naturais são exemplos de escolhas nutritivas, acessíveis e compatíveis com esse modelo alimentar.",
        "Esses princípios podem ser colocados em prática utilizando alimentos acessíveis e presentes na culinária brasileira. O tradicional arroz com feijão, frutas da estação, verduras, ovos, sardinha, amendoim e outros alimentos simples oferecem nutrientes importantes para o funcionamento do organismo.",
        "O objetivo não é alcançar uma alimentação perfeita, mas construir um padrão alimentar que seja saudável, prazeroso e possível de manter ao longo do tempo."
      ],
      fraseDestaque: "Alimentação saudável não precisa ser perfeita, ela precisa ser possível.",
      atividade: {
        titulo: "Atividade Prática do Dia 4",
        pergunta: "Qual mudança alimentar você considera mais viável experimentar nos próximos sete dias?",
        opcoes: [
          {
            valor: 1,
            texto: "Incluir frutas em mais momentos da semana."
          },
          {
            valor: 2,
            texto: "Aumentar o consumo de verduras e legumes."
          },
          {
            valor: 3,
            texto: "Incluir feijão, lentilha ou outra leguminosa com maior frequência."
          },
          {
            valor: 4,
            texto: "Preferir alimentos in natura ou minimamente processados com maior frequência."
          },
          {
            valor: 5,
            texto: "Reduzir o consumo de bebidas açucaradas."
          },
          {
            valor: 6,
            texto: "Reduzir o consumo de alimentos ultraprocessados."
          },
          {
            valor: 7,
            texto: "Planejar refeições ou organizar os alimentos com antecedência."
          },
          {
            valor: 8,
            texto: "Manter os hábitos atuais, sem estabelecer uma mudança específica nesta semana."
          },
          {
            valor: 9,
            texto: "Nenhuma dessas opções é viável para mim neste momento."
          },
          {
            valor: 10,
            texto: "Outra mudança / não consigo identificar uma opção."
          }
        ],
        recompensaXP: 10
      },
      recompensaLeituraXP: 10
    }
  ],

  fechamentoLeitura: {
    paragrafos: [
      "Com os Dias 1 a 4, você conheceu os principais conceitos sobre alimentação saudável e sua relação com o funcionamento do organismo.",
      "Pequenas mudanças consistentes costumam produzir resultados mais duradouros do que transformações radicais e difíceis de manter. Siga no seu ritmo!",
      "No Dia 5 você assiste ao vídeo; no Dia 6 realiza a revisão com o quiz; e no Dia 7 responde à triagem alimentar."
    ],
    fraseDestaque: "Cada escolha é uma nova oportunidade de cuidar da sua saúde."
  },

  video: {
    titulo: "Vídeo educativo",
    descricao: []
  },

  quiz: {
    titulo: "Quiz de Revisão",
    introducao: "Você chegou ao momento de revisar os principais conceitos desta semana. O objetivo do quiz não é avaliar ou julgar o seu desempenho, mas ajudá-lo(a) a consolidar os conhecimentos apresentados ao longo dos dias de leitura. Lembre-se: errar faz parte da aprendizagem. Após cada resposta, você receberá um feedback explicando o conceito trabalhado.",
    questoes: [
      {
        enunciado: "O que define o verdadeiro impacto de uma alimentação na nossa saúde?",
        alternativas: [
          {
            letra: "A",
            texto: 'A presença obrigatória de um "superalimento" na dieta diária.'
          },
          {
            letra: "B",
            texto: "O padrão alimentar global — frequência, variedade, combinação e sustentabilidade."
          },
          {
            letra: "C",
            texto: "A quantidade exata de calorias consumidas em cada refeição isolada."
          },
          {
            letra: "D",
            texto: "O uso contínuo de suplementos vitamínicos industrializados."
          }
        ],
        respostaCorreta: "B",
        feedback: "O impacto da alimentação está no padrão alimentar global: frequência, variedade, combinação dos alimentos e sustentabilidade das escolhas ao longo do tempo."
      },
      {
        enunciado: "Segundo a metáfora do livro apresentada neste módulo, o que os mecanismos epigenéticos fazem no corpo?",
        alternativas: [
          {
            letra: "A",
            texto: "Reescrevem capítulos inteiros do livro de receitas genético."
          },
          {
            letra: "B",
            texto: "Rasgam páginas e instruções que o corpo não deve ler."
          },
          {
            letra: "C",
            texto: "Funcionam como marcadores que facilitam ou dificultam a leitura dos genes, sem alterar o texto original."
          },
          {
            letra: "D",
            texto: "Trocam o livro herdado no nascimento por outro completamente novo."
          }
        ],
        respostaCorreta: "C",
        feedback: "Os mecanismos epigenéticos funcionam como marcadores que influenciam a leitura de determinadas instruções, sem alterar a sequência original do DNA."
      },
      {
        enunciado: "Qual das afirmações abaixo descreve corretamente o que a alimentação NÃO pode fazer?",
        alternativas: [
          {
            letra: "A",
            texto: "A alimentação não garante prevenção absoluta de doenças nem substitui tratamentos médicos."
          },
          {
            letra: "B",
            texto: "A alimentação não possui qualquer capacidade de influenciar processos inflamatórios."
          },
          {
            letra: "C",
            texto: "A alimentação produz exatamente o mesmo resultado metabólico em todas as pessoas."
          },
          {
            letra: "D",
            texto: "A alimentação é incapaz de fornecer substratos para a regulação enzimática."
          }
        ],
        respostaCorreta: "A",
        feedback: "A alimentação participa do funcionamento do organismo, mas não garante proteção absoluta contra doenças nem substitui tratamentos médicos."
      },
      {
        enunciado: 'No mecanismo de metilação do DNA, como podemos entender o papel das chamadas "etiquetas químicas"?',
        alternativas: [
          {
            letra: "A",
            texto: "Corrigem erros físicos na sequência dos genes herdados."
          },
          {
            letra: "B",
            texto: "Destroem permanentemente os trechos de DNA que não são utilizados."
          },
          {
            letra: "C",
            texto: "Transformam genes protetores em genes defeituosos."
          },
          {
            letra: "D",
            texto: "Facilitam ou dificultam a leitura de determinados trechos, dependendo do contexto."
          }
        ],
        respostaCorreta: "D",
        feedback: "As etiquetas químicas podem facilitar ou dificultar a leitura de determinados trechos do DNA, participando da regulação da atividade dos genes."
      },
      {
        enunciado: "Qual alimento tradicional brasileiro foi destacado como excelente fonte de ômega-3, vitamina B12 e proteínas acessíveis?",
        alternativas: [
          {
            letra: "A",
            texto: "Salmão importado."
          },
          {
            letra: "B",
            texto: "Sardinha."
          },
          {
            letra: "C",
            texto: "Queijo minas curado."
          },
          {
            letra: "D",
            texto: "Açaí adoçado industrializado."
          }
        ],
        respostaCorreta: "B",
        feedback: "A sardinha foi destacada como uma opção tradicional e acessível que fornece ômega-3, vitamina B12 e proteínas."
      },
      {
        enunciado: "Como a pontuação da triagem alimentar deve ser interpretada?",
        alternativas: [
          {
            letra: "A",
            texto: "Como um ponto de partida para refletir sobre hábitos e planejar mudanças graduais."
          },
          {
            letra: "B",
            texto: "Como um diagnóstico definitivo da condição de saúde."
          },
          {
            letra: "C",
            texto: "Como uma medida de força de vontade individual."
          },
          {
            letra: "D",
            texto: "Como uma forma de comparar pessoas entre si."
          }
        ],
        respostaCorreta: "A",
        feedback: "A pontuação deve servir como ponto de partida para reconhecer os hábitos atuais e identificar oportunidades de mudanças graduais, não como diagnóstico ou julgamento."
      }
    ],
    recompensaConclusaoXP: 20,
    recompensaBonusXP: 5,
    minimoAcertosBonus: 4
  },

  triagem: {
    titulo: "Triagem alimentar (MEDAS-14)",
    introducao: [
      "Agora é hora de observar como esses conceitos aparecem na sua rotina. Você responderá a um questionário breve sobre seus hábitos alimentares. Não existe resposta certa ou errada.",
      "O objetivo é oferecer uma fotografia do momento atual e ajudar você a identificar oportunidades práticas de mudança.",
      "Conhecer o ponto de partida é o primeiro passo para construir qualquer trajetória."
    ],
    recompensaConclusaoXP: 20,
    recompensaDevolutivaXP: 5
  }
};