
"use client";

import { useState } from "react";
import Link from "next/link";
import type { TriagemModulo } from "@/types/conteudoModulo";

type TriagemDiaProps = {
  triagem: TriagemModulo;
  slug: string;
};

export default function TriagemDia({ triagem, slug }: TriagemDiaProps) {
  const instrumento = triagem.instrumento;

  const [respostas, setRespostas] = useState<number[]>(() => {
    if (instrumento) {
      return instrumento.itens.map(() => -1);
    }

    return triagem.perguntas?.map(() => -1) ?? [];
  });

  const [mostrarDevolutiva, setMostrarDevolutiva] = useState(false);
  const [metaSemanal, setMetaSemanal] = useState("");

  const ehModulo7Ou8 = slug === "modulo-7" || slug === "modulo-8";
  const diaTriagem = ehModulo7Ou8 ? 9 : 7;
  const diaQuiz = ehModulo7Ou8 ? 8 : 6;

  const respostasCompletas =
    respostas.length > 0 && respostas.every((resposta) => resposta !== -1);

  const pontuacao = instrumento
    ? instrumento.itens.reduce((total, item, index) => {
        const resposta = respostas[index];

        if (resposta === undefined || resposta === -1) {
          return total;
        }

        const itemInvertido =
          instrumento.itensInvertidos?.includes(index + 1) ?? false;

        if (!itemInvertido) {
          return total + resposta;
        }

        const valores = item.alternativas.map((alternativa) => alternativa.valor);
        const menorValor = Math.min(...valores);
        const maiorValor = Math.max(...valores);

        return total + (menorValor + maiorValor - resposta);
      }, 0)
    : 0;

  const faixaResultado = instrumento?.faixas.find(
    (faixa) =>
      pontuacao >= faixa.minimo && pontuacao <= faixa.maximo
  );

  const totalXP =
    triagem.recompensaConclusaoXP + triagem.recompensaDevolutivaXP;

  function selecionarResposta(indice: number, valor: number) {
    setRespostas((anteriores) =>
      anteriores.map((resposta, i) =>
        i === indice ? valor : resposta
      )
    );
  }

  function concluirTriagem() {
    if (!respostasCompletas) {
      return;
    }

    setMostrarDevolutiva(true);
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-2xl flex-col px-5 py-6">
      <Link
        href={`/modulos/${slug}/dia/${diaQuiz}`}
        className="mb-6 text-sm font-medium text-[#16834E] hover:underline"
      >
        ← Voltar para o quiz
      </Link>

      <div className="mb-5">
        <span className="rounded-full bg-[#E8F4EC] px-3 py-1 text-xs font-bold text-[#16834E]">
          DIA {diaTriagem} · TRIAGEM
        </span>

        <h1 className="mt-4 text-2xl font-bold text-[#263D30]">
          {triagem.titulo}
        </h1>
      </div>

      <section className="space-y-4 rounded-2xl border border-[#E4EBE5] bg-white p-5 shadow-sm">
        {triagem.introducao.map((paragrafo, index) => (
          <p
            key={index}
            className="text-sm leading-7 text-[#46554B]"
          >
            {paragrafo}
          </p>
        ))}
      </section>

      {instrumento && (
        <>
          {instrumento.alertaSeguranca && (
            <section
              role="note"
              className="mt-5 rounded-2xl border border-[#E9C9A8] bg-[#FFF8EF] p-5"
            >
              <h2 className="font-bold text-[#805020]">
                Aviso de segurança e apoio
              </h2>

              <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#694F36]">
                {instrumento.alertaSeguranca}
              </p>
            </section>
          )}

          <section className="mt-5 rounded-2xl border border-[#E4EBE5] bg-white p-5">
            <h2 className="font-bold text-[#263D30]">
              {instrumento.nome}
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#59665D]">
              {instrumento.instrucoes}
            </p>

            {instrumento.periodoReferencia && (
              <p className="mt-2 text-xs font-semibold text-[#16834E]">
                Período de referência: {instrumento.periodoReferencia}
              </p>
            )}
          </section>

          <section className="mt-5 space-y-5">
            {instrumento.itens.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#E4EBE5] bg-white p-5"
              >
                <h2 className="font-bold leading-6 text-[#263D30]">
                  {index + 1}. {item.enunciado}
                </h2>

                <div className="mt-4 space-y-2">
                  {item.alternativas.map((alternativa) => {
                    const selecionada =
                      respostas[index] === alternativa.valor;

                    return (
                      <button
                        key={alternativa.valor}
                        type="button"
                        onClick={() =>
                          selecionarResposta(index, alternativa.valor)
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
            ))}
          </section>

          {!mostrarDevolutiva && (
            <button
              type="button"
              onClick={concluirTriagem}
              disabled={!respostasCompletas}
              className="mt-6 w-full rounded-xl bg-[#16834E] px-5 py-3 font-semibold text-white transition hover:bg-[#116B3E] disabled:cursor-not-allowed disabled:bg-[#AAB9AE]"
            >
              Ver minha devolutiva
            </button>
          )}

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
                  {faixaResultado?.classificacao ??
                    "Resultado não classificado"}
                </h2>

                <p className="mt-2 text-sm font-semibold text-[#46554B]">
                  Pontuação: {pontuacao} de{" "}
                  {instrumento.pontuacaoMaxima}
                </p>
              </div>

              <p className="text-sm leading-7 text-[#46554B]">
                {faixaResultado?.descricao ??
                  "Não foi possível encontrar uma faixa de interpretação para esta pontuação."}
              </p>

              {instrumento.mensagemAlerta &&
                instrumento.limiteAlerta !== undefined &&
                pontuacao >= instrumento.limiteAlerta && (
                  <div className="rounded-xl border border-[#E9C9A8] bg-[#FFF8EF] p-4">
                    <p className="text-sm leading-7 text-[#694F36]">
                      {instrumento.mensagemAlerta}
                    </p>
                  </div>
                )}

              <div className="border-t border-[#D5E7D9] pt-4">
                <h3 className="font-bold text-[#263D30]">
                  Sua meta mínima viável para esta semana
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#59665D]">
                  Escolha uma ação simples e possível de realizar na sua
                  rotina. Ela não precisa ser perfeita nem exigir grandes
                  mudanças.
                </p>

                <textarea
                  value={metaSemanal}
                  onChange={(event) => setMetaSemanal(event.target.value)}
                  placeholder="Ex.: fazer 5 minutos de respiração consciente por dia..."
                  rows={3}
                  className="mt-3 w-full resize-y rounded-xl border border-[#D5DED7] bg-white p-3 text-sm text-[#263D30] outline-none transition placeholder:text-[#929D94] focus:border-[#16834E]"
                />
              </div>

              <p className="border-t border-[#D5E7D9] pt-4 text-sm italic leading-7 text-[#59665D]">
                O escore é um retrato do momento, não um veredito — e nunca
                um motivo de culpa.
              </p>
            </section>
          )}
        </>
      )}

      {!instrumento && triagem.perguntas && (
        <section className="mt-5 space-y-5">
          {triagem.perguntas.map((pergunta, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#E4EBE5] bg-white p-5"
            >
              <h2 className="font-bold text-[#263D30]">
                {index + 1}. {pergunta}
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from({ length: 11 }, (_, valor) => (
                  <button
                    key={valor}
                    type="button"
                    onClick={() => selecionarResposta(index, valor)}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold transition ${
                      respostas[index] === valor
                        ? "border-[#16834E] bg-[#16834E] text-white"
                        : "border-[#E4EBE5] bg-white text-[#46554B] hover:border-[#16834E]"
                    }`}
                    aria-pressed={respostas[index] === valor}
                  >
                    {valor}
                  </button>
                ))}
              </div>

              <div className="mt-2 flex justify-between text-xs text-[#59665D]">
                <span>0 — Nada</span>
                <span>10 — Totalmente</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {!instrumento && !triagem.perguntas && (
        <section className="mt-5 rounded-2xl border border-[#E4EBE5] bg-[#F5F8F5] p-5">
          <h2 className="font-bold text-[#263D30]">
            Sobre esta etapa
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#59665D]">
            O instrumento com as perguntas da triagem ainda não foi
            disponibilizado no material recebido. Por isso, esta etapa
            apresenta o conteúdo introdutório, sem simular respostas ou
            resultados.
          </p>
        </section>
      )}

      {totalXP > 0 && (
        <section className="mt-5 rounded-2xl border border-[#E4EBE5] bg-white p-5">
          <h2 className="font-bold text-[#263D30]">
            Recompensas da etapa
          </h2>

          <div className="mt-4 space-y-3 text-sm text-[#46554B]">
            {triagem.recompensaConclusaoXP > 0 && (
              <div className="flex items-center justify-between">
                <span>Triagem concluída</span>
                <strong className="text-[#16834E]">
                  +{triagem.recompensaConclusaoXP} XP
                </strong>
              </div>
            )}

            {triagem.recompensaDevolutivaXP > 0 && (
              <div className="flex items-center justify-between">
                <span>Visualização da devolutiva</span>
                <strong className="text-[#16834E]">
                  +{triagem.recompensaDevolutivaXP} XP
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
