const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ================================
// ASCII ART
// ================================

const stitch = fs.readFileSync(path.join(__dirname, "stitch.txt"), "utf8");

// ================================
// CORES DO TERMINAL
// ================================

const verde = "\x1b[32m";
const verdeClaro = "\x1b[92m";
const cinza = "\x1b[90m";
const branco = "\x1b[97m";
const reset = "\x1b[0m";

// ================================
// CABEÇALHO
// ================================

function header() {
  return `
${verde}
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║                  VINÍCIUS SANTOS CAMELO                      ║
║                                                              ║
║                    FRONT-END DEVELOPER                      ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
${reset}`;
}

// ================================
// HOME
// ================================

app.get("/", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");

  res.send(`
${verdeClaro}
${stitch}
${reset}

${verde}
╔══════════════════════════════════════════════════════════════╗
║                  VINÍCIUS SANTOS CAMELO                     ║
║                  FRONT-END DEVELOPER                        ║
╚══════════════════════════════════════════════════════════════╝
${reset}

${verdeClaro}$ whoami${reset}

Vinícius Santos Camelo

Estudante de Desenvolvimento de Sistemas apaixonado por
tecnologia, desenvolvimento web e criação de interfaces.

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ status${reset}

${verde}● ONLINE${reset}

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ commands${reset}


  $ curl /about       → Sobre mim
  $ curl /skills      → Habilidades
  $ curl /projects    → Projetos
  $ curl /contact     → Contato
  $ curl /github      → GitHub

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ example${reset}

  curl ${verdeClaro}https://curriculo-terminal.onrender.com/about${reset}

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}> Bem-vindo ao meu currículo pelo terminal.${reset}

`);
});

app.get("/about", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");

  res.send(`

${header()}

${verdeClaro}$ about${reset}

${branco}Vinícius Santos Camelo${reset}

Sou estudante de Desenvolvimento de Sistemas e tenho
interesse principalmente em desenvolvimento Front-End.

Gosto de criar sites, interfaces modernas, animações
e projetos que misturam tecnologia com criatividade.

Atualmente estou evoluindo meus conhecimentos em
JavaScript, React, Node.js e desenvolvimento web.

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ education${reset}

▸ Técnico em Desenvolvimento de Sistemas
▸ Ensino Médio integrado ao curso técnico

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ focus${reset}

▸ Front-End
▸ Desenvolvimento Web
▸ UI / UX
▸ JavaScript
▸ React

`);
});

app.get("/skills", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");

  res.send(`

${header()}

${verdeClaro}$ skills${reset}

${verde}HTML${reset}
████████████████████ 100%

${verde}CSS${reset}
████████████████████ 100%

${verde}JavaScript${reset}
████████████████░░░░ 80%

${verde}Git / GitHub${reset}
████████████████░░░░ 80%

${verde}React${reset}
████████████░░░░░░░░ 60%

${verde}Node.js${reset}
██████████░░░░░░░░░░ 50%

${verde}MySQL${reset}
██████████░░░░░░░░░░ 50%

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ tools${reset}

▸ VS Code
▸ GitHub
▸ Git
▸ MySQL Workbench
▸ Figma
▸ Node.js

`);
});

app.get("/projects", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");

  res.send(`

${header()}

${verdeClaro}$ projects${reset}

${verde}01.${reset} SALOTTI OPINA

    Plataforma inspirada em sistemas de avaliação,
    onde alunos podem registrar opiniões e experiências.

    Stack:
    HTML • CSS • JavaScript


${verde}02.${reset} VETCONTROLL

    Projeto de desenvolvimento web voltado para
    gerenciamento de uma clínica veterinária.

    Stack:
    HTML • CSS • JavaScript


${verde}03.${reset} VINI-PRATIC

    Meu laboratório pessoal de programação.

    Um espaço para registrar minha evolução,
    projetos, desafios e experimentos.

    Stack:
    HTML • CSS • JavaScript

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ more${reset}

Novos projetos serão adicionados aqui conforme
minha evolução como desenvolvedor.

`);
});

app.get("/contact", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");

  res.send(`

${header()}

${verdeClaro}$ contact${reset}

${branco}Vinícius Santos Camelo${reset}

Para conhecer mais sobre meu trabalho:

${verde}GitHub${reset}
https://github.com/ViniSantosC

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ message${reset}

Obrigado por visitar meu currículo pelo terminal!

`);
});

app.get("/", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");

  res.send(`

${verdeClaro}

${stitch}

${reset}

${verde}
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║                  VINÍCIUS SANTOS CAMELO                     ║
║                  FRONT-END DEVELOPER                        ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
${reset}

${verdeClaro}$ whoami${reset}

Vinícius Santos Camelo

Estudante de Desenvolvimento de Sistemas apaixonado por
tecnologia, desenvolvimento web e criação de interfaces.

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ status${reset}

${verde}● ONLINE${reset}

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ commands${reset}

  ${verde}$ curl /about${reset}       → Sobre mim
  ${verde}$ curl /skills${reset}      → Minhas habilidades
  ${verde}$ curl /projects${reset}    → Meus projetos
  ${verde}$ curl /contact${reset}     → Contato
  ${verde}$ curl /github${reset}      → GitHub

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}$ example${reset}

  ${verde}curl https://curriculo-terminal.onrender.com/about${reset}

${cinza}──────────────────────────────────────────────────────────────${reset}

${verdeClaro}> Bem-vindo ao meu currículo pelo terminal.${reset}

`);
});

app.use((req, res) => {
  res.status(404);
  res.set("Content-Type", "text/plain; charset=utf-8");

  res.send(`

${verde}
╔══════════════════════════════════════════════════════════════╗
║                         404                                  ║
╚══════════════════════════════════════════════════════════════╝
${reset}

${verdeClaro}$ error${reset}

Comando ou rota não encontrada.

${verdeClaro}$ available commands${reset}

  /about
  /skills
  /projects
  /contact
  /github

`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
