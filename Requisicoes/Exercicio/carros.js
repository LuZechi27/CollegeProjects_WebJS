//============================================================
function listarCarros(carros) {
    let lista = document.querySelector("ul");
    let elementoCarro;
    for (let carro of carros) {
        elementoCarro = document.createElement("li");
        elementoCarro.innerText = carro.nome;
        lista.append(elementoCarro);
    }
}

function carregarCarros() {
    fetch("https://ifsp.ddns.net/webservices/carro/carro")
        .then((resposta) => {
            if (!resposta.ok) {
                throw new Error("Erro na requisição");
            }
            return resposta.json(); // deveria checar se é JSON ou não ****
        })
        .then(listarCarros)
        .catch((error) => {
            console.log(`Deu problema: ${error.message}`);
        });
}

function cadastrarCarro() {
    const options = {
        method: "POST",
        body: JSON.stringify({
            nome: "Chiron",
            fabricante: "Bugatti",
            ano: 2020,
            preco: 16120000,
            potencia: 1500
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch("https://ifsp.ddns.net/webservices/carro/carro", options)
        .then((resposta) => {
            if (!resposta.ok) {
                throw new Error("Erro na requisição");
            }
            return resposta.json(); // deveria checar se é JSON ou não ****
        })
        .then((carro) => {
            console.log(carro);
        })
}
let botaoCarregar =  document.querySelector(".Carregar");
botaoCarregar.addEventListener("click", carregarCarros);