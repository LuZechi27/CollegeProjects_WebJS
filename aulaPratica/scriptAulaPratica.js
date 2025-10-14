//================================================================================
function tratarClique(e) {
    let elemento = e.target;
    elemento.parentElement.innerHTML = "";
}

function tratarAnchor(e) {
    e.preventDefault();
    console.log("Tentou acessar o Google");
}

function tratarForm(e) {
    e.preventDefault();
    let input = document.querySelector("input");
    console.log(input.value);
    let nome = input.value;
    input.value = "Olá, " + nome;
    input.setAttribute("disabled", "");
}
//==================================================================================
function Main() {

    let botaoLista = document.querySelectorAll("li > button");
    for (let botao of botaoLista) {
        botao.addEventListener("click", tratarClique);
    }
    let ancora = document.querySelector("a");
    ancora.addEventListener("click", tratarAnchor);

    let form = document.querySelector("form");
    form.addEventListener("submit", tratarForm);
}
Main();