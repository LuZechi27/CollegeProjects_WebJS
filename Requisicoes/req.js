//=================================================

fetch("https://ifsp.ddns.net/webservices/carro/carro")
    .then((resposta) => {
        if (!resposta.ok) {
            throw new Error("Erro na requisição");
        }
        return resposta.json(); // deveria checar se é JSON ou não ****
    })
    .then((carros) => {
        for (let carro of carros) {
            console.log(carro);
        }
    })
    .catch((error) => {
        console.log(`Deu problema: ${error.message}`);
    });