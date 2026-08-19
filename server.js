const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const ansi = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[38;5;114m",
  cyan: "\x1b[38;5;117m",
  yellow: "\x1b[38;5;221m",
  white: "\x1b[97m",
  gray: "\x1b[38;5;245m",
  red: "\x1b[38;5;210m",
};

const c = (color, text) => `${ansi[color]}${text}${ansi.reset}`;
const avatarAscii = fs
  .readFileSync(path.join(__dirname, "avatar_ascii.txt"), "utf8")
  .trimEnd();
const line = c("gray", "─".repeat(68));
const prompt = (command) =>
  `${c("green", "vinicius@portfolio")}${c("gray", ":~$ ")}${c("white", command)}`;
const bullet = (text) => `  ${c("green", "▸")} ${text}`;

function frame(title, content) {
  return `
${c("cyan", "╭" + "─".repeat(68) + "╮")}
${c("cyan", "│")} ${c("bold", c("white", title.padEnd(66)))} ${c("cyan", "│")}
${c("cyan", "╰" + "─".repeat(68) + "╯")}

${content}
`;
}

function header() {
  return `
${c("cyan", "╭" + "─".repeat(68) + "╮")}
${c("cyan", "│")} ${c("bold", c("white", "VINÍCIUS SANTOS CAMELO".padEnd(66)))} ${c("cyan", "│")}
${c("cyan", "│")} ${c("green", "Front-end Developer".padEnd(66))} ${c("cyan", "│")}
${c("cyan", "╰" + "─".repeat(68) + "╯")}

${c("green", avatarAscii)}

${c("gray", "  currículo em modo terminal  ·  disponível para oportunidades")}
`;
}

function send(res, body, status = 200) {
  res.status(status).type("text/plain; charset=utf-8").send(body);
}

app.get("/", (req, res) => {
  send(
    res,
    `${header()}
${prompt("whoami")}

${c("white", "Vinícius Santos Camelo")}
${c("gray", "Estudante de Desenvolvimento de Sistemas com foco em")}
${c("gray", "interfaces web, experiência do usuário e código bem organizado.")}

${line}

${prompt("status")}

  ${c("green", "● ONLINE")}  ${c("gray", "aprendendo, construindo e aberto a novas conexões")}

${line}

${prompt("help")}

  ${c("cyan", "/about")}     ${c("gray", "sobre mim e formação")}
  ${c("cyan", "/skills")}    ${c("gray", "tecnologias e ferramentas")}
  ${c("cyan", "/projects")}  ${c("gray", "projetos em destaque")}
  ${c("cyan", "/contact")}   ${c("gray", "links e contato")}
  ${c("cyan", "/github")}    ${c("gray", "abrir meu GitHub")}

${line}

${c("yellow", "> Use curl + uma rota para navegar pelo currículo.")}
${c("gray", "  Exemplo: curl https://curriculo-terminal.onrender.com/about")}
`,
  );
});

app.get("/about", (req, res) => {
  send(
    res,
    `${header()}${frame(
      "ABOUT / SOBRE MIM",
      `${prompt("cat about.txt")}

${c("white", "Sou estudante de Desenvolvimento de Sistemas e tenho")}
${c("white", "interesse especial por desenvolvimento Front-end.")}

${c("gray", "Gosto de transformar ideias em interfaces claras, modernas")}
${c("gray", "e funcionais — sempre misturando tecnologia e criatividade.")}

${line}

${prompt("cat education.txt")}

${bullet(c("white", "Técnico em Desenvolvimento de Sistemas"))}
${bullet(c("gray", "Ensino Médio integrado ao curso técnico"))}

${line}

${prompt("cat focus.txt")}

${bullet(c("white", "Front-end e desenvolvimento web"))}
${bullet(c("white", "UI / UX e interfaces responsivas"))}
${bullet(c("white", "JavaScript, React e Node.js"))}`,
    )}
`,
  );
});

app.get("/skills", (req, res) => {
  const skills = [
    ["HTML", 100],
    ["CSS", 100],
    ["JavaScript", 80],
    ["Git / GitHub", 80],
    ["React", 60],
    ["Node.js", 50],
    ["MySQL", 50],
  ];

  const bars = skills
    .map(([name, value]) => {
      const filled = Math.round(value / 5);
      const bar = `${"█".repeat(filled)}${"░".repeat(20 - filled)}`;
      return `${c("white", name.padEnd(13))} ${c("green", bar)} ${c("gray", `${value}%`)}`;
    })
    .join("\n");

  send(
    res,
    `${header()}${frame(
      "SKILLS / HABILIDADES",
      `${prompt("top skills.txt")}

${bars}

${line}

${prompt("ls tools/")}

${bullet(c("white", "VS Code"))}
${bullet(c("white", "Git e GitHub"))}
${bullet(c("white", "Figma"))}
${bullet(c("white", "Node.js"))}
${bullet(c("white", "MySQL Workbench"))}`,
    )}
`,
  );
});

app.get("/projects", (req, res) => {
  send(
    res,
    `${header()}${frame(
      "PROJECTS / PROJETOS",
      `${prompt("ls projects/")}

${c("yellow", "01  SALOTTI OPINA")}
${c("gray", "    Plataforma para alunos registrarem opiniões e experiências.")}
${c("gray", "    stack: HTML · CSS · JavaScript")}

${c("yellow", "02  VETCONTROLL")}
${c("gray", "    Sistema web para gerenciamento de clínica veterinária.")}
${c("gray", "    stack: HTML · CSS · JavaScript")}

${c("yellow", "03  VINI-PRATIC")}
${c("gray", "    Laboratório pessoal com desafios e experimentos de código.")}
${c("gray", "    stack: HTML · CSS · JavaScript")}

${line}

${c("green", "> novos projetos serão adicionados conforme minha evolução.")}`,
    )}
`,
  );
});

app.get("/contact", (req, res) => {
  send(
    res,
    `${header()}${frame(
      "CONTACT / CONTATO",
      `${prompt("cat contact.txt")}

${c("white", "Vinícius Santos Camelo")}
${c("gray", "Para conhecer mais sobre meu trabalho:")}

${bullet(`${c("cyan", "GitHub")}     https://github.com/ViniSantosC`)}
${bullet(`${c("cyan", "LinkedIn")}   https://www.linkedin.com/in/vin%C3%ADcius-santos-490922244/`)}
${bullet(`${c("cyan", "E-mail")}     mailto:vini976964150@gmail.com`)}

${line}

${prompt("echo $CONTACT")}
${c("white", "vini976964150@gmail.com")}

${c("yellow", "> obrigado por visitar meu currículo pelo terminal.")}`,
    )}
`,
  );
});

app.get("/github", (req, res) => {
  send(
    res,
    `${header()}${frame(
      "GITHUB",
      `${prompt("git remote -v")}

${c("cyan", "https://github.com/ViniSantosC")}

${c("gray", "Acesse o link acima para ver meus projetos e acompanhar minha evolução.")}`,
    )}
`,
  );
});

app.use((req, res) => {
  send(
    res,
    `${c("red", "╭" + "─".repeat(68) + "╮")}
${c("red", "│")} ${c("bold", c("white", "404  ·  comando não encontrado".padEnd(66)))} ${c("red", "│")}
${c("red", "╰" + "─".repeat(68) + "╯")}

${prompt(req.path)}

${c("gray", "Rotas disponíveis:")}
  ${c("cyan", "/about")}  ${c("cyan", "/skills")}  ${c("cyan", "/projects")}  ${c("cyan", "/contact")}  ${c("cyan", "/github")}
`,
    404,
  );
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
