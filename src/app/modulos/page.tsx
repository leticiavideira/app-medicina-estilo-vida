import Link from "next/link";

import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { modulos } from "@/data/modulos";

export default function Modulos() {
  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-primary-dark">
            Meus Módulos
          </h1>

          <p className="mt-2 text-sm text-text-gray">
            Explore os módulos e avance em sua jornada de aprendizagem.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {modulos.map((modulo) => (
            <Link
              key={modulo.slug}
              href={`/modulos/${modulo.slug}`}
              className="flex items-center gap-4 rounded-2xl border border-medium-gray/60 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-light-green text-3xl">
                📘
              </div>

              <div>
                <h2 className="font-bold text-primary-dark">
                  {modulo.nome}
                </h2>

                <p className="mt-1 text-sm text-text-gray">
                  Semana {modulo.semana}
                </p>
              </div>

              <span className="ml-auto text-xl text-primary">
                →
              </span>
            </Link>
          ))}
        </div>

        <BottomNavigation />
      </section>
    </Container>
  );
}
