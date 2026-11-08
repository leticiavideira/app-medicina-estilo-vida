import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Link from "next/link";
import { pilares } from "@/data/pilares";

export default function Menu() {
  return (
    <Container>
      <section className="mx-auto flex min-h-[90vh] w-full max-w-md flex-col pb-6">

        {/* CABEÇALHO */}
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            
          <Link
            href="/perfil"
            aria-label="Acessar meu perfil"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-light-green text-2xl transition-transform hover:scale-105"
          >
            👤
          </Link>


            <div>
              <h1 className="text-xl font-bold text-primary-dark">
                Olá, participante!
              </h1>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-xl">🌿</span>
                <div>
                  <p className="text-sm font-bold leading-tight text-primary-dark">
                    Educar para Prevenir
                  </p>
                  <p className="text-xs text-text-gray">
                    Medicina do Estilo de Vida
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <Link
            href="/notificacoes"
            aria-label="Abrir notificações"
            className="relative flex h-11 w-11 items-center justify-center rounded-full text-primary-dark transition-colors hover:bg-light-green"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
              <path d="M10 21h4" />
            </svg>

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
          </Link>

        </header>

        {/* PROGRESSO DA JORNADA */}
        <section className="mb-8 rounded-2xl bg-gradient-to-r from-[#087A43] to-[#65B83D] p-5 text-white shadow-md">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <h2 className="text-xl font-bold">
                Sua jornada
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-white/90">
                A cada escolha saudável, você transforma sua vida.
              </p>
            </div>

            <div
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full"
              style={{
                background:
                  "conic-gradient(white 60%, rgba(255,255,255,0.25) 60%)",
              }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#258D4E]">
                <span className="text-2xl font-bold">60%</span>
              </div>
            </div>

            <div className="border-l border-white/40 pl-4">
              <p className="text-sm">Semana</p>
              <p className="text-2xl font-bold">3 de 12</p>
            </div>
          </div>
        </section>

        {/* OS SEIS PILARES */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-bold text-primary-dark">
            Os 6 Pilares da Medicina do Estilo de Vida
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {pilares.map((pilar) => (
              <Link
                key={pilar.slug}
                href={`/pilares/${pilar.slug}`}
                className="flex min-h-20 items-center gap-3 rounded-xl border border-medium-gray/60 bg-white p-3 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl"
                  style={{ backgroundColor: pilar.fundo }}
                >
                  {pilar.icone}
                </div>

                <span
                  className="text-sm font-semibold"
                  style={{ color: "#073124" }}
                >
                  {pilar.nome}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* PRÓXIMO MÓDULO */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-bold text-primary-dark">
            Próximo módulo
          </h2>

          <Link
            href="/modulos"
            className="block rounded-2xl border border-medium-gray/60 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-light-green text-4xl">
                🥑

                <span className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  5
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs text-primary">
                  Módulo 5
                </p>

                <h3 className="mt-1 font-bold text-primary-dark">
                  Alimentação na prática
                </h3>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-light-gray">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: "40%" }}
                  />
                </div>

                <p className="mt-1 text-xs text-text-gray">
                  40% concluído
                </p>
              </div>

              <span className="shrink-0 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white">
                Continuar ›
              </span>
            </div>
          </Link>
        </section>

        <BottomNavigation />

      </section>
    </Container>
  );
}
