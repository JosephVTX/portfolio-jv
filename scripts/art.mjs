// Genera las ilustraciones SVG (hero + proyectos privados) en public/img
import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("public/img", { recursive: true });

const F = `font-family="ui-sans-serif,system-ui,Segoe UI,Arial,sans-serif"`;
const bar = (x, y, w, h = 10, fill = "#e2e8f0", r = 5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
const chrome = (w, url) => `
<rect width="${w}" height="40" rx="14" fill="#f1f5f9"/><rect y="20" width="${w}" height="20" fill="#f1f5f9"/>
<circle cx="22" cy="20" r="5" fill="#fca5a5"/><circle cx="40" cy="20" r="5" fill="#fcd34d"/><circle cx="58" cy="20" r="5" fill="#86efac"/>
<rect x="84" y="9" width="${w - 110}" height="22" rx="11" fill="#fff"/><text x="100" y="24" font-size="11" fill="#64748b" ${F}>${url}</text>`;

const defs = (a, b) => `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}" stop-opacity=".16"/><stop offset="1" stop-color="${b}" stop-opacity=".1"/></linearGradient>
<filter id="s" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="14" stdDeviation="14" flood-color="#0f172a" flood-opacity=".16"/></filter></defs>`;

const kpi = (x, y, label, val, c) => `<rect x="${x}" y="${y}" width="140" height="74" rx="12" fill="#fff" stroke="#e2e8f0"/>
<text x="${x + 14}" y="${y + 24}" font-size="11" fill="#64748b" ${F}>${label}</text><text x="${x + 14}" y="${y + 55}" font-size="24" font-weight="700" fill="${c}" ${F}>${val}</text>`;

const sidebar = (h, c) => `<rect x="0" y="40" width="130" height="${h}" fill="#f8fafc"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="16" y="${64 + i * 34}" width="98" height="22" rx="7" fill="${i === 0 ? c : "#e2e8f0"}" ${i === 0 ? 'opacity=".9"' : ""}/>`).join("")}`;

// ---------- HERO ----------
const hero = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 620" role="img" aria-label="Ilustración de un sitio web, código y versión móvil">
${defs("#7c3aed", "#0891b2")}
<rect width="800" height="620" fill="none"/>
<circle cx="570" cy="260" r="210" fill="url(#bg)"/><circle cx="170" cy="470" r="150" fill="url(#bg)"/>
<g filter="url(#s)" transform="translate(40 50)"><rect width="640" height="410" rx="14" fill="#fff" stroke="#e2e8f0"/>${chrome(640, "tu-proyecto.com")}
  <rect x="28" y="64" width="584" height="170" rx="14" fill="url(#g)"/>
  ${bar(56, 92, 260, 18, "#fff", 9)}${bar(56, 124, 200, 18, "#ffffffcc", 9)}${bar(56, 164, 300, 8, "#ffffff99", 4)}${bar(56, 182, 240, 8, "#ffffff80", 4)}
  <rect x="56" y="200" width="110" height="20" rx="10" fill="#fff"/>
  <rect x="440" y="88" width="144" height="118" rx="12" fill="#ffffff2e"/><circle cx="512" cy="132" r="22" fill="#ffffffb3"/><rect x="470" y="168" width="84" height="10" rx="5" fill="#ffffffb3"/><rect x="484" y="186" width="56" height="8" rx="4" fill="#ffffff80"/>
  ${[0, 1, 2].map((i) => `<rect x="${28 + i * 200}" y="258" width="184" height="124" rx="12" fill="#f8fafc" stroke="#e2e8f0"/><rect x="${44 + i * 200}" y="274" width="34" height="34" rx="10" fill="${["#8b5cf6", "#06b6d4", "#f59e0b"][i]}" opacity=".85"/>${bar(44 + i * 200, 322, 120, 10, "#cbd5e1")}${bar(44 + i * 200, 342, 90, 8)}${bar(44 + i * 200, 358, 110, 8)}`).join("")}
