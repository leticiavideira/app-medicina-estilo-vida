
import type { ConteudoModulo, QuestaoQuiz } from "@/types/conteudoModulo";

const questoesOriginais: QuestaoQuiz[] = [
  {
    enunciado:
      "Qual é a principal diferença entre o estresse agudo e o estresse crônico para o organismo?",
    alternativas: [
      {
        letra: "A",
        texto:
          "São exatamente a mesma coisa, sem nenhuma distinção funcional.",
      },
      {
        letra: "B",
        texto:
          "O estresse agudo é uma resposta adaptativa a uma ameaça real que se resolve; o estresse crônico é a ativação permanente do sistema de estresse, que desgasta o organismo.",
      },
      {
        letra: "C",
        texto:
          "O estresse agudo é sempre prejudicial e o crônico é sempre benéfico para o corpo.",
      },
      {
        letra: "D",
        texto:
          "O estresse crônico não gera nenhum impacto mensurável no corpo humano.",
      },
    ],
    respostaCorreta: "B",
    feedback:
      "O sistema de estresse agudo foi desenhado para nos proteger perante um desafio imediato. O problema não é ativar o sistema de alerta, mas sim nunca conseguir desligá-lo, fazendo com que a sobrecarga crônica desgaste as defesas do organismo.",
  },
  {
    enunciado: 'O que representa o conceito biológico de "carga alostática"?',
    alternativas: [
      {
        letra: "A",
        texto:
          "O peso biológico do estresse que nunca se esgota — o acúmulo invisível das cobranças, prazos e noites mal dormidas no corpo.",
      },
      {
        letra: "B",
        texto:
          "Uma técnica de respiração e relaxamento utilizada para induzir o sono.",
      },
      {
        letra: "C",
        texto:
          "Um modelo de treinamento físico vigoroso para ganho muscular acelerado.",
      },
      {
        letra: "D",
        texto:
          "Um tipo específico de exame laboratorial para diagnóstico de diabetes.",
      },
    ],
    respostaCorreta: "A",
    feedback:
      "A carga alostática reflete o custo biológico que o organismo paga para tentar se adaptar a estressores contínuos. O manejo preventivo do estilo de vida atua aliviando esse peso biológico antes que ele resulte em adoecimento.",
  },
  {
    enunciado:
      "De que maneira a vivência de estresse crônico interfere negativamente nos outros pilares da saúde?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Melhora a qualidade da alimentação diária e aprofunda o sono reparador.",
      },
      {
        letra: "B",
        texto:
          "Promove aumento espontâneo da energia e da disposição para fazer exercícios físicos.",
      },
      {
        letra: "C",
        texto:
          "Não estabelece qualquer tipo de relação com as escolhas alimentares ou o repouso.",
      },
      {
        letra: "D",
        texto:
          "Aumenta a vontade de doces e gorduras, reduz a disposição para se exercitar, prejudica o sono e afasta as pessoas.",
      },
    ],
    respostaCorreta: "D",
    feedback:
      "O estresse crônico atua como um amplificador de dificuldades biológicas: o excesso contínuo de cortisol eleva o desejo por alimentos calóricos de conforto, desregula o sono, drena a disposição física e aumenta a irritabilidade nos relacionamentos.",
  },
  {
    enunciado:
      'Recorrendo à metáfora do livro da vida, como o estresse crônico atua sobre os nossos genes?',
    alternativas: [
      {
        letra: "A",
        texto:
          "Reescrevendo e trocando completamente as letras originais da fita de DNA.",
      },
      {
        letra: "B",
        texto:
          "Não possui qualquer forma de comunicação ou ligação com as células do corpo.",
      },
      {
        letra: "C",
        texto:
          "Deixando marcações (epigenéticas) que favorecem a leitura de genes ligados à inflamação e dificultam genes protetores — sem alterar a sequência do DNA.",
      },
      {
        letra: "D",
        texto:
          "Causando danos estruturais irreversíveis e permanentes a todo o código genético.",
      },
    ],
    respostaCorreta: "C",
    feedback:
      "O estresse crônico não altera a fita de DNA, mas deposita notas adesivas (marcas epigenéticas) que deixam genes de inflamação mais acessíveis à leitura. Essas marcações são parcialmente reversíveis com o manejo adequado da rotina.",
  },
  {
    enunciado:
      "Dentre as opções abaixo, qual representa um conjunto de estratégias com evidência científica para o manejo do estresse?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Aumentar o consumo de bebidas alcoólicas à noite para relaxar a mente.",
      },
      {
        letra: "B",
        texto:
          "Atenção plena (mindfulness), respiração consciente, atividade física e conexões sociais.",
      },
      {
        letra: "C",
        texto:
          "Permanecer conectado às telas e redes sociais por várias horas na hora de dormir.",
      },
      {
        letra: "D",
        texto:
          "Suprimir sentimentos difíceis e evitar conversar com qualquer pessoa.",
      },
    ],
    respostaCorreta: "B",
    feedback:
      "Práticas como atenção plena, respiração lenta, exercícios regulares, sono e bons relacionamentos ativam o sistema de desaceleração do organismo, reduzindo comprovadamente os níveis de substâncias inflamatórias e cortisol.",
  },
  {
    enunciado:
      "Qual é a forma correta e construtiva de interpretar a sua pontuação na triagem de percepção de estresse?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Como um retrato do momento, que orienta práticas de manejo e, se necessário, a busca por avaliação profissional — nunca como um rótulo.",
      },
      {
        letra: "B",
        texto:
          "Como um diagnóstico formal e definitivo de transtorno psiquiátrico.",
      },
      {
        letra: "C",
        texto:
          "Como uma comprovação incontestável de fraqueza pessoal ou falta de força de vontade.",
      },
      {
        letra: "D",
        texto:
          "Como uma pontuação para disputar e comparar desempenhos com outras pessoas.",
      },
    ],
    respostaCorreta: "A",
    feedback:
      "O resultado na triagem traduz um retrato instantâneo das demandas percebidas no último mês. Ele serve exclusivamente como bússola para o autocuidado e sinal de alerta para buscar auxílio especializado caso a sobrecarga esteja alta.",
  },
];

