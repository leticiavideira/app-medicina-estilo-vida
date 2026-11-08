"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const itens = [
  {
    nome: "Início",
    icone: "⌂",
    caminho: "/menu",
  },
  {
    nome: "Módulos",
    icone: "▤",
    caminho: "/modulos",
  },
  {
    nome: "Perfil",
    icone: "☺",
    caminho: "/perfil",
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="mt-auto grid grid-cols-3 border-t border-medium-gray pt-4">
      {itens.map((item) => {
        const ativo =
          pathname === item.caminho ||
          (item.caminho !== "/menu" &&
            pathname.startsWith(item.caminho));

        return (
          <Link
            key={item.caminho}
            href={item.caminho}
            aria-current={ativo ? "page" : undefined}
            className={`flex flex-col items-center gap-1 transition-colors ${
              ativo
                ? "font-semibold text-primary"
                : "text-text-gray hover:text-primary"
            }`}
          >
            <span className="text-2xl">{item.icone}</span>
            <span className="text-xs">{item.nome}</span>
          </Link>
        );
      })}
    </nav>
  );
}
