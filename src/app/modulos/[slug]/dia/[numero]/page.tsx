import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";
import LeituraDia from "@/components/modulos/LeituraDia";
import VideoDia from "@/components/modulos/VideoDia";

import { buscarModulo } from "@/data/modulos";
import { modulo1Conteudo } from "@/data/modulos/modulo-1";

type DiaPageProps = {
  params: Promise<{
    slug: string;
    numero: string;
  }>;
};

export default async function DiaPage({ params }: DiaPageProps) {
  const { slug, numero } = await params;

  const modulo = buscarModulo(slug);

  if (!modulo) {
    notFound();
  }

  const numeroDia = Number(numero);

  if (!Number.isInteger(numeroDia)) {
    notFound();
  }

  // Dia 5: vídeo educativo
  if (numeroDia === 5 && modulo1Conteudo.video) {
    return (
      <Container>
        <VideoDia video={modulo1Conteudo.video} slug={slug} />
        <BottomNavigation />
      </Container>
    );
  }

  // Dias 1 a 4: leitura e atividade
  const dia = modulo1Conteudo.dias.find(
    (item) => item.numero === numeroDia
  );

  if (!dia) {
    notFound();
  }

  return (
    <Container>
      <LeituraDia dia={dia} slug={slug} />
      <BottomNavigation />
    </Container>
  );
}