const questoesVersaoA: QuestaoQuiz[] = [
  {
    enunciado:
      "Como a literatura em saúde diferencia fundamentalmente o estresse agudo do estresse crônico?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Ambos representam a exata mesma resposta celular, sem nenhuma distinção prática.",
      },
      {
        letra: "B",
        texto:
          "O estresse crônico é sempre positivo para a saúde e fortalece os órgãos a longo prazo.",
      },
      {
        letra: "C",
        texto:
          "O estresse agudo é uma resposta rápida e adaptativa a um desafio que se resolve; o crônico é a ativação prolongada do sistema de estresse, que sobrecarrega o organismo.",
      },
      {
        letra: "D",
        texto:
          "O estresse agudo é invariavelmente danoso e deve ser erradicado da experiência humana.",
      },
    ],
    respostaCorreta: "C",
    feedback:
      "A resposta de estresse agudo foi desenhada para a preservação imediata da vida. O dano biológico surge quando o estado de alerta se perpetua no tempo sem que haja oportunidades de retorno ao estado de repouso.",
  },
  {
    enunciado:
      'Em termos de fisiologia e estilo de vida, o que define o conceito de "carga alostática"?',
    alternativas: [
      {
        letra: "A",
        texto:
          "Um modelo de restrição calórica severa empregado no tratamento do sobrepeso.",
      },
      {
        letra: "B",
        texto:
          "O custo biológico acumulado do estresse que nunca se desliga — o peso invisível das cobranças, prazos e noites mal dormidas no corpo.",
      },
      {
        letra: "C",
        texto:
          "Uma rotina de respiração diafragmática rápida usada para aumentar o foco.",
      },
      {
        letra: "D",
        texto:
          "Um painel de dosagens laboratoriais para avaliar marcadores hepáticos.",
      },
    ],
    respostaCorreta: "B",
    feedback:
      "Carga alostática é o termo que sintetiza o desgaste crônico imposto a sistemas fisiológicos fundamentais quando o organismo é forçado a atuar sob contínuo estado de adaptação a pressões externas e internas.",
  },
  {
    enunciado:
      "De que forma o estado contínuo de estresse compromete os demais pilares do estilo de vida?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Aumenta a vontade de doces e gorduras, reduz a disposição para se exercitar, prejudica o sono e afasta as pessoas.",
      },
      {
        letra: "B",
        texto:
          "Gera espontaneamente uma rotina alimentar rica em fibras e melhora o repouso noturno.",
      },
      {
        letra: "C",
        texto:
          "Otimiza a frequência e o rendimento fisiológico em treinos aeróbicos estruturados.",
      },
      {
        letra: "D",
        texto:
          "Não exerce nenhuma influência sobre o humor, apetite ou qualidade do sono.",
      },
    ],
    respostaCorreta: "A",
    feedback:
      "A circulação ininterrupta de hormônios do estresse desregula centros cerebrais de recompensa, gerando compulsão por comidas calóricas, inibindo a motivação motora e gerando fragmentação arquitetural do sono.",
  },
  {
    enunciado:
      "Considerando a analogia do DNA como um livro, qual o destino das marcas epigenéticas causadas pelo estresse crônico?",
    alternativas: [
      {
        letra: "A",
        texto:
          "São cicatrizes imutáveis e definitivas que nunca mais poderão ser alteradas.",
      },
      {
        letra: "B",
        texto:
          "Modificam permanentemente a sequência de nucleotídeos da cadeia do DNA.",
      },
      {
        letra: "C",
        texto:
          "Não guardam qualquer relação fisiológica com a expressão de genes celulares.",
      },
      {
        letra: "D",
        texto:
          "São parcialmente reversíveis — com o manejo adequado, podem ser reorganizadas em direção à proteção do organismo.",
      },
    ],
    respostaCorreta: "D",
    feedback:
      "A epigenética demonstra que a biologia opera em diálogo contínuo com o ambiente. Marcas depositadas por períodos contínuos de estresse podem ser reorganizadas à medida que intervenções consistentes de desaceleração são incorporadas à rotina.",
  },
  {
    enunciado:
      "Qual das seguintes situações evidencia a necessidade primordial de apoio e acompanhamento profissional?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Experimentar sensação de cansaço passageiro após um dia com demandas incomuns no trabalho.",
      },
      {
        letra: "B",
        texto:
          "Desfrutar de noites repousantes de sono na maior parte dos dias de uma semana comum.",
      },
      {
        letra: "C",
        texto:
          "Preocupação excessiva e difícil de controlar na maioria dos dias, por pelo menos 6 meses, com prejuízo no desempenho.",
      },
      {
        letra: "D",
        texto:
          "Realizar sessões supervisionadas de atividade física moderada regularmente.",
      },
    ],
    respostaCorreta: "C",
    feedback:
      "Quando angústias intensas, preocupações invasivas ou sintomas físicos persistem por meses gerando limitações nas funções diárias, o suporte psicológico e médico qualificado torna-se uma prioridade essencial.",
  },
  {
    enunciado:
      "Como se deve compreender o valor numérico obtido na Escala de Percepção de Estresse (EPS-10)?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Como uma declaração pericial e inquestionável de incapacidade de enfrentamento.",
      },
      {
        letra: "B",
        texto:
          "Como um retrato do momento, que orienta práticas de manejo e, se necessário, a busca por avaliação profissional — nunca como um rótulo.",
      },
      {
        letra: "C",
        texto:
          "Como comprovação objetiva de ausência de força de vontade para lidar com conflitos.",
      },
      {
        letra: "D",
        texto:
          "Como ferramenta para estabelecer comparações hierárquicas entre os usuários do aplicativo.",
      },
    ],
    respostaCorreta: "B",
    feedback:
      "O escore de percepção representa apenas uma fotografia da interação entre a pessoa e o seu meio nas últimas semanas. Funciona como guia pedagógico para direcionar ajustes e apontar o momento prudente de procurar apoio.",
  },
];

