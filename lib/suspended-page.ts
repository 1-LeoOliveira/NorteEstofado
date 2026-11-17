// Página de aviso exibida quando o site está desativado por falta de
// regularização de pagamento. É servida diretamente pelo proxy (proxy.ts),
// sem renderizar nenhuma rota do site real.
//
// Para REATIVAR o site: defina a variável de ambiente SITE_ATIVO=true
// (na Vercel: Project Settings -> Environment Variables) e faça o redeploy.

/**
 * Prazo final para regularização, em ISO 8601 com fuso (ex.: "2026-11-18T09:00:00-03:00").
 * Se não for definido, o bloco de prazo e o contador simplesmente não aparecem
 * (o aviso das 24 horas continua no texto principal).
 */
export const PRAZO_FINAL = process.env.SITE_SUSPENSO_PRAZO ?? "2026-11-18T00:30:00-03:00";

/** Contato opcional para regularização (ex.: "https://wa.me/55119XXXXXXXX"). */
const CONTATO_URL = process.env.SITE_SUSPENSO_CONTATO_URL ?? "";
const CONTATO_LABEL = process.env.SITE_SUSPENSO_CONTATO_LABEL ?? "Falar com o responsável";

function formatarPrazo(iso: string): string {
  const data = new Date(iso);
  if (Number.isNaN(data.getTime())) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  }).format(data);
}

