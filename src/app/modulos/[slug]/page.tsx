
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { modulos } from "@/data/modulos";

type ModuloPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ModuloPage({
  params,
}: ModuloPageProps) {
  const { slug } = await params;

  const modulo = modulos.find(
    (item) => item.slug === slug
  );

  if (!modulo) {
    notFound();
  }

  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col">
        <Link
          href="/modulos"
          className="mb-6 self-start text-sm font-semibold text-primary"
        >
          ← Voltar aos módulos
        </Link>

        <div className="flex flex-col items-center py-10 text-center">
          <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-light-green text-5xl">
            📘
          </div>

          <h1 className="text-2xl font-bold text-primary-dark">
            {modulo.nome}
          </h1>

          <p className="mt-2 text-sm text-text-gray">
            Semana {modulo.semana}
          </p>
        </div>

        <div className="rounded-2xl border border-medium-gray/60 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-primary-dark">
            Sobre este módulo
          </h2>

          <p className="text-sm leading-relaxed text-text-gray">
            O conteúdo deste módulo será disponibilizado aqui.
          </p>
        </div>

        <BottomNavigation />
      </section>
    </Container>
  );
}