const questoesVersaoB: QuestaoQuiz[] = [
  {
    enunciado:
      "Qual é o axioma central sobre o funcionamento biológico do sistema de estresse humano?",
    alternativas: [
      {
        letra: "A",
        texto:
          "O objetivo da saúde integral reside na anulação e extinção completa de qualquer alerta.",
      },
      {
        letra: "B",
        texto:
          "Vivenciar reações de estresse agudo reflete fragilidade moral de quem o sente.",
      },
      {
        letra: "C",
        texto:
          "A ativação fisiológica pontual da resposta de estresse é invariavelmente patológica.",
      },
      {
        letra: "D",
        texto:
          "O problema não é ativar o sistema de estresse — é nunca desligá-lo.",
      },
    ],
    respostaCorreta: "D",
    feedback:
      "A ativação rápida prepara o organismo para superar adversidades pontuais e retornar ao repouso. O prejuízo à saúde física e mental decorre da manutenção contínua e crônica desse estado de alerta.",
  },
  {
    enunciado:
      "Qual dos conjuntos abaixo possui comprovação científica na contenção da sobrecarga biológica do estresse?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Consumo de álcool em doses elevadas antes de dormir para silenciar pensamentos.",
      },
      {
        letra: "B",
        texto:
          "Uso contínuo de telas de smartphones no leito como estratégia de distração.",
      },
      {
        letra: "C",
        texto:
          "Atenção plena (mindfulness) e respiração consciente.",
      },
      {
        letra: "D",
        texto:
          "Supressão forçada de sentimentos sem compartilhamento com rede de apoio.",
      },
    ],
    respostaCorreta: "C",
    feedback:
      "Atenção plena e manobras respiratórias ritmadas modulam o sistema nervoso autônomo, reduzindo a hiperatividade simpática e auxiliando na redução de cortisol e citocinas inflamatórias.",
  },
  {
    enunciado:
      "Qual faculdade mental e comportamental é desenvolvida por meio do treinamento da atenção plena (mindfulness)?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Foco intencional no momento presente, sem julgamentos, reduzindo a ruminação sobre o passado e o futuro.",
      },
      {
        letra: "B",
        texto:
          "Estado crônico de distração dispersiva e pensamentos fragmentados contínuos.",
      },
      {
        letra: "C",
        texto:
          "Bloqueio e negação das emoções espontâneas vivenciadas pelo indivíduo.",
      },
      {
        letra: "D",
        texto:
          "Dependência psicológica do uso de recursos eletrônicos para atingir calmaria.",
      },
    ],
    respostaCorreta: "A",
    feedback:
      "A atenção plena exercita a tomada de consciência das sensações e pensamentos em tempo real, diminuindo padrões automáticos de ruminação angustiante e ampliando a capacidade de autorregulação.",
  },
  {
    enunciado:
      'Ao ingressar na "Via da Proteção" por meio do manejo do estresse, o que acontece favoravelmente no cérebro?',
    alternativas: [
      {
        letra: "A",
        texto:
          "Redução da plasticidade e enrijecimento das trilhas neuronais responsáveis pelo aprendizado.",
      },
      {
        letra: "B",
        texto:
          "Bloqueio dos circuitos associados ao processamento das memórias e da linguagem.",
      },
      {
        letra: "C",
        texto:
          "Estagnação completa na geração e fortalecimento de conexões neurais protetoras.",
      },
      {
        letra: "D",
        texto:
          "Mais neuroplasticidade e resiliência psicológica — a capacidade do cérebro de se reorganizar e criar novas conexões.",
      },
    ],
    respostaCorreta: "D",
    feedback:
      "Ao desacelerar a sinalização hormonal de alerta crônico, criam-se condições biológicas ideais para que o cérebro fortaleça novos circuitos, consolidando resiliência e adaptação construtiva aos desafios.",
  },
  {
    enunciado:
      'Qual atitude exemplifica uma "fuga perigosa" que agrava o custo biológico do estresse crônico?',
    alternativas: [
      {
        letra: "A",
        texto:
          "Tirar dez minutos diários para a realização de respiração lenta guiada.",
      },
      {
        letra: "B",
        texto:
          "Uso excessivo de álcool, tabaco, comida ultraprocessada ou telas para buscar alívio rápido.",
      },
      {
        letra: "C",
        texto:
          "Conversar francamente com pessoas de confiança sobre aflições vivenciadas.",
      },
      {
        letra: "D",
        texto:
          "Realizar uma caminhada contemplativa em ambiente arborizado ao término da tarde.",
      },
    ],
    respostaCorreta: "B",
    feedback:
      "O recurso frequente a saídas de prazer imediato fornece uma sensação passageira de alívio, mas alimenta um ciclo perverso que agrava o desequilíbrio inflamatório, o sono e a saúde psíquica.",
  },
  {
    enunciado:
      "Diante de sofrimento psíquico paralisante ou pensamentos recorrentes de autoagressão, qual a conduta indicada?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Buscar ajuda imediatamente — serviços de saúde, CAPS, UPA ou o CVV (Ligue 188).",
      },
      {
        letra: "B",
        texto:
          "Isolar-se socialmente e guardar as angústias apenas para si até que a crise arrefeça.",
      },
      {
        letra: "C",
        texto:
          "Confiar exclusivamente em horas extras de sono noturno para superar o quadro grave.",
      },
      {
        letra: "D",
        texto:
          "Evitar comentar o ocorrido com terceiros por receio de incomodar as pessoas.",
      },
    ],
    respostaCorreta: "A",
    feedback:
      "Crises agudas de sofrimento e desesperança exigem suporte imediato e acolhimento humano qualificado. Ninguém deve carregar fardos dessa magnitude sozinho quando existem serviços públicos e gratuitos estruturados para prestar auxílio.",
  },
];