</g>
<g filter="url(#s)" transform="translate(20 400)"><rect width="330" height="170" rx="14" fill="#0f172a"/>
  <circle cx="20" cy="20" r="5" fill="#f87171"/><circle cx="38" cy="20" r="5" fill="#fbbf24"/><circle cx="56" cy="20" r="5" fill="#4ade80"/>
  <text x="22" y="56" font-size="13" fill="#a78bfa" font-family="ui-monospace,Consolas,monospace">const <tspan fill="#67e8f9">web</tspan> <tspan fill="#e2e8f0">=</tspan> <tspan fill="#fcd34d">build</tspan><tspan fill="#e2e8f0">({</tspan></text>
  <text x="38" y="80" font-size="13" fill="#e2e8f0" font-family="ui-monospace,Consolas,monospace">fast: <tspan fill="#4ade80">true</tspan>,</text>
  <text x="38" y="104" font-size="13" fill="#e2e8f0" font-family="ui-monospace,Consolas,monospace">seo: <tspan fill="#4ade80">"pro"</tspan>,</text>
  <text x="38" y="128" font-size="13" fill="#e2e8f0" font-family="ui-monospace,Consolas,monospace">mobile: <tspan fill="#4ade80">true</tspan></text>
  <text x="22" y="152" font-size="13" fill="#e2e8f0" font-family="ui-monospace,Consolas,monospace">})<tspan fill="#94a3b8">;</tspan></text></g>
<g filter="url(#s)" transform="translate(560 270)"><rect width="190" height="330" rx="30" fill="#0f172a"/><rect x="8" y="8" width="174" height="314" rx="24" fill="#fff"/><rect x="68" y="16" width="54" height="10" rx="5" fill="#0f172a"/>
  <rect x="20" y="42" width="150" height="104" rx="14" fill="url(#g)"/>${bar(32, 58, 100, 12, "#fff", 6)}${bar(32, 80, 74, 10, "#ffffffb3", 5)}<rect x="32" y="108" width="62" height="20" rx="10" fill="#fff"/>
  ${[0, 1, 2].map((i) => `<rect x="20" y="${160 + i * 50}" width="150" height="42" rx="10" fill="#f8fafc" stroke="#e2e8f0"/><circle cx="42" cy="${181 + i * 50}" r="11" fill="${["#8b5cf6", "#06b6d4", "#f59e0b"][i]}" opacity=".85"/>${bar(62, 172 + i * 50, 80, 8, "#cbd5e1")}${bar(62, 188 + i * 50, 56, 7)}`).join("")}
</g>
<g transform="translate(500 30)"><rect width="150" height="44" rx="22" fill="#fff" stroke="#e2e8f0" filter="url(#s)"/><circle cx="26" cy="22" r="10" fill="#34d399"/><path d="m21 22 4 4 7-8" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="46" y="27" font-size="14" font-weight="700" fill="#0f172a" ${F}>SEO ready</text></g>
<g transform="translate(620 500)"><rect x="-20" y="0" width="150" height="44" rx="22" fill="#fff" stroke="#e2e8f0" filter="url(#s)"/><text x="0" y="28" font-size="22" ${F}>⚡</text><text x="30" y="27" font-size="14" font-weight="700" fill="#0f172a" ${F}>Ultra rápido</text></g>
</svg>`;

// ---------- Proyectos ----------
const wrap = (a, b, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 600">${defs(a, b)}<rect width="960" height="600" fill="url(#bg)"/><rect width="960" height="600" fill="#f8fafc" opacity=".6"/>
<g filter="url(#s)" transform="translate(70 70)"><rect width="820" height="470" rx="14" fill="#fff" stroke="#e2e8f0"/>${body}</g></svg>`;

