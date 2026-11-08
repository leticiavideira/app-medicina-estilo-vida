
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { pilares } from "@/data/pilares";

type PilarPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PilarPage({ params }: PilarPageProps) {
  const { slug } = await params;

  const pilar = pilares.find((item) => item.slug === slug);

  if (!pilar) {
    notFound();
  }

  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col">
        <Link
          href="/menu"
          className="mb-6 self-start text-sm font-semibold text-primary"
        >
          ← Voltar ao início
        </Link>

        <div className="flex flex-col items-center py-8 text-center">
          <div
            className="mb-5 flex h-24 w-24 items-center justify-center rounded-full text-5xl"
            style={{ backgroundColor: pilar.fundo }}
          >
            {pilar.icone}
          </div>

          <h1
            className="text-2xl font-bold"
            style={{ color: pilar.cor }}
          >
            {pilar.nome}
          </h1>

          <div
            className="mt-4 h-1 w-16 rounded-full"
            style={{ backgroundColor: pilar.cor }}
          />
        </div>

        <div className="rounded-2xl border border-medium-gray/60 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-primary-dark">
            Conheça este pilar
          </h2>

          <p className="text-base leading-relaxed text-text-gray">
            {pilar.descricao}
          </p>
        </div>

        <div className="mt-6 rounded-xl p-4" style={{ backgroundColor: pilar.fundo }}>
          <p className="text-sm leading-relaxed text-primary-dark">
            Explore os conteúdos educativos deste pilar nos módulos do programa.
          </p>

          <Link
            href="/modulos"
            className="mt-3 inline-block font-semibold text-primary"
          >
            Acessar módulos →
          </Link>
        </div>

        <BottomNavigation />
      </section>
    </Container>
  );
}
