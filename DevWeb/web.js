//===================================================================

// // parte 1

// //antigas
// document.getElementById("selector");
// document.getElementsByTagName("selector");
// document.getElementsByClassName("selector");

// //novas
// document.querySelector("selector css");
// document.querySelectorAll("selector css");

// //===============================

// parentElement
// nextElementSibling
// previousElementSibling
// children

let element = document.querySelector("button");
element = element.parentElement.parentElement.parentElement.parentElement.children[2];

// parte 2

function tratarClique(e) {
    console.log(element);
}

function naoClica(e) {
    alert("FALEI PRA NÃO CLICAR!!!!");
}

let botao = document.querySelector("Button");
botao.addEventListener("click", tratarClique);

let naoBotao = document.querySelector(".naoClica");
naoBotao.addEventListener("click", naoClica);



