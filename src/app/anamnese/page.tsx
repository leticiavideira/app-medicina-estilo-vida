"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const etapas = [
  {
    titulo: "Identificação",
    descricao: "Precisamos de algumas informações para iniciar.",
  },
  {
    titulo: "Alimentação",
    descricao: "Vamos conhecer um pouco sobre seus hábitos alimentares.",
    pergunta: "Com que frequência você consome frutas e verduras?",
    opcoes: [
      "Todos os dias",
      "Algumas vezes por semana",
      "Raramente",
      "Prefiro não responder",
    ],
  },
  {
    titulo: "Atividade física",
    descricao: "Agora, queremos conhecer um pouco sobre sua rotina.",
    pergunta: "Você costuma praticar atividades físicas?",
    opcoes: [
      "Sim, frequentemente",
      "Às vezes",
      "Raramente",
      "Não pratico",
      "Prefiro não responder",
    ],
  },
  {
    titulo: "Sono e bem-estar",
    descricao: "Esta é mais uma etapa sobre seus hábitos.",
    pergunta: "Como você avalia a qualidade do seu sono?",
    opcoes: [
      "Muito boa",
      "Boa",
      "Regular",
      "Ruim",
      "Prefiro não responder",
    ],
  },
  {
    titulo: "Finalização",
    descricao: "Confira suas informações antes de concluir.",
  },
];

export default function Anamnese() {
  const router = useRouter();

  const [etapaAtual, setEtapaAtual] = useState(1);

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");

  const [respostas, setRespostas] = useState<Record<number, string>>({});
  const [mensagemErro, setMensagemErro] = useState("");

  function formatarTelefone(valor: string) {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);

    if (numeros.length <= 10) {
      return numeros
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }

    return numeros
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }

  function validarEtapa() {
    if (etapaAtual === 1) {
      const telefoneNumeros = telefone.replace(/\D/g, "");
      const idadeNumero = Number(idade);

      if (
        !nome.trim() ||
        telefoneNumeros.length < 10 ||
        !idade ||
        idadeNumero <= 0 ||
        idadeNumero > 120 ||
        !sexo
      ) {
        setMensagemErro("Preencha todos os campos corretamente.");
        return false;
      }
    }

    if (
      etapaAtual >= 2 &&
      etapaAtual <= 4 &&
      !respostas[etapaAtual]
    ) {
      setMensagemErro("Selecione uma opção para continuar.");
      return false;
    }

    setMensagemErro("");
    return true;
  }

  function handleProximo() {
    if (!validarEtapa()) return;

    if (etapaAtual < 5) {
      setEtapaAtual(etapaAtual + 1);
    } else {
      router.push("/menu");
    }
  }

  function handleVoltar() {
    if (etapaAtual > 1) {
      setEtapaAtual(etapaAtual - 1);
      setMensagemErro("");
    } else {
      router.back();
    }
  }

  function selecionarResposta(resposta: string) {
    setRespostas((respostasAtuais) => ({
      ...respostasAtuais,
      [etapaAtual]: resposta,
    }));

    setMensagemErro("");
  }

  const progresso = (etapaAtual / 5) * 100;

  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col">
        <button
          onClick={handleVoltar}
          className="mb-6 self-start text-sm font-semibold text-primary"
        >
          ← Voltar
        </button>

        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm text-text-gray">
            <span>
              Seção {etapaAtual} de 5 — {etapas[etapaAtual - 1].titulo}
            </span>
            <span>{Math.round(progresso)}%</span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-light-gray">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary-dark">
            {etapas[etapaAtual - 1].titulo}
          </h1>

          <p className="mt-2 text-text-gray">
            {etapas[etapaAtual - 1].descricao}
          </p>
        </div>

        {/* ETAPA 1: IDENTIFICAÇÃO */}
        {etapaAtual === 1 && (
          <div className="space-y-5">
            <div>
              <label className="mb-2 block font-semibold text-primary-dark">
                Nome completo
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome completo"
                className="w-full rounded-xl border border-medium-gray px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-primary-dark">
                Telefone
              </label>
              <input
                type="tel"
                value={telefone}
                onChange={(e) =>
                  setTelefone(formatarTelefone(e.target.value))
                }
                placeholder="(00) 00000-0000"
                className="w-full rounded-xl border border-medium-gray px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-primary-dark">
                Idade
              </label>
              <input
                type="number"
                min="1"
                max="120"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                placeholder="Digite sua idade"
                className="w-full rounded-xl border border-medium-gray px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-primary-dark">
                Sexo
              </label>

              <div className="grid grid-cols-1 gap-3">
                {[
                  "Feminino",
                  "Masculino",
                  "Outro / Não me identifico com essas opções",
                ].map((opcao) => (
                  <button
                    key={opcao}
                    type="button"
                    onClick={() => setSexo(opcao)}
                    className={`rounded-xl border px-4 py-3 text-left transition-colors ${
                      sexo === opcao
                        ? "border-primary bg-light-green text-primary-dark"
                        : "border-medium-gray bg-white"
                    }`}
                  >
                    {opcao}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ETAPAS 2, 3 E 4: PERGUNTAS DEMONSTRATIVAS */}
        {etapaAtual >= 2 && etapaAtual <= 4 && (
          <div>
            <p className="mb-4 font-semibold text-primary-dark">
              {etapas[etapaAtual - 1].pergunta}
            </p>

            <div className="space-y-3">
              {etapas[etapaAtual - 1].opcoes?.map((opcao) => (
                <button
                  key={opcao}
                  type="button"
                  onClick={() => selecionarResposta(opcao)}
                  className={`w-full rounded-xl border px-4 py-4 text-left transition-colors ${
                    respostas[etapaAtual] === opcao
                      ? "border-primary bg-light-green text-primary-dark"
                      : "border-medium-gray bg-white"
                  }`}
                >
                  {opcao}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 5: REVISÃO */}
        {etapaAtual === 5 && (
          <div className="space-y-5">
            <div className="rounded-xl bg-light-green p-4">
              <h2 className="mb-3 font-bold text-primary-dark">
                Identificação
              </h2>
              <p><strong>Nome:</strong> {nome}</p>
              <p><strong>Telefone:</strong> {telefone}</p>
              <p><strong>Idade:</strong> {idade}</p>
              <p><strong>Sexo:</strong> {sexo}</p>
            </div>

            {[2, 3, 4].map((numero) => (
              <div
                key={numero}
                className="rounded-xl border border-medium-gray p-4"
              >
                <h2 className="mb-2 font-bold text-primary-dark">
                  {etapas[numero - 1].titulo}
                </h2>
                <p className="text-text-gray">
                  {respostas[numero]}
                </p>
              </div>
            ))}

            <p className="text-sm text-text-gray">
              Confira suas respostas. Ao clicar em concluir, você será
              direcionado(a) ao menu principal.
            </p>
          </div>
        )}

        {mensagemErro && (
          <p className="mt-4 text-sm text-red-600">
            {mensagemErro}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-3 pt-10">
          <Button onClick={handleProximo}>
            {etapaAtual === 5 ? "Concluir cadastro" : "Continuar"}
          </Button>
        </div>

        <p className="mt-6 text-center text-xs text-text-gray">
          Suas respostas são confidenciais e anonimizadas.
        </p>
      </section>
    </Container>
  );
}
