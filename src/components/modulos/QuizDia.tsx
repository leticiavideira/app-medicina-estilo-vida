"use client";

import { useState } from "react";
import Link from "next/link";

import type { QuizModulo } from "@/types/conteudoModulo";

type QuizDiaProps = {
  quiz: QuizModulo;
  slug: string;
};

export default function QuizDia({ quiz, slug }: QuizDiaProps) {
  const [indiceQuestao, setIndiceQuestao] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(
    null
  );
  const [respostaConfirmada, setRespostaConfirmada] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const questao = quiz.questoes[indiceQuestao];

  const alternativaCorreta = questao.alternativas.find(
    (alternativa) => alternativa.letra === questao.respostaCorreta
  );

  const bonusConquistado = acertos >= quiz.minimoAcertosBonus;

  function confirmarResposta() {
    if (respostaSelecionada === null || respostaConfirmada) {
      return;
    }

    if (respostaSelecionada === questao.respostaCorreta) {
      setAcertos((atual) => atual + 1);
    }

    setRespostaConfirmada(true);
  }

  function avancarQuestao() {
    if (indiceQuestao === quiz.questoes.length - 1) {
      setFinalizado(true);
      return;
    }

    setIndiceQuestao((atual) => atual + 1);
    setRespostaSelecionada(null);
    setRespostaConfirmada(false);
  }

  if (finalizado) {
    const totalXP =
      quiz.recompensaConclusaoXP +
      (bonusConquistado ? quiz.recompensaBonusXP : 0);

    return (
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-[#F7FAF7] px-5 pb-8 pt-6">
        <div className="flex flex-1 flex-col justify-center">
          <div className="rounded-2xl border border-[#E4EBE5] bg-white p-6 text-center shadow-sm">
            <span className="text-5xl" aria-hidden="true">
              {bonusConquistado ? "🏆" : "📚"}
            </span>

            <h1 className="mt-5 text-2xl font-bold text-[#153D2D]">
              Quiz concluído!
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#65756C]">
              Você acertou {acertos} de {quiz.questoes.length} questões.
            </p>

            <div className="mt-6 rounded-xl bg-[#EAF4ED] p-4">
              <p className="text-sm font-semibold text-[#176B48]">
                Recompensa pela conclusão
              </p>

              <p className="mt-2 text-2xl font-bold text-[#16834E]">
                +{quiz.recompensaConclusaoXP} XP
              </p>

              {bonusConquistado && (
                <p className="mt-3 text-sm font-bold text-[#16834E]">
                  Bônus por desempenho: +{quiz.recompensaBonusXP} XP
                </p>
              )}

              {!bonusConquistado && (
                <p className="mt-3 text-xs leading-5 text-[#65756C]">
                  Para conquistar o bônus, era necessário acertar pelo menos{" "}
                  {quiz.minimoAcertosBonus} questões.
                </p>
              )}

              <div className="mt-4 border-t border-[#D8E5DC] pt-3">
                <p className="text-sm font-semibold text-[#176B48]">
                  Total conquistado
                </p>
                <p className="mt-1 text-3xl font-bold text-[#16834E]">
                  +{totalXP} XP
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link
          href={`/modulos/${slug}/dia/7`}
          className="mt-6 block w-full rounded-xl bg-[#16834E] py-4 text-center text-sm font-bold text-white transition hover:bg-[#126B40]"
        >
          Ir para a próxima etapa
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-[#F7FAF7] px-5 pb-8 pt-6">
      <Link
        href={`/modulos/${slug}/dia/5`}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#176B48]"
      >
        <span aria-hidden="true">←</span>
        Voltar ao vídeo
      </Link>

      <div className="mb-5">
        <span className="inline-flex rounded-full bg-[#E5F2EA] px-3 py-1.5 text-xs font-semibold text-[#176B48]">
          Dia 6
        </span>

        <h1 className="mt-4 text-2xl font-bold leading-tight text-[#153D2D]">
          {quiz.titulo}
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#65756C]">
          {quiz.introducao}
        </p>
      </div>

      <div className="mb-5">
        <div className="mb-2 flex justify-between text-xs font-semibold text-[#65756C]">
          <span>
            Questão {indiceQuestao + 1} de {quiz.questoes.length}
          </span>
          <span>{Math.round(((indiceQuestao + 1) / quiz.questoes.length) * 100)}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#E4EBE5]">
          <div
            className="h-full rounded-full bg-[#16834E] transition-all"
            style={{
              width: `${((indiceQuestao + 1) / quiz.questoes.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="max-h-[55vh] space-y-5 overflow-y-auto">
        <section className="rounded-2xl border border-[#E4EBE5] bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold leading-6 text-[#153D2D]">
            {questao.enunciado}
          </h2>

          <div className="mt-5 space-y-3">
            {questao.alternativas.map((alternativa) => {
              const selecionada =
                respostaSelecionada === alternativa.letra;

              const correta =
                alternativa.letra === questao.respostaCorreta;

              let estilo =
                "border-[#E4EBE5] bg-white text-[#344B3D] hover:border-[#A8CBB4]";

              if (respostaConfirmada && correta) {
                estilo = "border-[#16834E] bg-[#EAF4ED] text-[#176B48]";
              } else if (respostaConfirmada && selecionada && !correta) {
                estilo = "border-[#D97757] bg-[#FFF1EC] text-[#9A432B]";
              } else if (selecionada) {
                estilo = "border-[#16834E] bg-[#EAF4ED] text-[#176B48]";
              }

              return (
                <button
                  key={alternativa.letra}
                  type="button"
                  disabled={respostaConfirmada}
                  onClick={() => setRespostaSelecionada(alternativa.letra)}
                  className={`w-full rounded-xl border p-4 text-left text-sm leading-6 transition ${estilo} ${
                    respostaConfirmada ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <span className="flex items-start gap-3">
                    <span className="font-bold">
                      {alternativa.letra}.
                    </span>
                    <span>{alternativa.texto}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {respostaConfirmada && (
          <section className="rounded-xl border border-[#E4EBE5] bg-white p-4">
            <p className="text-sm font-bold text-[#153D2D]">
              {respostaSelecionada === questao.respostaCorreta
                ? "Resposta correta!"
                : `A resposta correta é ${questao.respostaCorreta}.`}
            </p>

            {alternativaCorreta && (
              <p className="mt-2 text-sm leading-6 text-[#344B3D]">
                {alternativaCorreta.texto}
              </p>
            )}

            <p className="mt-3 text-sm leading-6 text-[#65756C]">
              {questao.feedback}
            </p>
          </section>
        )}
      </div>

      {!respostaConfirmada ? (
        <button
          type="button"
          disabled={respostaSelecionada === null}
          onClick={confirmarResposta}
          className="mt-6 w-full rounded-xl bg-[#16834E] py-4 text-sm font-bold text-white transition hover:bg-[#126B40] disabled:cursor-not-allowed disabled:bg-[#AAB8AE]"
        >
          Confirmar resposta
        </button>
      ) : (
        <button
          type="button"
          onClick={avancarQuestao}
          className="mt-6 w-full rounded-xl bg-[#16834E] py-4 text-sm font-bold text-white transition hover:bg-[#126B40]"
        >
          {indiceQuestao === quiz.questoes.length - 1
            ? "Ver resultado"
            : "Próxima questão"}
        </button>
      )}
    </main>
  );
}