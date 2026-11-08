import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default function Perfil() {
  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col">
        <h1 className="text-2xl font-bold text-primary-dark">
          Meu Perfil
        </h1>

        <p className="mt-2 text-text-gray">
          Aqui você poderá visualizar e editar suas informações pessoais.
        </p>

        <BottomNavigation />
      </section>
    </Container>
  );
}