
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";

import LeituraDia from "@/components/modulos/LeituraDia";
import VideoDia from "@/components/modulos/VideoDia";
import QuizDia from "@/components/modulos/QuizDia";
import TriagemDia from "@/components/modulos/TriagemDia";
import TriagemAssistDia from "@/components/modulos/TriagemAssistDia";

import { buscarModulo } from "@/data/modulos";
import { buscarConteudoModulo } from "@/data/conteudoModulos";

import type { AssistModulo } from "@/types/conteudoModulo";

type DiaPageProps = {
  params: Promise<{ slug: string; numero: string }>;
};

export default async function DiaPage({ params }: DiaPageProps) {
  const { slug, numero } = await params;

  const modulo = buscarModulo(slug);
  if (!modulo) notFound();

  const conteudo = buscarConteudoModulo(slug);
  if (!conteudo) notFound();

  const numeroDia = Number(numero);

  if (!Number.isInteger(numeroDia) || numeroDia < 1) {
    notFound();
  }

  // Módulos 7, 8 e 9: sete dias de leitura -> quiz -> triagem.
  const fluxoLeituraQuizTriagem =
    slug === "modulo-7" ||
    slug === "modulo-8" ||
    slug === "modulo-9";

  if (fluxoLeituraQuizTriagem) {
    // Dia 8: Quiz.
    if (numeroDia === 8 && conteudo.quiz) {
      return (
        <Container>
          <QuizDia quiz={conteudo.quiz} slug={slug} />
          <BottomNavigation />
        </Container>
      );
    }

    // Dia 9: Triagem.
    if (numeroDia === 9) {
      // Módulo 9 utiliza a triagem ASSIST.
      if (slug === "modulo-9") {
        const assist = (
          conteudo as unknown as { assist?: AssistModulo }
        ).assist;

        if (!assist) notFound();

        return (
          <Container>
            <TriagemAssistDia assist={assist} slug={slug} />
            <BottomNavigation />
          </Container>
        );
      }

      // Módulos 7 e 8 utilizam a triagem convencional.
      if (conteudo.triagem) {
        return (
          <Container>
            <TriagemDia triagem={conteudo.triagem} slug={slug} />
            <BottomNavigation />
          </Container>
        );
      }

      notFound();
    }

    // Dias 1 a 7: Leituras.
    const dia = conteudo.dias.find(
      (item) => item.numero === numeroDia
    );

    if (!dia) notFound();

    return (
      <Container>
        <LeituraDia dia={dia} slug={slug} />
        <BottomNavigation />
      </Container>
    );
  }

  // Fluxo original dos módulos 1 a 6.
  if (numeroDia === 5 && conteudo.video) {
    return (
      <Container>
        <VideoDia video={conteudo.video} slug={slug} />
        <BottomNavigation />
      </Container>
    );
  }

  if (numeroDia === 6 && conteudo.quiz) {
    return (
      <Container>
        <QuizDia quiz={conteudo.quiz} slug={slug} />
        <BottomNavigation />
      </Container>
    );
  }

  if (numeroDia === 7 && conteudo.triagem) {
    return (
      <Container>
        <TriagemDia triagem={conteudo.triagem} slug={slug} />
        <BottomNavigation />
      </Container>
    );
  }

  const dia = conteudo.dias.find(
    (item) => item.numero === numeroDia
  );

  if (!dia) notFound();

  return (
    <Container>
      <LeituraDia dia={dia} slug={slug} />
      <BottomNavigation />
    </Container>
  );
}
