"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ConteudoTermos from "@/components/termos/ConteudoTermos";

export default function Termos() {
  const router = useRouter();
  const [aceitou, setAceitou] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");

  function handleAceitar() {
    if (!aceitou) {
      setMensagemErro(
        "É obrigatório marcar a opção de concordância para continuar."
      );
      return;
    }

    router.push("/anamnese");
  }

  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col">
        <header className="mb-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="mb-4 text-2xl text-primary-dark"
            aria-label="Voltar"
          >
            ←
          </button>

          <h1 className="text-2xl font-bold leading-tight text-primary-dark">
            Termos de Uso e Política de Privacidade
          </h1>

          <p className="mt-2 text-text-gray">
            Leia atentamente antes de continuar
          </p>
        </header>

        <ConteudoTermos />

        <label className="mt-5 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={aceitou}
            onChange={(event) => {
              setAceitou(event.target.checked);
              setMensagemErro("");
            }}
            className="mt-1 h-5 w-5 accent-primary"
          />

          <span className="text-sm text-foreground">
            Li e concordo com os Termos de Uso e a Política de Privacidade
          </span>
        </label>

        {mensagemErro && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {mensagemErro}
          </p>
        )}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button onClick={handleAceitar}>
            Aceitar e Continuar
          </Button>

          <Button
            variant="secondary"
            onClick={() => router.push("/")}
          >
            Não Aceito
          </Button>
        </div>
      </section>
    </Container>
  );
}
