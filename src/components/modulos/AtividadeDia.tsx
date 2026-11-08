"use client";

import { useState } from "react";
import type { Atividade } from "@/types/conteudoModulo";

type AtividadeDiaProps = {
  atividade: Atividade;
};

export default function AtividadeDia({
  atividade,
}: AtividadeDiaProps) {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<number | null>(
    null
  );
  const [confirmada, setConfirmada] = useState(false);

  const opcao = atividade.opcoes.find(
    (item) => item.valor === opcaoSelecionada
  );

  return (
    <section className="rounded-2xl border border-[#E4EBE5] bg-white p-5 shadow-sm">
      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#16834E]">
          Reflexão
        </span>

        <h2 className="mt-2 text-lg font-bold text-[#153D2D]">
          {atividade.titulo}
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#344B3D]">
          {atividade.pergunta}
        </p>

        {atividade.instrucoes && (
          <p className="mt-2 text-xs leading-5 text-[#65756C]">
            {atividade.instrucoes}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {atividade.opcoes.map((item) => {
          const selecionada = opcaoSelecionada === item.valor;

          return (
            <button
              key={item.valor}
              type="button"
              aria-pressed={selecionada}
              disabled={confirmada}
              onClick={() => setOpcaoSelecionada(item.valor)}
              className={`w-full rounded-xl border p-4 text-left text-sm leading-6 transition ${
                selecionada
                  ? "border-[#16834E] bg-[#EAF4ED] text-[#176B48]"
                  : "border-[#E4EBE5] bg-white text-[#344B3D] hover:border-[#A8CBB4]"
              } ${
                confirmada ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    selecionada
                      ? "border-[#16834E] bg-[#16834E]"
                      : "border-[#AAB8AE]"
                  }`}
                >
                  {selecionada && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  )}
                </span>

                <span>{item.texto}</span>
              </span>
            </button>
          );
        })}
      </div>

      {!confirmada ? (
        <button
          type="button"
          disabled={opcaoSelecionada === null}
          onClick={() => setConfirmada(true)}
          className="mt-5 w-full rounded-xl bg-[#16834E] py-3.5 text-sm font-bold text-white transition hover:bg-[#126B40] disabled:cursor-not-allowed disabled:bg-[#AAB8AE]"
        >
          Confirmar resposta
        </button>
      ) : (
        <div className="mt-5 rounded-xl border border-[#B8DCC4] bg-[#EAF4ED] p-4">
          <p className="text-sm font-bold text-[#176B48]">
            Resposta registrada!
          </p>

          <p className="mt-2 text-sm leading-6 text-[#344B3D]">
            {opcao?.texto}
          </p>

          <p className="mt-3 text-sm font-bold text-[#16834E]">
            +{atividade.recompensaXP} XP
          </p>
        </div>
      )}
    </section>
  );
}