const alternativasEPS10 = [
  { valor: 0, texto: "Nunca" },
  { valor: 1, texto: "Quase nunca" },
  { valor: 2, texto: "Às vezes" },
  { valor: 3, texto: "Com frequência" },
  { valor: 4, texto: "Muito frequente" },
];

const perguntasEPS10 = [
  "No último mês, com que frequência você ficou chateado(a) por causa de algo que aconteceu inesperadamente?",
  "No último mês, com que frequência você sentiu que era incapaz de controlar as coisas importantes da sua vida?",
  'No último mês, com que frequência você se sentiu nervoso(a) e "estressado(a)"?',
  "No último mês, com que frequência você lidou com os problemas da vida com sucesso?",
  "No último mês, com que frequência você sentiu que estava lidando bem com as mudanças importantes que estavam ocorrendo na sua vida?",
  "No último mês, com que frequência você sentiu que não conseguia lidar com todas as coisas que tinha que fazer?",
  "No último mês, com que frequência você sentiu que as coisas estavam acontecendo de acordo com a sua vontade?",
  "No último mês, com que frequência você sentiu que as coisas estavam sob o seu controle?",
  "No último mês, com que frequência você ficou irritado(a) porque as coisas estavam fora do seu controle?",
  "No último mês, com que frequência você sentiu que as dificuldades estavam se acumulando a ponto de não poder superá-las?",
];

