// Proxy (antigo "middleware" — renomeado no Next.js 16).
//
// Enquanto SITE_ATIVO não for "true", TODA requisição recebe a página de aviso
// de desativação por falta de pagamento (HTTP 503) e nenhuma rota do site real
// é renderizada. O código do site permanece intacto no repositório.
//
// Para REATIVAR: defina SITE_ATIVO=true nas variáveis de ambiente e faça o
// redeploy (ou simplesmente apague este arquivo e lib/suspended-page.ts).
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { suspendedPageHtml } from "@/lib/suspended-page";

const SITE_ATIVO = process.env.SITE_ATIVO === "true";

export function proxy(_request: NextRequest) {
  if (SITE_ATIVO) {
    return NextResponse.next();
  }

  return new NextResponse(suspendedPageHtml(), {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store, no-cache, must-revalidate, max-age=0",
      "x-robots-tag": "noindex, nofollow",
      "retry-after": "86400",
    },
  });
}

export const config = {
  // Intercepta tudo, exceto os assets internos do Next e o favicon/ícones
  // (mantidos para o ícone da aba continuar aparecendo).
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)",
  ],
};
