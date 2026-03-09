// POSTS DE DESENVOLVIMENTO
const devblogs = [

{
title:"Sistema de Missões finalizado",
date:"09/03/2026",
content:"O sistema de missões foi testado e está funcionando corretamente no jogo."
},

{
title:"IA dos Bandits funcionando",
date:"09/03/2026",
content:"A inteligência dos Bandits agora está funcionando como esperado."
}

];

// UPDATES DO JOGO
const updates = [

{
title:"Novo Sistema de Missões",
date:"09/03/2026",
content:"Adicionamos um novo sistema de missões com recompensas."
},

{
title:"Bandits adicionados",
date:"09/03/2026",
content:"Agora existem inimigos bandits espalhados pelo mapa."
},

{
title:"Nova Loja",
date:"09/03/2026",
content:"A loja foi refeita com novos itens."
}

];

// função para criar posts
function criarPost(containerId, posts){

const container = document.getElementById(containerId);

posts.forEach(post => {

const card = document.createElement("div");
card.className = "post";

card.innerHTML = `
<h3>${post.title}</h3>
<p class="date">${post.date}</p>
<p>${post.content}</p>
`;

container.appendChild(card);

});

}

// DEVLOG = posts de dev + updates recentes
const devblogCompleto = [...devblogs, ...updates];

criarPost("devblogContainer", devblogCompleto);

// UPDATES = só updates
criarPost("updatesContainer", updates);
