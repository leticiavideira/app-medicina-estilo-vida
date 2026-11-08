import { secoesTermos } from "@/data/termos";

export default function ConteudoTermos() {
  return (
    <div className="max-h-[55vh] overflow-y-auto rounded-xl border border-medium-gray bg-white p-4">
      {secoesTermos.map((secao, indice) => (
        <section
          key={secao.titulo}
          className={indice < secoesTermos.length - 1 ? "mb-5" : ""}
        >
          <h2 className="mb-2 font-bold text-primary-dark">
            {secao.titulo}
          </h2>

          <p className="text-sm leading-relaxed text-foreground">
            {secao.conteudo}
          </p>
        </section>
      ))}
    </div>
  );
}
