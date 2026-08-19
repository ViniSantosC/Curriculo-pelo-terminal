const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");

  res.send(`
╔══════════════════════════════════════════════════════════════╗
║                  VINÍCIUS SANTOS CAMELO                     ║
║              Front-End Developer em formação                ║
╚══════════════════════════════════════════════════════════════╝

$ whoami

Estudante de Desenvolvimento de Sistemas apaixonado por criar
interfaces modernas, animações e experiências para web.

──────────────────────────────────────────────────────────────

$ skills

▸ HTML          ██████████
▸ CSS           ██████████
▸ JavaScript    ████████░░
▸ React         ██████░░░░
▸ Node.js       █████░░░░░
▸ MySQL         █████░░░░░
▸ Git/GitHub    ████████░░

──────────────────────────────────────────────────────────────

$ projects

• Salotti Opina
• VetControll
• VINI-PRATIC

──────────────────────────────────────────────────────────────

$ links

GitHub: github.com/ViniSantosC

──────────────────────────────────────────────────────────────

$ help

curl /projects
curl /skills
curl /about

> Obrigado por visitar meu currículo.
`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
