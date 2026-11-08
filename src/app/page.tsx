"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cpf, setCpf] = useState("");
  const [mensagem, setMensagem] = useState("");
  const router = useRouter();

  function formatarCPF(valor: string) {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);

    return numeros
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  function handleCPFChange(valor: string) {
    setCpf(formatarCPF(valor));
    setMensagem("");
  }

  function handleContinuar() {
  if (cpf.replace(/\D/g, "").length !== 11) {
    setMensagem("Digite um CPF válido.");
    return;
  }

  router.push("/termos");
}

  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">

        {/* Identidade do programa */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-primary-dark">
            Educar para Prevenir
          </h1>

          <p className="mt-2 text-lg text-secondary">
            Medicina do Estilo de Vida
          </p>
        </header>

        {/* Boas-vindas */}
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold text-primary-dark">
            Bem-vindo(a)!
          </h2>

          <p className="mt-3 text-base leading-relaxed text-text-gray">
            Vamos começar sua jornada por uma vida mais saudável
          </p>

          {/* Campo CPF */}
          <div className="mt-8 text-left">
            <label
              htmlFor="cpf"
              className="mb-2 block font-semibold text-primary-dark"
            >
              CPF
            </label>

            <input
              id="cpf"
              type="text"
              inputMode="numeric"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(event) => handleCPFChange(event.target.value)}
              maxLength={14}
              className="w-full rounded-xl border-2 border-primary bg-white px-4 py-4 text-base outline-none focus:border-primary-dark"
            />

            {mensagem && (
              <p className="mt-2 text-sm text-text-gray">
                {mensagem}
              </p>
            )}
          </div>

          {/* Continuar */}
          <div className="mt-6">
            <Button
              onClick={handleContinuar}
              disabled={cpf.replace(/\D/g, "").length !== 11}
            >
              Continuar
            </Button>
          </div>
        </div>

        {/* Rodapé */}
        <footer className="mt-auto pt-16 text-sm text-secondary">
          Programa de Pós-Graduação em Ciências da Saúde – UEL
        </footer>

      </section>
    </Container>
  );
}