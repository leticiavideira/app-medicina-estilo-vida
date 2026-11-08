
import Link from "next/link";

import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default function Perfil() {
  return (
    <Container>
      <section className="mx-auto flex min-h-[80vh] w-full max-w-md flex-col pb-6">

        {/* CABEÇALHO */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-primary-dark">
            Meu Perfil
          </h1>

          <p className="mt-2 text-sm text-text-gray">
            Consulte suas informações e acompanhe sua jornada.
          </p>
        </header>

        {/* DADOS DO PARTICIPANTE */}
        <section className="mb-6 rounded-2xl border border-medium-gray/60 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-light-green text-4xl">
              👤
            </div>

            <div className="min-w-0">
              <h2 className="text-lg font-bold text-primary-dark">
                Participante
              </h2>

              <p className="mt-1 text-sm text-text-gray">
                Meu perfil
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-medium-gray/60 pt-4">
            <h3 className="mb-4 font-bold text-primary-dark">
              Meus dados
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between gap-4">
                <span className="text-sm text-text-gray">Nome</span>
                <span className="text-sm font-medium text-primary-dark">
                  Participante
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-sm text-text-gray">Telefone</span>
                <span className="text-sm font-medium text-primary-dark">
                  Não informado
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-sm text-text-gray">Idade</span>
                <span className="text-sm font-medium text-primary-dark">
                  Não informada
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* MEU PROGRESSO */}
        <section className="mb-6 rounded-2xl border border-medium-gray/60 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-primary-dark">
            Meu progresso
          </h2>

          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-text-gray">
              Jornada concluída
            </span>

            <span className="text-lg font-bold text-primary">
              60%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-light-gray">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: "60%" }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-text-gray">
              Semana atual
            </span>

            <span className="font-semibold text-primary-dark">
              3 de 12
            </span>
          </div>

          <Link
            href="/modulos"
            className="mt-5 block rounded-xl bg-light-green py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-[#D8EEDD]"
          >
            Ver meus módulos →
          </Link>
        </section>

        
        {/* CONFIGURAÇÕES */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-bold text-primary-dark">
            Configurações
          </h2>

          <div className="rounded-2xl border border-medium-gray/60 bg-white p-4 shadow-sm">
            <p className="text-sm leading-relaxed text-text-gray">
              Novas opções de configuração estarão disponíveis em breve.
            </p>
          </div>
        </section>


        <BottomNavigation />

      </section>
    </Container>
  );
}
