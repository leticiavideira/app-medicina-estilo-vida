import type { ConteudoModulo } from "@/types/conteudoModulo";

import { modulo1Conteudo } from "@/data/modulos/modulo-1";
import { modulo2Conteudo } from "@/data/modulos/modulo-2";
import { modulo3Conteudo } from "@/data/modulos/modulo-3";

const conteudos: Record<string, ConteudoModulo> = {
  "modulo-1": modulo1Conteudo,
  "modulo-2": modulo2Conteudo,
  "modulo-3": modulo3Conteudo,
};

export function buscarConteudoModulo(
  slug: string
): ConteudoModulo | undefined {
  return conteudos[slug];
}
