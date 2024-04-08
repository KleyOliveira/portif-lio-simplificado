// /*
// - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

//   Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
//   Passo 2 - identificar o clique no botão
//   Passo 3 - adicionar a classe ativo nos projetos escondidos

// - Objetivo 2 - esconder o botão de mostrar mais

//   Passo 1 - pegar o botão e esconder ele 
// */

// // Variavel chamando o botão que tem o nome da classe de btn-mostrar-projetos no HTML
// const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
// const projetosInativos = document.querySelector('.projeto:not(.ativo)');

// // Quando o botão que o nome da de btn-mostrar-projetos no HTML for clicada, é pra aquele botão de evento fazer algo no site, no caso mostrar o restante do projetos
// botaoMostrarProjetos.addEventListener('click', () => {
//     mostrarMaisProjetos();
//     esconderBotao();
// });

// function esconder(){
//     botaoMostrarProjetos.classList.add('remover');
// }

// function mostrarMaisProjetos(){
//     projetosInativos.forEach(projetosInativos =>{
//         projetosInativos.classList.add('ativo');
//     });
// }


/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão
        
        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();

    // Objetivo 2 - esconder o botão de mostrar mais
    // Passo 1 - pegar o botão e esconder ele
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}









