import Link from "next/link";
import type { VideoModulo } from "@/types/conteudoModulo";

type VideoDiaProps = {
  video: VideoModulo;
  slug: string;
};

export default function VideoDia({ video, slug }: VideoDiaProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-[#F7FAF7] px-5 pb-8 pt-6">
      <Link
        href={`/modulos/${slug}/dia/4`}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#176B48]"
      >
        <span aria-hidden="true">←</span>
        Voltar ao Dia 4
      </Link>

      <div className="mb-5">
        <span className="inline-flex rounded-full bg-[#E5F2EA] px-3 py-1.5 text-xs font-semibold text-[#176B48]">
          Dia 5
        </span>

        <h1 className="mt-4 text-2xl font-bold leading-tight text-[#153D2D]">
          {video.titulo}
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#65756C]">
          Conheça novamente os seis pilares da Medicina do Estilo de Vida.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-5">
        <div className="flex aspect-video items-center justify-center rounded-2xl border border-[#D8E5DC] bg-[#EAF4ED]">
          <div className="text-center">
            <span className="text-4xl" aria-hidden="true">
              ▶
            </span>
            <p className="mt-3 text-sm font-semibold text-[#176B48]">
              Vídeo educativo
            </p>
            <p className="mt-1 text-xs text-[#65756C]">
              Material audiovisual ainda não disponibilizado
            </p>
          </div>
        </div>

        <section className="rounded-2xl border border-[#E4EBE5] bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-base font-bold text-[#153D2D]">
            Sobre o vídeo
          </h2>

          <div className="space-y-4 text-sm leading-7 text-[#344B3D]">
            {video.descricao.map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-[#EAF4ED] p-4">
          <p className="text-sm font-semibold text-[#176B48]">
            Durante o vídeo, observe:
          </p>
          <p className="mt-2 text-sm leading-6 text-[#344B3D]">
            Como os seis pilares se relacionam e quais deles já fazem parte
            dos seus hábitos cotidianos.
          </p>
        </section>
      </div>

      <Link
        href={`/modulos/${slug}/dia/6`}
        className="mt-6 block w-full rounded-xl bg-[#16834E] py-4 text-center text-sm font-bold text-white transition hover:bg-[#126B40]"
      >
        Ir para o quiz
      </Link>
    </main>
  );
}