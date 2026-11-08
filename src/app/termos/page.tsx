"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

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

        {/* Cabeçalho */}
        <header className="mb-6">
          <button
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

        {/* Conteúdo dos termos */}
        <div className="max-h-[55vh] overflow-y-auto rounded-xl border border-medium-gray bg-white p-4">

          <section className="mb-5">
            <h2 className="mb-2 font-bold text-primary-dark">
              1. Apresentação
            </h2>

            <p className="text-sm leading-relaxed text-foreground">
              O aplicativo Educar para Prevenir (Medicina do Estilo de Vida)
              é uma iniciativa de pesquisa científica desenvolvida por
              profissionais e instituições da área da saúde. Ao utilizar
              este aplicativo, você está sendo convidado(a) a participar
              voluntariamente de um programa de educação em saúde e
              pesquisa científica. Este documento apresenta os Termos de
              Uso e a Política de Privacidade que regem o uso do aplicativo
              e o tratamento dos seus dados pessoais. Leia atentamente
              antes de concordar.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="mb-2 font-bold text-primary-dark">
              2. Pesquisadores responsáveis
            </h2>

            <p className="text-sm leading-relaxed text-foreground">
              Este programa de pesquisa é conduzido por pesquisadores
              qualificados na área da Medicina do Estilo de Vida,
              vinculados a instituições de ensino e pesquisa. As
              informações de contato dos pesquisadores responsáveis
              estão disponíveis no aplicativo, na seção “Sobre o Estudo”.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="mb-2 font-bold text-primary-dark">
              3. Objetivos do programa
            </h2>

            <p className="text-sm leading-relaxed text-foreground">
              O Educar para Prevenir tem como objetivos promover educação
              em saúde baseada em evidências, incentivar hábitos de vida
              saudáveis e avaliar o impacto dessas intervenções na saúde
              e qualidade de vida dos participantes. Os dados coletados
              serão utilizados exclusivamente para fins de pesquisa
              científica e melhoria do programa.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-bold text-primary-dark">
              4. Dados coletados
            </h2>

            <p className="text-sm leading-relaxed text-foreground">
              Para viabilizar sua participação, poderemos coletar dados
              pessoais e informações relacionadas à sua saúde e estilo
              de vida, tais como: dados de cadastro (nome, e-mail, data
              de nascimento, sexo), medidas antropométricas, hábitos
              alimentares, nível de atividade física, sono, saúde mental,
              exames laboratoriais e respostas a questionários. Todos
              os dados são coletados de forma direta por você no aplicativo.
            </p>
          </section>

        </div>

        {/* Consentimento */}
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

        {/* Botões */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={handleAceitar}
          >
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
