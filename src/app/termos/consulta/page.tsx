
import Link from "next/link";

import Container from "@/components/layout/Container";
import ConteudoTermos from "@/components/termos/ConteudoTermos";

export default function ConsultaTermos() {
  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col">
        <Link
          href="/perfil"
          className="mb-6 self-start text-sm font-semibold text-primary"
        >
          ← Voltar ao perfil
        </Link>

        <header className="mb-6">
          <h1 className="text-2xl font-bold leading-tight text-primary-dark">
            Termos de Uso e Política de Privacidade
          </h1>

          <p className="mt-2 text-sm text-text-gray">
            Consulte os termos e as condições do aplicativo.
          </p>
        </header>

        <ConteudoTermos />

        <p className="mt-4 text-xs leading-relaxed text-text-gray">
          Esta página é destinada somente à consulta. Ela não altera
          seu consentimento nem interfere no seu cadastro.
        </p>
      </section>
    </Container>
  );
}
