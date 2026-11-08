
import type { ConteudoModulo } from "@/types/conteudoModulo";

import { modulo1Conteudo } from "@/data/modulos/modulo-1";
import { modulo2Conteudo } from "@/data/modulos/modulo-2";
import { modulo3Conteudo } from "@/data/modulos/modulo-3";
import { modulo4Conteudo } from "@/data/modulos/modulo-4";
import { modulo5Conteudo } from "@/data/modulos/modulo-5";
import { modulo6Conteudo } from "@/data/modulos/modulo-6";
import { modulo7Conteudo } from "@/data/modulos/modulo-7";
import { modulo8Conteudo } from "@/data/modulos/modulo-8";

const conteudos: Record<string, ConteudoModulo> = {
  "modulo-1": modulo1Conteudo,
  "modulo-2": modulo2Conteudo,
  "modulo-3": modulo3Conteudo,
  "modulo-4": modulo4Conteudo,
  "modulo-5": modulo5Conteudo,
  "modulo-6": modulo6Conteudo,
  "modulo-7": modulo7Conteudo,
  "modulo-8": modulo8Conteudo,
};

export function buscarConteudoModulo(
  slug: string
): ConteudoModulo | undefined {
  return conteudos[slug];
}
