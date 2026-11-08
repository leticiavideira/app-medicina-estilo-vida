import Link from "next/link";
import type { ModuloResumo } from "@/data/modulos";

type ApresentacaoModuloProps = {
  modulo: ModuloResumo;
};

const pilares = [
  "Alimentação saudável",
  "Atividade física",
  "Sono restaurador",
  "Manejo do estresse",
  "Prevenção de adições",
  "Conexões sociais",
];

const icones = ["🥗", "🏃", "🌙", "🧘", "🌱", "🤝"];

export default function ApresentacaoModulo({
  modulo,
}: ApresentacaoModuloProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-[#F7FAF7] px-5 pb-8 pt-6">
      {/* Identificação do módulo */}
      <div className="mb-6">
        <Link
          href="/modulos"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#176B48]"
        >
          <span aria-hidden="true">←</span>
          Voltar aos módulos
        </Link>

        <div className="inline-flex items-center gap-2 rounded-full bg-[#E5F2EA] px-3 py-1.5 text-xs font-semibold text-[#176B48]">
          <span>📖</span>
          Módulo {modulo.numero}
        </div>
      </div>

      {/* Título */}
      <section className="mb-6">
        <h1 className="text-[28px] font-bold leading-tight tracking-tight text-[#153D2D]">
          {modulo.nome}
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-[#65756C]">
          Conheça os seis pilares da Medicina do Estilo de Vida
          e descubra como pequenas escolhas podem contribuir
          para uma rotina mais saudável.
        </p>
      </section>

      {/* Card dos pilares */}
      <section className="rounded-2xl border border-[#E4EBE5] bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h2 className="font-bold text-[#153D2D]">
            Os seis pilares
          </h2>
        </div>

        <div className="divide-y divide-[#EDF1ED]">
          {pilares.map((pilar, index) => (
            <div
              key={pilar}
              className="flex items-center gap-3 py-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF4ED] text-lg">
                {icones[index]}
              </div>

              <span className="text-sm font-medium text-[#344B3D]">
                {pilar}
              </span>

              <span className="ml-auto text-xs text-[#A1B2A6]">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Etapas */}
      <section className="mt-6">
        <h2 className="mb-4 text-sm font-bold text-[#153D2D]">
          Caminho do módulo
        </h2>

        <div className="flex items-center justify-between">
          {[
            { numero: 1, nome: "Conteúdo" },
            { numero: 2, nome: "Vídeo" },
            { numero: 3, nome: "Quiz" },
            { numero: 4, nome: "Triagem" },
          ].map((etapa, index) => (
            <div
              key={etapa.numero}
              className="flex flex-1 flex-col items-center"
            >
              <div className="flex w-full items-center">
                {index > 0 && (
                  <div className="h-0.5 flex-1 bg-[#DCE7DF]" />
                )}

                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    index === 0
                      ? "bg-[#16834E] text-white"
                      : "border-2 border-[#DCE7DF] bg-white text-[#82968A]"
                  }`}
                >
                  {etapa.numero}
                </div>

                {index < 3 && (
                  <div className="h-0.5 flex-1 bg-[#DCE7DF]" />
                )}
              </div>

              <span
                className={`mt-2 text-[10px] ${
                  index === 0
                    ? "font-bold text-[#16834E]"
                    : "text-[#82968A]"
                }`}
              >
                {etapa.nome}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Botão */}
      <div className="mt-auto pt-8">
        <Link
            href={`/modulos/${modulo.slug}/dia/1`}
            className="block w-full rounded-xl bg-[#16834E] py-4 text-center text-sm font-bold text-white transition hover:bg-[#126B40]"
        >
            Começar módulo
        </Link>

        <p className="mt-3 text-center text-xs text-[#82968A]">
          Prepare-se para conhecer os seis pilares da saúde.
        </p>
      </div>
    </main>
  );
}