export const modulo8Conteudo: ConteudoModulo = {
  introducao: [
    "Neste módulo, você vai conhecer melhor o papel do manejo do estresse na saúde e entender como situações estressantes contínuas podem afetar diferentes áreas da sua vida.",
    "Também vai descobrir como o estresse se relaciona com mecanismos epigenéticos e conhecer estratégias que ajudam o organismo a recuperar o equilíbrio.",
  ],

  dias: [
    {
      numero: 1,
      titulo: "O estresse: um pilar que se conecta a todos os outros",
      paragrafos: [
        "O estresse não é um defeito de fábrica nem um sinal de fraqueza: ele é uma resposta biológica sofisticada, essencial para a nossa sobrevivência. Diante de um desafio imediato ou de um perigo real, o organismo ativa circuitos de alerta com extrema precisão. Em frações de segundo, o coração acelera, a pressão arterial sobe, os sentidos se aguçam e a energia é direcionada para responder à situação com velocidade e foco. Assim que o evento se encerra, o corpo desliga o alerta e retorna ao estado de equilíbrio.",
        "Na rotina moderna, contudo, a maioria dos desafios não é pontual nem física. Prazos contínuos, preocupações financeiras, excesso de estímulos digitais e pressões no trabalho mantêm os alarmes biológicos soando sem interrupção. O problema nunca foi acionar o sistema de proteção; o perigo reside em mantê-lo ligado dia e noite sem permitir o descanso indispensável.",
      ],
      fraseDestaque:
        "O problema não é ativar o sistema de estresse — é nunca desligá-lo.",
      recompensaLeituraXP: 0,
    },
    {
      numero: 2,
      titulo: "Como o estresse atrapalha os outros pilares",
      paragrafos: [
        "O estresse crônico funciona como um amplificador de dificuldades em todas as áreas do autocuidado. Quando os níveis de hormônios do estresse permanecem altos de forma constante, as escolhas saudáveis tornam-se biologicamente mais árduas.",
        "Alimentação: a sinalização contínua de alerta aumenta o desejo por alimentos ricos em açúcar, gordura refinada e sal, buscando conforto rápido para o cérebro cansado.",
        "Atividade física: a exaustão mental drena a energia física, transformando o ato de calçar um tênis e iniciar um exercício em uma barreira que parece intransponível.",
        "Sono: a ruminação de pensamentos e o estado de hiperalerta impedem o relaxamento necessário para iniciar o descanso ou provocam despertares frequentes na madrugada.",
        "Conexões sociais: a tensão contínua reduz a paciência e a empatia, gerando irritabilidade com familiares, colegas e amigos, o que favorece o isolamento involuntário.",
        "Substâncias e telas: o cérebro sobrecarregado recorre a fontes imediatas de recompensa, aumentando a dependência do celular, redes sociais, cigarro ou bebidas alcoólicas para anestesiar o desconforto.",
      ],
      fraseDestaque:
        "Cuidar do estresse é cuidar de todos os outros pilares ao mesmo tempo.",
      recompensaLeituraXP: 0,
    },
    {
      numero: 3,
      titulo: "O que o estresse crônico faz no corpo",
      paragrafos: [
        "Viver em constante estado de emergência cobra um preço biológico real e mensurável. Quando as demandas do ambiente superam repetidamente a capacidade do indivíduo de se recuperar, dois fenômenos fisiológicos ganham força.",
        "Carga alostática: é o desgaste acumulado do corpo decorrente do esforço diário para se adaptar a tensões contínuas. Trata-se do peso invisível de cobranças acumuladas, prazos apertados, conflitos não resolvidos e noites sucessivas de sono superficial. Quando essa carga ultrapassa o limite fisiológico, o organismo perde a capacidade de retornar ao repouso.",
        "Cortisol crônico e inflamação: em picos curtos, o cortisol é um anti-inflamatório vital. No entanto, quando produzido continuamente sem descanso, as células de defesa perdem a sensibilidade a ele. O resultado é o desenvolvimento de uma inflamação crônica de baixo grau por todo o corpo, acúmulo preferencial de gordura na região abdominal, desregulação nos níveis de glicose no sangue e enfraquecimento das defesas imunológicas contra infecções comuns.",
      ],
      fraseDestaque: "Estresse agudo salva; estresse crônico adoece.",
      recompensaLeituraXP: 0,
    },
    {
      numero: 4,
      titulo: "O estresse conversa com seus genes",
      paragrafos: [
        "Relembrando a metáfora que nos acompanha ao longo do aplicativo: o seu DNA funciona como um grande livro de instruções biológicas, e os seus genes representam os capítulos desse livro. As letras e as palavras escritas nas páginas não mudam ao longo da vida. Contudo, o ambiente e o estilo de vida atuam como marcadores de texto e notas adesivas — os chamados mecanismos epigenéticos — que indicam quais capítulos devem ser lidos com frequência e quais devem permanecer fechados.",
        "O estresse crônico atua colocando notas adesivas que sinalizam a leitura prioritária de capítulos ligados à inflamação e à vulnerabilidade celular, enquanto dificulta o acesso a capítulos associados à reparação dos tecidos e à longevidade.",
        "A mensagem central da ciência, entretanto, reside na flexibilidade desse sistema: as anotações feitas pelas tensões diárias são parcialmente reversíveis. Práticas consistentes de autocuidado e relaxamento têm a capacidade de reorganizar esses marcadores, silenciando instruções nocivas e favorecendo caminhos de proteção celular.",
      ],
      fraseDestaque:
        "As marcas do estresse são parcialmente reversíveis — a biologia não é destino, é diálogo.",
      recompensaLeituraXP: 0,
    },
    {
      numero: 5,
      titulo: "A via da proteção: do estresse à resiliência",
      paragrafos: [
        "Diante dos acontecimentos diários, o organismo transita entre dois percursos biológicos fundamentais, cujos desfechos dependem diretamente de como gerenciamos a nossa recuperação.",
        "A Via do Dano: estresse crônico sem pausas → alerta químico contínuo → níveis persistentemente elevados de cortisol e citocinas inflamatórias → desgaste das conexões cerebrais → maior vulnerabilidade ao adoecimento emocional, fadiga profunda e distúrbios cardiovasculares.",
        "A Via da Proteção: manejo consciente do estresse → práticas de regulação corporal e pausas deliberadas → redução sustentada de substâncias inflamatórias e normalização hormonal → ativação da neuroplasticidade (a capacidade natural do cérebro de criar novos caminhos neurais e adaptar-se) → construção de resiliência psicológica e preservação da saúde integral.",
      ],
      fraseDestaque:
        "Cada prática de relaxamento, respiração e conexão é uma mensagem ao corpo para se proteger.",
      recompensaLeituraXP: 0,
    },
    {
      numero: 6,
      titulo: "Estratégias com evidência: o que fazer",
      paragrafos: [
        "Gerenciar o estresse não significa tentar eliminar todos os problemas da rotina, mas sim oferecer ao corpo ferramentas concretas para desligar o sinal de alarme. Diversas abordagens contam com sólida sustentação na literatura científica.",
        "Atenção plena (mindfulness): o treinamento de direcionar a atenção intencional para o momento presente, sem julgamento imediato. Interrompe a espiral de pensamentos automáticos sobre o futuro e reduz a fixação em erros do passado.",
        "Controle respiratório: a respiração lenta, diafragmática e ritmada envia sinais diretos ao cérebro de que a ameaça cessou, ativando o sistema de desaceleração e repouso em poucos minutos.",
        "Atividade física regular: como vimos no Módulo 3, o movimento consome o excesso de energia metabólica gerado pela tensão e libera fatores protetores que restauram o equilíbrio emocional.",
        "Sono reparador: o descanso noturno adequado (explorado no Módulo 4) é a principal janela biológica de limpeza e regeneração dos circuitos cerebrais sobrecarregados.",
        "Fortalecimento de vínculos: conversas acolhedoras, momentos de convivência e a presença de relações seguras atenuam diretamente a resposta fisiológica ao estresse.",
        "Práticas integrativas mente-corpo: modalidades como ioga, tai chi e meditação guiada combinam respiração consciente, alinhamento postural e foco mental, promovendo regulação orgânica integrada.",
      ],
      fraseDestaque:
        "Nenhuma estratégia é 'a única' — o melhor plano é o que combina práticas que cabem na sua rotina.",
      recompensaLeituraXP: 0,
    },
    {
      numero: 7,
      titulo: "Quando procurar ajuda profissional",
      paragrafos: [
        "O autocuidado diário e as estratégias individuais são valiosos, mas possuem limites claros. Existem circunstâncias em que as demandas emocionais ultrapassam a capacidade individual de manejo, tornando essencial o apoio de uma equipe capacitada. Observe com atenção a presença dos seguintes indicativos:",
        "Preocupação excessiva, angústia ou medo desproporcional, difíceis de conter e presentes na maior parte dos dias por pelo menos 6 meses consecutivos.",
        "Manifestações persistentes de exaustão, agitação interna contínua, dificuldade severa de concentração, dores no corpo sem causa aparente, aperto no peito, palpitações ou alterações graves do sono.",
        "Queda nítida e contínua no rendimento de trabalho, nos estudos ou prejuízos acentuados no convívio familiar e social.",
        "Dependência crescente do consumo de álcool, cigarro, medicamentos por conta própria ou alimentos ultraprocessados para conseguir suportar o final do dia.",
        "Se você está vivenciando sofrimento intenso, desespero ou pensamentos de se machucar ou tirar a própria vida, não espere a situação agravar. Procure ajuda imediatamente: consulte uma Unidade Básica de Saúde, UPA, CAPS ou ligue gratuitamente para o Centro de Valorização da Vida pelo número 188 (atendimento sigiloso, 24 horas por dia).",
        "Medidas de cuidado e suporte que fazem a diferença: agendar uma avaliação clínica com um médico ou psicólogo de sua confiança; iniciar acompanhamento psicoterápico; jamais iniciar ou alterar medicações para ansiedade ou relaxamento sem estrita prescrição e acompanhamento médico; compartilhar abertamente com amigos de confiança ou familiares a necessidade de apoio e acolhimento.",
      ],
      recompensaLeituraXP: 0,
    },
  ],

  quiz: {
    titulo: "Quiz de consolidação: manejo do estresse",
    introducao:
      "Você chegou ao momento de revisar os principais conceitos deste módulo. O objetivo do quiz não é avaliar ou julgar seu desempenho, mas ajudar a consolidar o que foi aprendido. Após cada resposta, você receberá um feedback educativo.",
    questoes: questoesOriginais,
    versoes: {
      original: questoesOriginais,
      A: questoesVersaoA,
      B: questoesVersaoB,
    },
    recompensaConclusaoXP: 0,
    recompensaBonusXP: 0,
    minimoAcertosBonus: 0,
  },

  triagem: {
    titulo: "Triagem de percepção de estresse",
    introducao: [
      "Agora é hora de observar como você percebe as situações de estresse na sua rotina. Esta etapa utiliza a Escala de Percepção de Estresse em sua versão de 10 itens (EPS-10 / PSS-10), adaptada e validada para a população brasileira.",
      "As perguntas consideram os últimos trinta dias. Responda de acordo com a frequência com que cada situação aconteceu. Não existem respostas certas ou erradas: o objetivo é oferecer uma oportunidade de reflexão sobre sua percepção de imprevisibilidade, falta de controle e sobrecarga.",
      "O resultado é uma ferramenta de autopercepção e orientação para o autocuidado. Ele não fornece diagnóstico nem substitui uma avaliação profissional.",
    ],
    instrumento: {
      nome: "EPS-10 — Escala de Percepção de Estresse",
      instrucoes:
        "Para cada pergunta, selecione a alternativa que melhor representa a frequência com que você vivenciou a situação no último mês.",
      periodoReferencia: "Últimos 30 dias",
      itens: perguntasEPS10.map((enunciado) => ({
        enunciado,
        alternativas: alternativasEPS10,
      })),
      pontuacaoMinima: 0,
      pontuacaoMaxima: 40,
      itensInvertidos: [4, 5, 7, 8],
      faixas: [
        {
          minimo: 0,
          maximo: 13,
          classificacao: "Baixa percepção de estresse",
          descricao:
            "Sua percepção de estresse nas últimas semanas situa-se em níveis baixos, indicando estabilidade perante as demandas cotidianas. Esta é uma oportunidade para consolidar práticas de respiração consciente, exercícios e conexões sociais, buscando manter seu equilíbrio biológico em longo prazo.",
        },
        {
          minimo: 14,
          maximo: 26,
          classificacao: "Moderada percepção de estresse",
          descricao:
            "Seus relatos indicam um nível moderado de percepção de estresse, um padrão comum em momentos de cobrança profissional ou pessoal. O organismo está emitindo sinais de alerta. Identifique os pontos da rotina que mais geram desgaste e experimente incorporar pequenas pausas de relaxamento ao longo da sua semana para evitar a transição para a sobrecarga crônica.",
        },
        {
          minimo: 27,
          maximo: 40,
          classificacao: "Alta percepção de estresse",
          descricao:
            "Suas respostas indicam uma percepção elevada de sobrecarga e desgaste nas últimas semanas. Viver sob esse nível de alerta cobra um custo biológico significativo. Além de implementar as pausas de respiração e higiene do sono apresentadas no módulo, recomendamos enfaticamente que você compartilhe como está se sentindo com um profissional de saúde qualificado, como médico ou psicólogo. Buscar auxílio é uma atitude de prudência e autocuidado.",
        },
      ],
      mensagemAlerta:
        "Sua pontuação está na faixa de alta percepção de estresse. Recomendamos que compartilhe como está se sentindo com um profissional de saúde qualificado, como médico ou psicólogo. A triagem não estabelece um diagnóstico.",
      limiteAlerta: 27,
      alertaSeguranca:
        "Esta triagem é uma ferramenta de reflexão sobre sua percepção de estresse no último mês. Ela não substitui uma avaliação profissional nem fornece um diagnóstico de saúde mental. Se o seu resultado indicar alta percepção de sobrecarga, ou se você estiver vivenciando sofrimento intenso, recomendamos fortemente que procure um serviço de saúde ou profissional capacitado. Caso você tenha pensamentos recorrentes de se machucar ou de tirar a própria vida, não enfrente isso sozinho(a): busque ajuda médica imediata em uma Unidade de Saúde, UPA, CAPS ou acione o CVV (Centro de Valorização da Vida) ligando gratuitamente para o número 188 (serviço gratuito, anônimo e ininterrupto).",
    },
    recompensaConclusaoXP: 0,
    recompensaDevolutivaXP: 0,
  },
};
