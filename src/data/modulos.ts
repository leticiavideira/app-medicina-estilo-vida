export const modulos = Array.from({ length: 12 }, (_, indice) => ({
  slug: `modulo-${indice + 1}`,
  numero: indice + 1,
  nome: `Módulo ${indice + 1}`,
  semana: indice + 1,
}));