const prod = wrap("#22d3ee", "#3b82f6", `${chrome(820, "produccion.tuempresa.com")}${sidebar(430, "#3b82f6")}
${kpi(160, 64, "Órdenes hoy", "128", "#3b82f6")}${kpi(320, 64, "Eficiencia", "94%", "#06b6d4")}${kpi(480, 64, "En proceso", "37", "#8b5cf6")}${kpi(640, 64, "Retrasos", "3", "#f43f5e")}
<rect x="160" y="152" width="380" height="290" rx="12" fill="#fff" stroke="#e2e8f0"/><text x="178" y="180" font-size="13" font-weight="700" fill="#0f172a" ${F}>Producción semanal</text>
${[110, 150, 90, 190, 140, 210, 170].map((h, i) => `<rect x="${186 + i * 52}" y="${420 - h}" width="30" height="${h}" rx="7" fill="url(#g)" opacity="${0.55 + i * 0.07}"/>`).join("")}
<rect x="560" y="152" width="240" height="290" rx="12" fill="#fff" stroke="#e2e8f0"/><text x="578" y="180" font-size="13" font-weight="700" fill="#0f172a" ${F}>Últimas órdenes</text>
${[0, 1, 2, 3, 4].map((i) => `${bar(598, 200 + i * 48, 120, 9, "#cbd5e1")}${bar(598, 218 + i * 48, 80, 7)}<rect x="730" y="${204 + i * 48}" width="56" height="20" rx="10" fill="${["#bbf7d0", "#fde68a", "#bbf7d0", "#bfdbfe", "#fecdd3"][i]}"/>`).join("")}`);

const mining = wrap("#fbbf24", "#f97316", `${chrome(820, "minera.tuempresa.com")}${sidebar(430, "#f97316")}
${kpi(160, 64, "Pesaje (t)", "482.6", "#f97316")}${kpi(320, 64, "Lotes activos", "12", "#f59e0b")}${kpi(480, 64, "Proveedores", "38", "#0ea5e9")}${kpi(640, 64, "Por liquidar", "S/ 91k", "#16a34a")}
<rect x="160" y="152" width="380" height="290" rx="12" fill="#fff" stroke="#e2e8f0"/><text x="178" y="180" font-size="13" font-weight="700" fill="#0f172a" ${F}>Toneladas por día</text>
<path d="M186 400 L240 350 L294 372 L348 300 L402 320 L456 250 L510 230 L525 210" fill="none" stroke="url(#g)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M186 400 L240 350 L294 372 L348 300 L402 320 L456 250 L510 230 L525 210 L525 420 L186 420Z" fill="url(#g)" opacity=".14"/>
${[[240, 350], [348, 300], [456, 250], [525, 210]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="#fff" stroke="#f97316" stroke-width="3"/>`).join("")}
<rect x="560" y="152" width="240" height="290" rx="12" fill="#fff" stroke="#e2e8f0"/><text x="578" y="180" font-size="13" font-weight="700" fill="#0f172a" ${F}>Formación de lotes</text>
${[0, 1, 2, 3].map((i) => `<rect x="578" y="${198 + i * 58}" width="204" height="46" rx="10" fill="#f8fafc" stroke="#e2e8f0"/><text x="592" y="${218 + i * 58}" font-size="11" font-weight="700" fill="#0f172a" ${F}>Lote L-0${i + 1}</text><rect x="592" y="${228 + i * 58}" width="176" height="7" rx="3.5" fill="#e2e8f0"/><rect x="592" y="${228 + i * 58}" width="${[150, 110, 164, 70][i]}" height="7" rx="3.5" fill="url(#g)"/>`).join("")}`);

const mono = `font-family="ui-monospace,Consolas,monospace"`;
const devops = wrap("#34d399", "#14b8a6", `<rect width="820" height="470" rx="14" fill="#fff"/>
<rect x="24" y="24" width="470" height="422" rx="12" fill="#0f172a"/><circle cx="46" cy="46" r="5" fill="#f87171"/><circle cx="64" cy="46" r="5" fill="#fbbf24"/><circle cx="82" cy="46" r="5" fill="#4ade80"/>
${[["$ git push origin main", "#e2e8f0"], ["→ webhook recibido", "#94a3b8"], ["✔ build image  (docker)", "#4ade80"], ["✔ pull + compose up -d", "#4ade80"], ["✔ healthcheck  200 OK", "#4ade80"], ["✔ SSL (Let's Encrypt) activo", "#4ade80"], ["", ""], ["🚀 deploy listo en 48s", "#67e8f9"]].map(([t, c], i) => `<text x="44" y="${90 + i * 32}" font-size="15" fill="${c}" ${mono}>${t}</text>`).join("")}
<g transform="translate(520 24)"><text x="0" y="16" font-size="13" font-weight="700" fill="#0f172a" ${F}>Servicios</text>
${["web-app", "api", "postgres", "redis"].map((n, i) => `<rect x="0" y="${34 + i * 84}" width="276" height="70" rx="12" fill="#f8fafc" stroke="#e2e8f0"/><rect x="14" y="${48 + i * 84}" width="40" height="40" rx="10" fill="url(#g)"/><text x="68" y="${66 + i * 84}" font-size="14" font-weight="700" fill="#0f172a" ${F}>${n}</text>${bar(68, 76 + i * 84, 90, 7)}<rect x="184" y="${54 + i * 84}" width="78" height="24" rx="12" fill="#bbf7d0"/><circle cx="198" cy="${66 + i * 84}" r="4" fill="#16a34a"/><text x="208" y="${70 + i * 84}" font-size="11" font-weight="700" fill="#166534" ${F}>Running</text>`).join("")}</g>`);

writeFileSync("public/img/hero.svg", hero);
writeFileSync("public/img/proj-produccion.svg", prod);
writeFileSync("public/img/proj-minera.svg", mining);
writeFileSync("public/img/proj-devops.svg", devops);
console.log("svg listos");
