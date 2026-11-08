
"use client";

import { useState } from "react";
import Link from "next/link";
import type {
  AssistModulo,
  QuestaoAssist,
} from "@/types/conteudoModulo";

type TriagemAssistDiaProps = {
  assist: AssistModulo;
  slug: string;
};

type ClassificacaoAssist = "baixo" | "moderado" | "alto";

export default function TriagemAssistDia({
  assist,
  slug,
}: TriagemAssistDiaProps) {
  const [substanciasSelecionadas, setSubstanciasSelecionadas] = useState<
    string[]
  >([]);

  const [usoConfirmado, setUsoConfirmado] = useState(false);

  const [subquizAberto, setSubquizAberto] = useState<string | null>(null);

  const [respostas, setRespostas] = useState<
    Record<string, Record<number, number>>
  >({});

  const [respostaInjecao, setRespostaInjecao] = useState<number | null>(
    null
  );

  const [mostrarDevolutiva, setMostrarDevolutiva] = useState(false);

  const questoesPorSubstancia = assist.questoes
    .filter((questao) => questao.numero >= 2 && questao.numero <= 7)
    .sort((a, b) => a.numero - b.numero);

  const questaoInjecao = assist.questoes.find(
    (questao) => questao.numero === 8
  );

  const respostasCompletas =
    usoConfirmado &&
    questaoInjecao !== undefined &&
    respostaInjecao !== null &&
    substanciasSelecionadas.every((id) =>
      questoesPorSubstancia.every(
        (questao) => respostas[id]?.[questao.numero] !== undefined
      )
    );

  const totalXP =
    assist.recompensaConclusaoXP + assist.recompensaDevolutivaXP;

  function selecionarSubstancia(id: string) {
    setSubstanciasSelecionadas((anteriores) => {
      const jaSelecionada = anteriores.includes(id);

      if (jaSelecionada) {
        setRespostas((anterioresRespostas) => {
          const novasRespostas = { ...anterioresRespostas };
          delete novasRespostas[id];
          return novasRespostas;
        });

        if (subquizAberto === id) {
          setSubquizAberto(null);
        }

        return anteriores.filter((substancia) => substancia !== id);
      }

      return [...anteriores, id];
    });

    setUsoConfirmado(false);
    setMostrarDevolutiva(false);
  }

  function confirmarSelecao() {
    setUsoConfirmado(true);
    setMostrarDevolutiva(false);

    if (substanciasSelecionadas.length > 0) {
      setSubquizAberto(substanciasSelecionadas[0]);
    } else {
      setSubquizAberto(null);
    }
  }

  function selecionarResposta(
    substanciaId: string,
    numeroQuestao: number,
    valor: number
  ) {
    setRespostas((anteriores) => ({
      ...anteriores,
      [substanciaId]: {
        ...anteriores[substanciaId],
        [numeroQuestao]: valor,
      },
    }));

    setMostrarDevolutiva(false);
  }

  function classificarPontuacao(
    substanciaId: string,
    pontuacao: number
  ): ClassificacaoAssist {
    if (substanciaId === "alcool") {
      if (pontuacao <= 10) return "baixo";
      if (pontuacao <= 26) return "moderado";
      return "alto";
    }

    if (pontuacao <= 3) return "baixo";
    if (pontuacao <= 26) return "moderado";
    return "alto";
  }

  function calcularPontuacao(substanciaId: string): number {
    return questoesPorSubstancia.reduce((total, questao) => {
      if (substanciaId === "tabaco" && questao.numero === 5) {
        return total;
      }

      return total + (respostas[substanciaId]?.[questao.numero] ?? 0);
    }, 0);
  }

  function concluirTriagem() {
    if (!respostasCompletas) return;

    setMostrarDevolutiva(true);
  }

  function alterarSelecao() {
    setUsoConfirmado(false);
    setMostrarDevolutiva(false);
    setSubquizAberto(null);
  }

  const resultados = substanciasSelecionadas.map((id) => {
    const substancia = assist.substancias.find(
      (item) => item.id === id
    );

    const pontuacao = calcularPontuacao(id);
    const classificacao = classificarPontuacao(id, pontuacao);

    return {
      id,
      nome: substancia?.nome ?? id,
      pontuacao,
      classificacao,
      devolutiva: assist.devolutivas[classificacao],
    };
  });

  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-2xl flex-col px-5 py-6">
      <Link
        href={`/modulos/${slug}/dia/8`}
        className="mb-6 text-sm font-medium text-[#16834E] hover:underline"
      >
        ← Voltar para o quiz
      </Link>

      <div className="mb-5">
        <span className="rounded-full bg-[#E8F4EC] px-3 py-1 text-xs font-bold text-[#16834E]">
          DIA 9 · TRIAGEM
        </span>

        <h1 className="mt-4 text-2xl font-bold text-[#263D30]">
          {assist.titulo}
        </h1>
      </div>

      <section className="space-y-4 rounded-2xl border border-[#E4EBE5] bg-white p-5 shadow-sm">
        {assist.introducao.map((paragrafo, index) => (
          <p
            key={index}
            className="text-sm leading-7 text-[#46554B]"
          >
            {paragrafo}
          </p>
        ))}
      </section>

      <section
        role="note"
        className="mt-5 rounded-2xl border border-[#E9C9A8] bg-[#FFF8EF] p-5"
      >
        <h2 className="font-bold text-[#805020]">
          Aviso de segurança e apoio
        </h2>

        <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#694F36]">
          {assist.mensagemSeguranca}
        </p>
      </section>

      {/* PERGUNTA 1 — USO AO LONGO DA VIDA */}
      <section className="mt-5 rounded-2xl border border-[#E4EBE5] bg-white p-5">
        <h2 className="font-bold leading-6 text-[#263D30]">
          1. {assist.perguntaUsoNaVida}
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#59665D]">
          Selecione todas as substâncias que você já utilizou.
        </p>

        <div className="mt-4 space-y-2">
          {assist.substancias.map((substancia) => {
            const selecionada = substanciasSelecionadas.includes(
              substancia.id
            );

            return (
              <label
                key={substancia.id}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${
                  selecionada
                    ? "border-[#16834E] bg-[#E8F4EC] text-[#16834E]"
                    : "border-[#E4EBE5] bg-white text-[#46554B] hover:border-[#16834E]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selecionada}
                  disabled={usoConfirmado}
                  onChange={() => selecionarSubstancia(substancia.id)}
                  className="h-4 w-4 accent-[#16834E]"
                />

                <span>{substancia.nome}</span>
              </label>
            );
          })}
        </div>

        {!usoConfirmado ? (
          <button
            type="button"
            onClick={confirmarSelecao}
            className="mt-5 w-full rounded-xl bg-[#16834E] px-5 py-3 font-semibold text-white transition hover:bg-[#116B3E]"
          >
            Confirmar seleção
          </button>
        ) : (
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-xs text-[#59665D]">
              Seleção confirmada.
            </p>

            <button
              type="button"
              onClick={alterarSelecao}
              className="text-sm font-semibold text-[#16834E] hover:underline"
            >
              Alterar seleção
            </button>
          </div>
        )}

        {usoConfirmado && substanciasSelecionadas.length === 0 && (
          <p className="mt-4 rounded-xl bg-[#F5F8F5] p-3 text-sm leading-6 text-[#59665D]">
            Você informou que nunca utilizou nenhuma das substâncias
            apresentadas. As perguntas específicas sobre frequência e
            consequências não serão necessárias.
          </p>
        )}
      </section>

      {/* SUBQUIZZES INDIVIDUAIS POR SUBSTÂNCIA */}
      {usoConfirmado && substanciasSelecionadas.length > 0 && (
        <section className="mt-6 space-y-4">
          <div>
            <h2 className="font-bold text-[#263D30]">
              Questionários por substância
            </h2>

            <p className="mt-1 text-sm leading-6 text-[#59665D]">
              Selecione uma substância para abrir suas perguntas.
              Cada questionário possui sua própria área de rolagem.
            </p>
          </div>

          {substanciasSelecionadas.map((substanciaId) => {
            const substancia = assist.substancias.find(
              (item) => item.id === substanciaId
            );

            const aberto = subquizAberto === substanciaId;

            const questoesRespondidas = questoesPorSubstancia.filter(
              (questao) =>
                respostas[substanciaId]?.[questao.numero] !== undefined
            ).length;

            return (
              <div
                key={substanciaId}
                className="overflow-hidden rounded-2xl border border-[#E4EBE5] bg-white"
              >
                {/* CABEÇALHO CLICÁVEL */}
                <button
                  type="button"
                  onClick={() =>
                    setSubquizAberto(aberto ? null : substanciaId)
                  }
                  aria-expanded={aberto}
                  className={`flex w-full items-center justify-between gap-3 p-4 text-left transition ${
                    aberto
                      ? "bg-[#E8F4EC]"
                      : "bg-white hover:bg-[#F5F8F5]"
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-[#263D30]">
                      {substancia?.nome ?? substanciaId}
                    </h3>

                    <p className="mt-1 text-xs text-[#59665D]">
                      {questoesRespondidas} de {questoesPorSubstancia.length}{" "}
                      perguntas respondidas
                    </p>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      aberto
                        ? "bg-[#16834E] text-white"
                        : "bg-[#E8F4EC] text-[#16834E]"
                    }`}
                  >
                    <span
                      className={`transition-transform ${
                        aberto ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </span>
                </button>

                {/* CONTEÚDO COM ROLAGEM INDEPENDENTE */}
                {aberto && (
                  <div className="border-t border-[#E4EBE5]">
                    <div className="max-h-[65vh] space-y-4 overflow-y-auto overscroll-contain p-4">
                      <p className="text-sm leading-6 text-[#59665D]">
                        Responda às perguntas considerando especificamente
                        esta substância.
                      </p>

                      {questoesPorSubstancia.map(
                        (questao: QuestaoAssist) => (
                          <div
                            key={questao.numero}
                            className="rounded-xl border border-[#E4EBE5] bg-[#FAFCFA] p-4"
                          >
                            <h4 className="font-bold leading-6 text-[#263D30]">
                              {questao.numero}. {questao.titulo}
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-[#59665D]">
                              {questao.enunciado}
                            </p>

                            <div className="mt-4 space-y-2">
                              {questao.alternativas.map((alternativa) => {
                                const selecionada =
                                  respostas[substanciaId]?.[
                                    questao.numero
                                  ] === alternativa.valor;

                                return (
                                  <button
                                    key={alternativa.valor}
                                    type="button"
                                    onClick={() =>
                                      selecionarResposta(
                                        substanciaId,
                                        questao.numero,
                                        alternativa.valor
                                      )
                                    }
                                    aria-pressed={selecionada}
                                    className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-sm transition ${
                                      selecionada
                                        ? "border-[#16834E] bg-[#E8F4EC] text-[#16834E]"
                                        : "border-[#E4EBE5] bg-white text-[#46554B] hover:border-[#16834E]"
                                    }`}
                                  >
                                    <span
                                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                                        selecionada
                                          ? "border-[#16834E] bg-[#16834E] text-white"
                                          : "border-[#C9D4CB] text-[#59665D]"
                                      }`}
                                    >
                                      {alternativa.valor}
                                    </span>

                                    <span>{alternativa.texto}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}

      {/* QUESTÃO 8 — USO INJETÁVEL, PERGUNTADA UMA ÚNICA VEZ */}
      {usoConfirmado && questaoInjecao && (
        <section className="mt-5 rounded-2xl border border-[#E4EBE5] bg-white p-5">
          <span className="text-xs font-bold uppercase tracking-wide text-[#16834E]">
            Pergunta complementar
          </span>

          <h2 className="mt-2 font-bold leading-6 text-[#263D30]">
            8. {questaoInjecao.titulo}
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#59665D]">
            {questaoInjecao.enunciado}
          </p>

          <div className="mt-4 space-y-2">
            {questaoInjecao.alternativas.map((alternativa) => {
              const selecionada =
                respostaInjecao === alternativa.valor;

              return (
                <button
                  key={alternativa.valor}
                  type="button"
                  onClick={() => {
                    setRespostaInjecao(alternativa.valor);
                    setMostrarDevolutiva(false);
                  }}
                  aria-pressed={selecionada}
                  className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-sm transition ${
                    selecionada
                      ? "border-[#16834E] bg-[#E8F4EC] text-[#16834E]"
                      : "border-[#E4EBE5] bg-white text-[#46554B] hover:border-[#16834E]"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                      selecionada
                        ? "border-[#16834E] bg-[#16834E] text-white"
                        : "border-[#C9D4CB] text-[#59665D]"
                    }`}
                  >
                    {alternativa.valor}
                  </span>

                  <span>{alternativa.texto}</span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* CONCLUSÃO */}
      {usoConfirmado && !mostrarDevolutiva && (
        <button
          type="button"
          onClick={concluirTriagem}
          disabled={!respostasCompletas}
          className="mt-6 w-full rounded-xl bg-[#16834E] px-5 py-3 font-semibold text-white transition hover:bg-[#116B3E] disabled:cursor-not-allowed disabled:bg-[#AAB9AE]"
        >
          Ver minha devolutiva
        </button>
      )}

      {/* RESULTADOS */}
      {mostrarDevolutiva && (
        <section
          aria-live="polite"
          className="mt-6 space-y-5 rounded-2xl border border-[#D5E7D9] bg-[#F5F8F5] p-5"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wide text-[#16834E]">
              Sua devolutiva
            </span>

            <h2 className="mt-2 text-xl font-bold text-[#263D30]">
              Resultado da triagem
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#59665D]">
              A pontuação é calculada individualmente para cada
              substância selecionada.
            </p>
          </div>

          {resultados.length === 0 ? (
            <div className="rounded-xl border border-[#D5E7D9] bg-white p-4">
              <h3 className="font-bold text-[#263D30]">
                Nenhuma substância selecionada
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#46554B]">
                Você informou não ter utilizado nenhuma das
                substâncias apresentadas. Por isso, não há escores
                específicos a apresentar nesta triagem.
              </p>
            </div>
          ) : (
            resultados.map((resultado) => (
              <div
                key={resultado.id}
                className="rounded-xl border border-[#D5E7D9] bg-white p-4"
              >
                <h3 className="font-bold text-[#263D30]">
                  {resultado.nome}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#46554B]">
                  Pontuação: {resultado.pontuacao}
                </p>

                <p className="mt-2 text-sm font-bold capitalize text-[#16834E]">
                  Risco {resultado.classificacao}
                </p>

                <p className="mt-2 text-sm leading-7 text-[#46554B]">
                  {resultado.devolutiva}
                </p>
              </div>
            ))
          )}

          {respostaInjecao !== null && respostaInjecao > 0 && (
            <div className="rounded-xl border border-[#E9C9A8] bg-[#FFF8EF] p-4">
              <h3 className="font-bold text-[#805020]">
                Atenção ao uso injetável
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#694F36]">
                A resposta à pergunta sobre uso injetável indica uma
                situação que merece avaliação especializada. Essa
                informação é um marcador independente e não foi
                somada aos escores das substâncias.
              </p>
            </div>
          )}

          <p className="border-t border-[#D5E7D9] pt-4 text-sm leading-7 text-[#59665D]">
            {assist.mensagemFinal}
          </p>
        </section>
      )}

      {/* RECOMPENSAS */}
      {totalXP > 0 && (
        <section className="mt-5 rounded-2xl border border-[#E4EBE5] bg-white p-5">
          <h2 className="font-bold text-[#263D30]">
            Recompensas da etapa
          </h2>

          <div className="mt-4 space-y-3 text-sm text-[#46554B]">
            {assist.recompensaConclusaoXP > 0 && (
              <div className="flex items-center justify-between">
                <span>Triagem concluída</span>
                <strong className="text-[#16834E]">
                  +{assist.recompensaConclusaoXP} XP
                </strong>
              </div>
            )}

            {assist.recompensaDevolutivaXP > 0 && (
              <div className="flex items-center justify-between">
                <span>Visualização da devolutiva</span>
                <strong className="text-[#16834E]">
                  +{assist.recompensaDevolutivaXP} XP
                </strong>
              </div>
            )}
          </div>

          <p className="mt-4 border-t border-[#E4EBE5] pt-3 text-right text-xs font-semibold text-[#59665D]">
            Total possível: {totalXP} XP
          </p>
        </section>
      )}
    </main>
  );
}
