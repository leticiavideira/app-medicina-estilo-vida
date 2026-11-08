
"use client";

import { useState } from "react";
import Link from "next/link";

import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { notificacoes } from "@/data/notificacoes";

export default function Notificacoes() {
  const [avisos, setAvisos] = useState(notificacoes);

  function marcarComoLida(id: number) {
    setAvisos((atuais) =>
      atuais.map((aviso) =>
        aviso.id === id
          ? { ...aviso, lida: true }
          : aviso
      )
    );
  }

  function marcarTodasComoLidas() {
    setAvisos((atuais) =>
      atuais.map((aviso) => ({
        ...aviso,
        lida: true,
      }))
    );
  }

  const naoLidas = avisos.filter((aviso) => !aviso.lida).length;

  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col">
        <Link
          href="/menu"
          className="mb-6 self-start text-sm font-semibold text-primary"
        >
          ← Voltar ao início
        </Link>

        <header className="mb-6">
          <h1 className="text-2xl font-bold text-primary-dark">
            Notificações
          </h1>

          <p className="mt-2 text-sm text-text-gray">
            Você tem {naoLidas} notificações não lidas.
          </p>
        </header>

        {naoLidas > 0 && (
          <button
            type="button"
            onClick={marcarTodasComoLidas}
            className="mb-5 self-end text-sm font-semibold text-primary"
          >
            Marcar todas como lidas
          </button>
        )}

        <div className="space-y-3">
          {avisos.map((aviso) => (
            <button
              key={aviso.id}
              type="button"
              onClick={() => marcarComoLida(aviso.id)}
              className={`w-full rounded-xl border p-4 text-left transition-colors ${
                aviso.lida
                  ? "border-medium-gray/60 bg-white"
                  : "border-primary/30 bg-light-green"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 text-xl">
                  {aviso.tipo === "modulo"
                    ? "📚"
                    : aviso.tipo === "prazo"
                      ? "⏰"
                      : "🔔"}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-bold text-primary-dark">
                      {aviso.titulo}
                    </h2>

                    {!aviso.lida && (
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-text-gray">
                    {aviso.mensagem}
                  </p>

                  <p className="mt-3 text-xs text-text-gray">
                    {aviso.data}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {avisos.length === 0 && (
          <p className="py-10 text-center text-text-gray">
            Você não possui notificações.
          </p>
        )}

        <BottomNavigation />
      </section>
    </Container>
  );
}