export function suspendedPageHtml(): string {
  const prazoFormatado = formatarPrazo(PRAZO_FINAL);
  const botaoContato = CONTATO_URL
    ? `<a class="btn" href="${CONTATO_URL}" rel="noopener noreferrer" target="_blank">${CONTATO_LABEL}</a>`
    : "";

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>Site desativado | Norte Estofados</title>
<style>
  *, *::before, *::after { box-sizing: border-box; }
  :root {
    --ink: #0b0b0d;
    --ink-soft: #17171b;
    --charcoal: #232228;
    --cream: #f4efe6;
    --cream-dim: #a9a49b;
    --gold: #c9a227;
    --gold-light: #e0c25f;
    --danger: #e0553f;
  }
  html, body { margin: 0; padding: 0; min-height: 100%; }
  body {
    background-color: var(--ink);
    background-image: radial-gradient(circle at 1px 1px, rgba(244,239,230,0.05) 1px, transparent 0);
    background-size: 22px 22px;
    color: var(--cream);
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 16px;
    line-height: 1.6;
  }
  .wrap { width: 100%; max-width: 620px; }
  .card {
    background: linear-gradient(180deg, var(--ink-soft) 0%, #101013 100%);
    border: 1px solid rgba(201,162,39,0.22);
    border-radius: 18px;
    padding: 40px 32px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.55);
    text-align: center;
  }
  .brand {
    font-size: 11px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--gold);
    margin: 0 0 28px;
    font-weight: 700;
  }
  .icon {
    width: 64px; height: 64px;
    margin: 0 auto 24px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 50%;
    border: 1px solid rgba(224,85,63,0.4);
    background: rgba(224,85,63,0.10);
  }
  .icon svg { width: 30px; height: 30px; stroke: var(--danger); }
  h1 {
    font-size: clamp(24px, 5.4vw, 34px);
    line-height: 1.2;
    margin: 0 0 16px;
    font-weight: 800;
    letter-spacing: -0.01em;
    text-wrap: balance;
  }
  p { margin: 0 0 16px; color: var(--cream-dim); font-size: 15.5px; }
  p.lead { color: #ded7cb; }
  .alert {
    margin: 28px 0 0;
    padding: 18px 20px;
    border-radius: 12px;
    border: 1px solid rgba(224,85,63,0.32);
    background: rgba(224,85,63,0.08);
    text-align: left;
  }
  .alert strong { color: #f3c5bb; display: block; margin-bottom: 6px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; }
  .alert p { margin: 0; color: #e8d9d4; font-size: 15px; }
  .prazo {
    margin-top: 24px;
    padding-top: 22px;
    border-top: 1px solid var(--charcoal);
  }
  .prazo-label { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #7e7a73; margin: 0 0 8px; }
  .prazo-data { font-size: 16px; color: var(--cream); margin: 0; font-weight: 600; }
  .timer { display: flex; align-items: flex-start; justify-content: center; gap: 8px; margin: 4px 0 18px; }
  .timer .unit {
    display: flex; flex-direction: column; align-items: center; gap: 6px;
    min-width: 78px;
    padding: 12px 6px 10px;
    border: 1px solid rgba(201,162,39,0.28);
    border-radius: 12px;
    background: rgba(201,162,39,0.07);
  }
  .timer .num {
    font-size: clamp(28px, 8vw, 38px);
    line-height: 1;
    font-weight: 800;
    color: var(--gold-light);
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.01em;
  }
  .timer .lbl { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #8a857d; }
  .timer .sep { font-size: 26px; font-weight: 700; color: rgba(201,162,39,0.45); padding-top: 14px; }
  .timer-msg { color: var(--danger); font-weight: 700; font-size: 16px; margin: 4px 0 16px; }
  .timer[hidden], .timer-msg[hidden] { display: none; }
  .btn {
    display: inline-block;
    margin-top: 26px;
    padding: 13px 26px;
    border-radius: 999px;
    background: var(--gold);
    color: #0b0b0d;
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
  }
  .btn:hover { background: var(--gold-light); }
  .foot { margin: 26px 0 0; font-size: 12.5px; color: #6f6b65; text-align: center; }
  @media (max-width: 480px) { .card { padding: 32px 20px; } }
</style>
</head>
<body>
  <main class="wrap">
    <div class="card">
      <p class="brand">Norte Estofados</p>
      <div class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 9v4" /><path d="M12 17h.01" />
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        </svg>
      </div>
      <h1>Site desativado</h1>
      <p class="lead">Este site está temporariamente fora do ar devido à <strong>falta de regularização do pagamento</strong> referente ao serviço de desenvolvimento e hospedagem.</p>
      <div class="alert">
        <strong>Atenção</strong>
        <p>Se o pagamento não for realizado nas próximas 24 horas, o site será descontinuado em definitivo e não será possível recuperá-lo.</p>
      </div>
      ${prazoFormatado ? `<div class="prazo">
        <p class="prazo-label">Tempo restante para regularização</p>
        <div class="timer" id="timer" data-prazo="${PRAZO_FINAL}" role="timer">
          <div class="unit"><span class="num" id="t-h">--</span><span class="lbl">horas</span></div>
          <span class="sep">:</span>
          <div class="unit"><span class="num" id="t-m">--</span><span class="lbl">min</span></div>
          <span class="sep">:</span>
          <div class="unit"><span class="num" id="t-s">--</span><span class="lbl">seg</span></div>
        </div>
        <p class="timer-msg" id="timer-msg" hidden>Prazo encerrado.</p>
        <p class="prazo-data">Prazo final: ${prazoFormatado} (horário de Brasília)</p>
      </div>` : ""}
      ${botaoContato}
      <p class="foot">Após a confirmação do pagamento, o site é reativado imediatamente.</p>
    </div>
  </main>
  <script>
    (function () {
      var box = document.getElementById('timer');
      if (!box) return;
      var prazo = new Date(box.getAttribute('data-prazo')).getTime();
      if (isNaN(prazo)) return;
      var msg = document.getElementById('timer-msg');
      var eh = document.getElementById('t-h');
      var em = document.getElementById('t-m');
      var es = document.getElementById('t-s');
      var pad = function (n) { return ('0' + n).slice(-2); };
      var id = setInterval(tick, 1000);
      function tick() {
        var resta = prazo - Date.now();
        if (resta <= 0) {
          clearInterval(id);
          box.hidden = true;
          if (msg) msg.hidden = false;
          return;
        }
        eh.textContent = pad(Math.floor(resta / 3600000));
        em.textContent = pad(Math.floor((resta % 3600000) / 60000));
        es.textContent = pad(Math.floor((resta % 60000) / 1000));
      }
      tick();
    })();
  </script>
</body>
</html>`;
}
