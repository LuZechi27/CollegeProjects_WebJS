
//pega o valor do Webstorage.
let pessoas = localStorage.getItem("pessoas");
let nome = prompt("Nova pessoa:");
let lista;

//coloca nova pessoa na lista.
if (!pessoas) {
    lista = [nome];
} else {
    lista = JSON.parse(pessoas);
    lista.push(nome)
}

//salva a lista atualizada na sessao.
let pessoasSave = JSON.stringify(lista);
localStorage.setItem("pessoas", pessoasSave);

//imprime lista atualizada.
console.log(lista);