// Lista de projetos (Basta adicionar ou remover objetos deste Array)
const meusProjetos = [
  {
    titulo: "Flappy Bird (Versao1)",
    descricao: "Um jogo minimalista parecido com o famoso Flappy Bird! Utilizado para a introdução ao JavaScript.",
    imagem: "Imagens/flapyBird(versao1).png",
    githubUrl: "https://eltong-ifrs.github.io/flapybird-versao-4/"
  },
  {
    titulo: "Ecommerce (Versao1)",
    descricao: "Catalogo de produtos, rating de produtos e carrinho de compras (javascript)",
    imagem: "imagens/Ecommerce(versao1).png",
    githubUrl: "https://eltong-ifrs.github.io/Meus-Projetos/login.html"
  },
  {
    titulo: "Agendador de Tarefas",
    descricao: "Um programa simples que agenda tarefas (CRUD)",
    imagem: "Imagens/AgendadorTarefas.png",
    githubUrl: "https://eltong-ifrs.github.io/Agendador-de-Tarefas/tarefas.html"
  },
  {
    titulo: "Flapy Bird (Versao2)",
    descricao: "Um jogo Adaptando o Basico do FlapyBird e aidcionando mais elementos",
    imagem: "Imagens/flapyBird(versao2).png",
    githubUrl: "https://eltong-ifrs.github.io/flapybird-versao-6/"
  },
  {
    titulo: "Flapy Bird (Versao3)",
    descricao: "Um jogo Adaptando o Basico do FlapyBird e aidcionando mais elementos",
    imagem: "Imagens/flapyBird(versao3).png",
    githubUrl: "https://eltong-ifrs.github.io/flapybird-versao-6/"
  },
  
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