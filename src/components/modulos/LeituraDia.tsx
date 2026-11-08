import Link from "next/link";
import type { ConteudoDia } from "@/types/conteudoModulo";
import AtividadeDia from "@/components/modulos/AtividadeDia";

type LeituraDiaProps = {
  dia: ConteudoDia;
  slug: string;
};

export default function LeituraDia({ dia, slug }: LeituraDiaProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-[#F7FAF7] px-5 pb-8 pt-6">
      <Link
        href={`/modulos/${slug}`}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#176B48]"
      >
        <span aria-hidden="true">←</span>
        Voltar ao módulo
      </Link>

      <div className="mb-5">
        <span className="inline-flex rounded-full bg-[#E5F2EA] px-3 py-1.5 text-xs font-semibold text-[#176B48]">
          Dia {dia.numero}
        </span>

        <h1 className="mt-4 text-2xl font-bold leading-tight text-[#153D2D]">
          {dia.titulo}
        </h1>

        <div className="mt-4 flex items-center gap-2 text-sm text-[#65756C]">
          <span aria-hidden="true">📖</span>
          <span>Leitura</span>
          <span className="ml-auto font-semibold text-[#16834E]">
            +{dia.recompensaLeituraXP} XP
          </span>
        </div>
      </div>

    <div className="max-h-[55vh] space-y-5 overflow-y-auto">

        <article className="rounded-2xl border border-[#E4EBE5] bg-white p-5 shadow-sm">
            <div className="space-y-4 text-sm leading-7 text-[#344B3D]">
            {dia.paragrafos.map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
            ))}
            </div>

            {dia.fraseDestaque && (
            <div className="mt-6 rounded-xl border-l-4 border-[#16834E] bg-[#EAF4ED] p-4">
                <p className="text-sm font-semibold italic leading-relaxed text-[#176B48]">
                {dia.fraseDestaque}
                </p>
            </div>
            )}
        </article>

        {dia.atividade && (
            <AtividadeDia atividade={dia.atividade} />
        )}

    </div>
    </main>
  );
}