import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><radialGradient id="a" cx="10%" cy="0%" r="70%"><stop stop-color="#8b5cf6" stop-opacity=".22"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
<radialGradient id="b" cx="95%" cy="10%" r="60%"><stop stop-color="#22d3ee" stop-opacity=".2"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
<linearGradient id="t"><stop stop-color="#7c3aed"/><stop offset="1" stop-color="#0891b2"/></linearGradient></defs>
<rect width="1200" height="630" fill="#ffffff"/><rect width="1200" height="630" fill="url(#a)"/><rect width="1200" height="630" fill="url(#b)"/>
<g font-family="Arial, Helvetica, sans-serif" fill="#0f172a">
<text x="80" y="150" font-size="34" fill="#64748b">Joseph Vega · Freelance</text>
<text x="80" y="290" font-size="88" font-weight="700">Desarrollador Web</text>
<text x="80" y="390" font-size="88" font-weight="700" fill="url(#t)">Full Stack</text>
<text x="80" y="480" font-size="36" fill="#334155">React · Next.js · Laravel · Node.js · DevOps</text>
<text x="80" y="560" font-size="30" fill="#64748b">Workana · Upwork · Fiverr · Freelancer</text></g></svg>`;
writeFileSync("public/og.png", new Resvg(svg, { font: { loadSystemFonts: true, defaultFontFamily: "Arial" } }).render().asPng());
console.log("og.png listo");
