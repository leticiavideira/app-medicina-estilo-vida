import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";
import ApresentacaoModulo from "@/components/modulos/ApresentacaoModulo";

import { buscarModulo } from "@/data/modulos";

type ModuloPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ModuloPage({
  params,
}: ModuloPageProps) {
  const { slug } = await params;

  const modulo = buscarModulo(slug);

  if (!modulo) {
    notFound();
  }

  return (
    <Container>
      <ApresentacaoModulo modulo={modulo} />
      <BottomNavigation />
    </Container>
  );
}
