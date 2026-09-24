// Lista de projetos (Basta adicionar ou remover objetos deste Array)
const meusProjetos = [
  {
    titulo: "Flappy Bird",
    descricao: "Um jogo minimalista parecido com o famoso Flappy Bird! Utilizado para a introdução ao JavaScript.",
    imagem: "https://via.placeholder.com/400x250/70c5ce/ffffff?text=FlappyBird",
    githubUrl: "https://github.com/seu-usuario/flappy-bird"
  },
  {
    titulo: "Termo",
    descricao: "Jogo do Termo! Usado também para a introdução ao JavaScript!",
    imagem: "https://via.placeholder.com/400x250/2d2d2d/ffffff?text=TERMO",
    githubUrl: "https://github.com/seu-usuario/termo"
  },
  {
    titulo: "Previsão do Tempo",
    descricao: "Previsão do tempo com API. Usado para aprendermos a usar a API!",
    imagem: "https://via.placeholder.com/400x250/87ceeb/ffffff?text=Previsão+do+Tempo",
    githubUrl: "https://github.com/seu-usuario/previsao-tempo"
  },
  {
    titulo: "Ecommerce",
    descricao: "Um ecommerce realizado para aprofundarmos os conhecimentos em JavaScript!",
    imagem: "https://via.placeholder.com/400x250/f0a500/ffffff?text=Ecommerce",
    githubUrl: "https://github.com/seu-usuario/ecommerce"
  },
  {
    titulo: "Jogo da adivinhação!",
    descricao: "Jogo para adivinhar o número de 1 até 100! Desenvolvido para a introdução em JavaScript!",
    imagem: "https://via.placeholder.com/400x250/ffffff/333333?text=1+2+3+4+5",
    githubUrl: "https://github.com/seu-usuario/jogo-adivinhacao"
  }
];

// Função para renderizar os cards na tela
function renderizarProjetos() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";

  meusProjetos.forEach((projeto) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${projeto.imagem}" alt="${projeto.titulo}" class="card-img">
      <div class="card-body">
        <h3 class="card-title">${projeto.titulo}</h3>
        <p class="card-description">${projeto.descricao}</p>
        <a href="${projeto.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-github">
          Ver no GitHub
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

// Executa a função assim que a página carregar
document.addEventListener("DOMContentLoaded", renderizarProjetos);