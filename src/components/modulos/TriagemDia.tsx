import Link from "next/link";
import type { TriagemModulo } from "@/types/conteudoModulo";

type TriagemDiaProps = {
  triagem: TriagemModulo;
  slug: string;
};

export default function TriagemDia({ triagem, slug }: TriagemDiaProps) {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-2xl flex-col px-5 py-6">
      <Link
        href={`/modulos/${slug}/dia/6`}
        className="mb-6 text-sm font-medium text-[#16834E] hover:underline"
      >
        ← Voltar para o quiz
      </Link>

      <div className="mb-5">
        <span className="rounded-full bg-[#E8F4EC] px-3 py-1 text-xs font-bold text-[#16834E]">
          DIA 7 · TRIAGEM
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

      <section className="mt-5 rounded-2xl border border-[#E4EBE5] bg-white p-5">
        <h2 className="font-bold text-[#263D30]">
          Recompensas da etapa
        </h2>

        <div className="mt-4 space-y-3 text-sm text-[#46554B]">
          <div className="flex items-center justify-between">
            <span>Triagem concluída</span>
            <strong className="text-[#16834E]">
              +{triagem.recompensaConclusaoXP} XP
            </strong>
          </div>

          <div className="flex items-center justify-between">
            <span>Visualização da devolutiva</span>
            <strong className="text-[#16834E]">
              +{triagem.recompensaDevolutivaXP} XP
            </strong>
          </div>
        </div>

        <p className="mt-4 border-t border-[#E4EBE5] pt-3 text-right text-xs font-semibold text-[#59665D]">
          Total possível:{" "}
          {triagem.recompensaConclusaoXP +
            triagem.recompensaDevolutivaXP}{" "}
          XP
        </p>
      </section>
    </main>
  );
}