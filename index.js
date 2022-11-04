const botaoMenu = document.querySelector(".cabecalho__menu");
const menu = document.querySelector(".menu-lateral");


botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-lateral--ativo");
});




const botaoPerfil = document.querySelector(".cabecalho__perfil");
const opcoes = document.querySelector(".cabecalho-opcoes");

botaoPerfil.addEventListener("click", () => {
  opcoes.classList.toggle("cabecalho-opcoes--ativo");
});
