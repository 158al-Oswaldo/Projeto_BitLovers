// Lista de posts (adicione novos aqui)
const posts = [
  {
    title: "Meu primeiro post",
    date: "08/10/2025",
    link: "posts/2025-10-08-primeiro-post.html",
    excerpt: "Neste post, estarei descrevendo os cursos que estou cursando na Etec de Cubatão."
  },
  {
    title: "Como criei este blog",
    date: "09/10/2025",
    link: "posts/2025-10-09-segundo-post.html",
    excerpt: "Um pequeno resumo de como utilizei HTML, CSS e JS para dar vida ao BitLovers."
  },
  {
    title: "O que é um computador?",
    date: "15/10/2025",
    link: "posts/2025-10-15-terceiro-post.html",
    excerpt: "Afinal, o que define um computador e como ele se tornou a maior invenção do milênio passado."
  },
  {
    title: "Redes de Computadores",
    date: "22/10/2025",
    link: "posts/2025-10-22-quarto-post.html",
    excerpt: "O que é uma rede e como ela está presente em nosso cotidiano."
  },
  {
    title: "Programação, Frontend X Backend",
    date: "29/10/2025",
    link: "posts/2025-10-29-quinto-post.html",
    excerpt: "Explicando o que é programação e suas duas maiores áreas."
  },
  {
    title: "Fórum Especial da COP30 - Postagem Especial",
    date: "05/11/2025",
    link: "posts/2025-11-05-sexto-post.html",
    excerpt: "Em proposta sugerida pelo professor Nelson, um comentário em preparação a conferência das partes da ONU sobre Mudanças Climáticas (10/11/2025)."
  },
  {
    title: "Computação",
    date: "12/11/2025",
    link: "posts/2025-11-12-setimo-post.html",
    excerpt: "A computação a nível acadêmico. Uma apresentação de suas principais formações e contribuintes."
  },
  {
    title: "Direito Digital",
    date: "19/11/2025",
    link: "posts/2025-11-19-oitavo-post.html",
    excerpt: "Como a legislação atua na Internet e algumas das infrações que devem ser combatidas."
  }
];

// Pega o container e adiciona os posts automaticamente
const container = document.getElementById("posts-container");

posts.forEach(post => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h2><a href="${post.link}">${post.title}</a></h2>
    <p><small>${post.date}</small></p>
    <p>${post.excerpt}</p>
    <hr>
  `;
  container.appendChild(article);
});
