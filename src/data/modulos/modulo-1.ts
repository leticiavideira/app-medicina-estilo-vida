
import type { ConteudoModulo } from "@/types/conteudoModulo";

export const modulo1Conteudo: ConteudoModulo = {
  introducao: [
    "Bem-vindo(a) ao Módulo 01! Você já parou para pensar em como as escolhas que fazemos todos os dias podem influenciar nossa saúde ao longo do tempo? Alimentação, atividade física, sono, manejo do estresse, prevenção de adições e conexões sociais são aspectos que participam do funcionamento do organismo e do nosso bem-estar.",

    "A Medicina do Estilo de Vida reúne conhecimentos sobre esses seis pilares e mostra como eles podem contribuir para a prevenção de doenças e para uma vida mais saudável. Nesta semana, você vai conhecer cada um deles e perceber que cuidar da saúde não exige mudanças radicais. Pequenas escolhas, realizadas de maneira consistente, também podem fazer diferença.",

    "A semana tem 7 dias: nos Dias 1 a 4 você realiza as leituras e reflexões, no Dia 5 assiste ao vídeo, no Dia 6 faz a revisão com o quiz e no Dia 7 responde à triagem sobre hábitos de vida. Cada dia de leitura rende 15 XP (10 leitura + 5 reflexão), fechando a meta diária.",
  ],

  dias: [
    {
      numero: 1,
      titulo: "Alimentação saudável e atividade física",

      paragrafos: [
        "Quando pensamos em saúde, é comum associá-la apenas à ausência de doenças. Porém, a saúde também é influenciada pelos hábitos que construímos ao longo da vida. Entre eles, a alimentação e a atividade física ocupam um lugar importante.",

        "Uma alimentação saudável envolve variedade, equilíbrio e a presença frequente de alimentos in natura ou minimamente processados, como frutas, verduras, legumes, feijões e cereais. Esses alimentos fornecem nutrientes necessários para o funcionamento do organismo. Mais do que procurar um alimento específico ou seguir uma dieta perfeita, o objetivo é construir um padrão alimentar que seja nutritivo, acessível e possível de manter no cotidiano.",

        "A atividade física também desempenha um papel importante. Movimentar o corpo pode contribuir para a saúde cardiovascular, o funcionamento dos músculos, a disposição e o bem-estar emocional. Caminhar, dançar, andar de bicicleta, praticar esportes ou realizar outras atividades de que você goste são formas de incluir movimento na rotina.",

        "Para adultos, recomenda-se, de modo geral, acumular de 150 a 300 minutos semanais de atividade física aeróbica moderada, ou o equivalente em atividade vigorosa, além de exercícios de fortalecimento muscular em pelo menos dois dias da semana. Pessoas que estão começando podem progredir gradualmente, respeitando suas condições e possibilidades.",

        "Também é importante lembrar que qualquer movimento pode ser um ponto de partida para quem está pouco ativo. Pequenas oportunidades, como caminhar por alguns minutos ou interromper períodos prolongados sentado, podem ajudar a construir uma rotina mais ativa.",

        "Alimentação e atividade física se complementam. Uma alimentação variada fornece nutrientes para o corpo, enquanto o movimento contribui para o funcionamento físico e metabólico. Não é necessário mudar tudo de uma vez: o mais importante é encontrar formas realistas de cuidar de si.",
      ],

      fraseDestaque:
        "Pequenas escolhas de alimentação e movimento podem construir uma rotina mais saudável.",

      atividade: {
        titulo: "Atividade Reflexiva do Dia 1",

        pergunta:
          "Considerando sua rotina atual, como você avalia seus hábitos de alimentação e atividade física?",

        opcoes: [
          {
            valor: 1,
            texto:
              "Tenho hábitos saudáveis tanto na alimentação quanto na atividade física.",
          },
          {
            valor: 2,
            texto: "Tenho hábitos saudáveis principalmente na alimentação.",
          },
          {
            valor: 3,
            texto:
              "Tenho hábitos saudáveis principalmente na atividade física.",
          },
          {
            valor: 4,
            texto: "Tenho dificuldades em ambas as áreas.",
          },
          {
            valor: 5,
            texto: "Não consigo avaliar meus hábitos atuais.",
          },
        ],

        recompensaXP: 5,
      },

      recompensaLeituraXP: 10,
    },
    
    {
        numero: 2,
        titulo: "Sono restaurador e manejo do estresse",
        paragrafos: [
            "Dormir bem e aprender a lidar com o estresse são aspectos fundamentais para o cuidado com a saúde. Embora muitas vezes sejam deixados em segundo plano diante das responsabilidades diárias, ambos influenciam a disposição, a concentração, o humor e o funcionamento do organismo.",
            "O sono restaurador permite que o corpo e o cérebro realizem processos importantes de recuperação. Para a maioria dos adultos, recomenda-se dormir de 7 a 9 horas por noite, embora as necessidades possam variar. Além da duração, a qualidade do sono e a regularidade dos horários também importam.",
            "Manter horários relativamente consistentes para dormir e acordar, criar um ambiente confortável, reduzir estímulos antes de deitar e observar o consumo de substâncias estimulantes são estratégias que podem favorecer o descanso. Quando as dificuldades para dormir são frequentes ou persistentes, pode ser importante buscar orientação profissional.",
            "O estresse, por sua vez, é uma resposta natural diante de situações que exigem adaptação. Em determinados momentos, ele pode nos ajudar a responder a desafios. Entretanto, quando se torna intenso ou persistente, pode afetar o sono, o humor, a concentração e outros aspectos da saúde.",
            "Manejar o estresse não significa eliminar todas as dificuldades da vida. Significa desenvolver recursos para reconhecer o que estamos sentindo e lidar com as situações de maneira mais cuidadosa. Fazer pausas, praticar uma respiração confortável, reservar momentos para atividades prazerosas, movimentar o corpo e conversar com pessoas de confiança são possibilidades.",
            "A atenção plena também pode ajudar. Ela consiste em direcionar a atenção ao momento presente, observando pensamentos, sensações e emoções sem precisar reagir imediatamente a tudo o que surge.",
            "Cada pessoa encontra recursos diferentes para descansar e lidar com as dificuldades. O importante é reconhecer suas necessidades e experimentar estratégias que façam sentido para sua realidade."
        ],
        fraseDestaque:
            "Descansar também é cuidar da saúde, assim como reconhecer os próprios limites.",
        atividade: {
            titulo: "Atividade Reflexiva do Dia 2",
            pergunta:
            "Nos últimos 7 dias, em que medida o sono e o estresse dificultaram suas atividades cotidianas?",
            opcoes: [
            { valor: 0, texto: "Não dificultaram." },
            { valor: 1, texto: "Dificultaram um pouco." },
            { valor: 2, texto: "Dificultaram moderadamente." },
            { valor: 3, texto: "Dificultaram bastante." },
            { valor: 4, texto: "Dificultaram extremamente." },
            { valor: 5, texto: "Não consigo avaliar." }
            ],
            recompensaXP: 5
        },
        recompensaLeituraXP: 10
        },
        {
        numero: 3,
        titulo: "Prevenção de adições e escolhas mais conscientes",
        paragrafos: [
            "Algumas substâncias podem afetar o funcionamento do organismo e aumentar o risco de problemas de saúde. Por isso, a prevenção de adições é um dos pilares da Medicina do Estilo de Vida.",
            "O tabaco, por exemplo, está associado a diferentes doenças e prejuízos à saúde. Não existe nível seguro de exposição à fumaça do tabaco, e parar de fumar pode trazer benefícios em diferentes momentos da vida. Para quem fuma, buscar apoio profissional e conhecer os recursos disponíveis pode facilitar esse processo.",
            "O álcool também merece atenção. Seu consumo está relacionado a riscos para a saúde, que podem variar conforme a quantidade, a frequência e as características individuais. Reduzir o consumo diminui a exposição a esses riscos, e não consumir álcool é uma escolha que deve ser respeitada. O álcool não é necessário para obter benefícios à saúde.",
            "É importante compreender que os comportamentos relacionados ao uso de substâncias não dependem apenas de força de vontade. Fatores emocionais, sociais, ambientais e biológicos podem participar desse processo. Por isso, dificuldades para reduzir ou interromper o consumo não devem ser tratadas como falta de caráter ou fracasso pessoal.",
            "A prevenção envolve reconhecer situações de risco, observar os próprios padrões de comportamento e buscar apoio quando necessário. Em alguns casos, a ajuda de profissionais de saúde é fundamental, especialmente quando há dependência ou sintomas associados à interrupção do consumo.",
            "Cuidar desse pilar também significa evitar julgamentos. Cada pessoa possui uma história e enfrenta dificuldades diferentes. A informação, o acolhimento e o acesso a cuidados adequados podem favorecer mudanças mais seguras."
        ],
        fraseDestaque:
            "Buscar apoio também é uma forma de cuidar da própria saúde.",
        atividade: {
            titulo: "Atividade Reflexiva do Dia 3",
            pergunta:
            "Qual alternativa melhor descreve sua postura atual em relação a comportamentos que podem afetar sua saúde, como o uso de tabaco ou álcool?",
            opcoes: [
            {
                valor: 1,
                texto: "Não identifico comportamentos desse tipo que gostaria de modificar."
            },
            {
                valor: 2,
                texto: "Reconheço algum comportamento que merece atenção, mas não pretendo modificá-lo neste momento."
            },
            {
                valor: 3,
                texto: "Estou considerando reduzir ou modificar algum comportamento."
            },
            {
                valor: 4,
                texto: "Estou me organizando para reduzir ou modificar algum comportamento."
            },
            {
                valor: 5,
                texto: "Já estou realizando mudanças."
            },
            {
                valor: 6,
                texto: "Estou buscando manter mudanças que iniciei."
            },
            {
                valor: 7,
                texto: "Prefiro não responder."
            }
            ],
            recompensaXP: 5
        },
        recompensaLeituraXP: 10
    },    
    {
        numero: 4,
        titulo: "Conexões sociais: a importância dos vínculos",
        paragrafos: [
            "Os relacionamentos fazem parte da nossa saúde. Ter pessoas com quem conversar, compartilhar experiências, receber apoio e construir vínculos de confiança pode contribuir para o bem-estar emocional e para a maneira como enfrentamos as dificuldades da vida.",
            "As conexões sociais podem aparecer em diferentes espaços: na família, nas amizades, nos relacionamentos afetivos, no trabalho, nos estudos e na comunidade. Não existe uma única forma de construir vínculos saudáveis. Para algumas pessoas, estar próximo de um pequeno grupo de pessoas de confiança é mais significativo do que participar de muitos grupos sociais.",
            "O apoio social pode ajudar a enfrentar períodos de estresse, facilitar a busca por cuidados e favorecer a construção de hábitos mais saudáveis. Compartilhar uma caminhada, preparar uma refeição com alguém ou conversar com uma pessoa de confiança são exemplos simples de como os vínculos podem fazer parte do cotidiano.",
            "Ao mesmo tempo, é importante lembrar que quantidade de contatos não é o mesmo que qualidade dos relacionamentos. Relações marcadas por respeito, escuta, segurança e reciprocidade podem favorecer o bem-estar. Também é legítimo estabelecer limites quando uma relação provoca sofrimento.",
            "Nem todas as pessoas contam com uma rede de apoio próxima, e construir vínculos pode ser difícil em determinados momentos. Participar de atividades coletivas, grupos de interesse ou espaços comunitários pode ser uma possibilidade de aproximação, respeitando o próprio ritmo.",
            "Os seis pilares da Medicina do Estilo de Vida se relacionam entre si. O apoio de outras pessoas pode ajudar alguém a manter uma rotina de atividade física, organizar melhor a alimentação ou procurar ajuda diante de dificuldades emocionais. Da mesma forma, cuidar do sono e do estresse pode favorecer a convivência e a disponibilidade para os relacionamentos.",
            "O objetivo não é alcançar uma rotina perfeita em todas as áreas, mas reconhecer que diferentes aspectos da vida participam da saúde e que mudanças em um deles podem facilitar o cuidado com os demais."
        ],
        fraseDestaque:
            "Cuidar dos vínculos também é uma maneira de cuidar da saúde.",
        atividade: {
            titulo: "Atividade Prática do Dia 4",
            pergunta:
            "Nos próximos sete dias, qual ação você considera mais viável para fortalecer vínculos ou ampliar oportunidades de conexão?",
            opcoes: [
            {
                valor: 1,
                texto: "Conversar com alguém de confiança."
            },
            {
                valor: 2,
                texto: "Entrar em contato com familiar ou amigo com quem tenho pouco conversado."
            },
            {
                valor: 3,
                texto: "Participar de uma atividade coletiva, grupo ou espaço comunitário."
            },
            {
                valor: 4,
                texto: "Propor uma atividade compartilhada, como caminhar ou fazer uma refeição."
            },
            {
                valor: 5,
                texto: "Fortalecer limites ou buscar uma relação mais respeitosa e segura."
            },
            {
                valor: 6,
                texto: "Não pretendo realizar uma ação desse tipo nesta semana."
            },
            {
                valor: 7,
                texto: "Nenhuma das alternativas se aplica à minha realidade."
            }
            ],
            recompensaXP: 10
        },
        recompensaLeituraXP: 10
    }
  ],

    fechamentoLeitura: {
        paragrafos: [
            "Com os Dias 1 a 4, você conheceu os seis pilares da Medicina do Estilo de Vida: alimentação saudável, atividade física, sono restaurador, manejo do estresse, prevenção de adições e conexões sociais.",
            "Esses pilares não funcionam de maneira isolada. Eles se relacionam e podem se fortalecer mutuamente. Por isso, não é necessário transformar todas as áreas da vida ao mesmo tempo. Reconhecer suas necessidades e escolher um próximo passo possível já pode ser um começo.",
            "No Dia 5 você assiste ao vídeo; no Dia 6 realiza a revisão com o quiz; e no Dia 7 responde à triagem sobre hábitos de vida."
        ],
        fraseDestaque:
            "Você não precisa mudar tudo hoje. Começar por um passo possível já é uma forma de cuidado."
        },

        video: {
            titulo: "Vídeo educativo",
            descricao: [
                "Neste dia, você assistirá a um vídeo educativo que retoma os seis pilares da Medicina do Estilo de Vida e apresenta exemplos de como eles podem ser incorporados à rotina.",
                "Observe como os pilares se relacionam e pense em quais deles você já possui hábitos consolidados e quais poderiam receber mais atenção."
            ]
        },
        
        quiz: {
            titulo: "Revisão dos seis pilares",
            introducao:
            "Agora que você conheceu os seis pilares da Medicina do Estilo de Vida, responda às questões para revisar os principais conceitos apresentados ao longo do módulo.",
            questoes: [
            {
                enunciado:
                "Qual alternativa representa melhor a proposta da Medicina do Estilo de Vida?",
                alternativas: [
                {
                    letra: "A",
                    texto:
                    "Concentrar todos os esforços em um único hábito, independentemente dos demais."
                },
                {
                    letra: "B",
                    texto:
                    "Construir hábitos saudáveis considerando diferentes aspectos da vida que se relacionam com a saúde."
                },
                {
                    letra: "C",
                    texto:
                    "Fazer mudanças radicais em todas as áreas ao mesmo tempo."
                },
                {
                    letra: "D",
                    texto:
                    "Considerar apenas a alimentação e o peso corporal."
                }
                ],
                respostaCorreta: "B",
                feedback:
                "A Medicina do Estilo de Vida considera seis pilares que se relacionam entre si: alimentação, atividade física, sono, manejo do estresse, prevenção de adições e conexões sociais."
            },
            {
                enunciado:
                "Qual alternativa descreve uma característica da alimentação saudável?",
                alternativas: [
                {
                    letra: "A",
                    texto: "Depender de alimentos caros e importados."
                },
                {
                    letra: "B",
                    texto:
                    "Excluir completamente determinados grupos alimentares sem necessidade individual."
                },
                {
                    letra: "C",
                    texto:
                    "Priorizar variedade e alimentos in natura ou minimamente processados."
                },
                {
                    letra: "D",
                    texto:
                    "Seguir uma dieta restritiva independentemente da realidade da pessoa."
                }
                ],
                respostaCorreta: "C",
                feedback:
                "Uma alimentação saudável pode ser construída com alimentos variados e acessíveis. O padrão alimentar ao longo do tempo é mais importante do que a busca por perfeição."
            },
            {
                enunciado:
                "Para a maioria dos adultos, qual duração de sono costuma ser recomendada por noite?",
                alternativas: [
                {
                    letra: "A",
                    texto: "De 3 a 4 horas."
                },
                {
                    letra: "B",
                    texto: "De 5 a 6 horas para todas as pessoas."
                },
                {
                    letra: "C",
                    texto:
                    "De 7 a 9 horas, considerando também a qualidade e a regularidade do sono."
                },
                {
                    letra: "D",
                    texto: "Exatamente 12 horas para todos os adultos."
                }
                ],
                respostaCorreta: "C",
                feedback:
                "A maioria dos adultos precisa de aproximadamente 7 a 9 horas de sono, embora as necessidades individuais possam variar."
            },
            {
                enunciado:
                "Qual alternativa representa uma estratégia possível de manejo do estresse?",
                alternativas: [
                {
                    letra: "A",
                    texto: "Ignorar continuamente os sinais de cansaço."
                },
                {
                    letra: "B",
                    texto:
                    "Evitar todas as situações difíceis, independentemente das consequências."
                },
                {
                    letra: "C",
                    texto:
                    "Reconhecer as próprias necessidades, fazer pausas e buscar apoio quando necessário."
                },
                {
                    letra: "D",
                    texto:
                    "Acreditar que sentir estresse significa não saber lidar com a vida."
                }
                ],
                respostaCorreta: "C",
                feedback:
                "Manejar o estresse envolve reconhecer o que acontece consigo e desenvolver recursos para enfrentar as situações de maneira cuidadosa."
            },
            {
                enunciado:
                "Qual afirmação sobre prevenção de adições é mais adequada?",
                alternativas: [
                {
                    letra: "A",
                    texto:
                    "Dificuldades relacionadas ao consumo de substâncias sempre significam falta de força de vontade."
                },
                {
                    letra: "B",
                    texto:
                    "Buscar apoio profissional pode ajudar a lidar com dificuldades relacionadas ao consumo de substâncias."
                },
                {
                    letra: "C",
                    texto: "O álcool é necessário para manter a saúde."
                },
                {
                    letra: "D",
                    texto:
                    "Parar de fumar não traz benefícios quando a pessoa já fuma há muitos anos."
                }
                ],
                respostaCorreta: "B",
                feedback:
                "O uso de substâncias pode envolver fatores biológicos, emocionais e sociais. O apoio adequado pode facilitar mudanças e favorecer o cuidado com a saúde."
            },
            {
                enunciado:
                "Como as conexões sociais podem contribuir para a saúde?",
                alternativas: [
                {
                    letra: "A",
                    texto: "Apenas quando a pessoa possui muitos amigos."
                },
                {
                    letra: "B",
                    texto:
                    "Quando substituem todos os demais cuidados de saúde."
                },
                {
                    letra: "C",
                    texto:
                    "Quando envolvem vínculos significativos, apoio e relações respeitosas."
                },
                {
                    letra: "D",
                    texto: "Somente quando acontecem dentro da família."
                }
                ],
                respostaCorreta: "C",
                feedback:
                "Vínculos significativos podem favorecer o bem-estar e o enfrentamento de dificuldades. A qualidade e a segurança das relações são importantes."
            }
            ],
            recompensaConclusaoXP: 20,
            recompensaBonusXP: 5,
            minimoAcertosBonus: 4
        },

        
        triagem: {
            titulo: "Triagem dos hábitos de vida",
            introducao: [
            "Agora é o momento de observar seus hábitos de vida considerando os seis pilares da Medicina do Estilo de Vida: alimentação, atividade física, sono, manejo do estresse, consumo de substâncias e conexões sociais.",
            "Esta etapa tem como objetivo ajudar você a reconhecer como estão seus hábitos atualmente, identificar seu ponto de partida e perceber quais áreas podem receber mais atenção.",
            "Responda considerando sua realidade, sem julgamentos. A triagem é uma ferramenta de autorreflexão e acompanhamento dos hábitos de vida, não um diagnóstico definitivo."
            ],
            recompensaConclusaoXP: 20,
            recompensaDevolutivaXP: 5
        },

};
