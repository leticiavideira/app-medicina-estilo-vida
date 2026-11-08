
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";
import LeituraDia from "@/components/modulos/LeituraDia";
import VideoDia from "@/components/modulos/VideoDia";
import QuizDia from "@/components/modulos/QuizDia";
import TriagemDia from "@/components/modulos/TriagemDia";
import { buscarModulo } from "@/data/modulos";
import { modulo1Conteudo } from "@/data/modulos/modulo-1";

type DiaPageProps = {
  params: Promise<{ slug: string; numero: string }>;
};

export default async function DiaPage({ params }: DiaPageProps) {
  const { slug, numero } = await params;
  const modulo = buscarModulo(slug);
  if (!modulo) notFound();

  const numeroDia = Number(numero);
  if (!Number.isInteger(numeroDia)) notFound();

  if (numeroDia === 5 && modulo1Conteudo.video) {
    return (
      <Container>
        <VideoDia video={modulo1Conteudo.video} slug={slug} />
        <BottomNavigation />
      </Container>
    );
  }

  if (numeroDia === 6 && modulo1Conteudo.quiz) {
    return (
      <Container>
        <QuizDia quiz={modulo1Conteudo.quiz} slug={slug} />
        <BottomNavigation />
      </Container>
    );
  }

  // NOVO: tela de triagem do Dia 7
  if (numeroDia === 7 && modulo1Conteudo.triagem) {
    return (
      <Container>
        <TriagemDia
          triagem={modulo1Conteudo.triagem}
          slug={slug}
        />
        <BottomNavigation />
      </Container>
    );
  }

  const dia = modulo1Conteudo.dias.find(
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