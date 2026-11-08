import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";

import LeituraDia from "@/components/modulos/LeituraDia";
import VideoDia from "@/components/modulos/VideoDia";
import QuizDia from "@/components/modulos/QuizDia";
import TriagemDia from "@/components/modulos/TriagemDia";

import { buscarModulo } from "@/data/modulos";
import { buscarConteudoModulo } from "@/data/conteudoModulos";

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
  if (!Number.isInteger(numeroDia)) notFound();

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