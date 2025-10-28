//===================================================================================
try {
    let numero = prompt("Digite um numero");
    if (isNaN(numero)) {
        throw new Error("Valor digitado invalido");
    }
    console.log(`Valor digitado: ${numero}`);
} catch (error) {
    console.log(`Foi detectado um erro: ${error.message}`);
} finally {
    console.log("Tenha um bom dia");
}

function teste() {
    try {
        console.log("C");
        return "B";
    } catch (error) {
        console.log(`${error.message}`);
    } finally {
        console.log("F");
    }
}
console.log("A");
let valor = teste();
console.log(valor);
// A C F B 

try {
    let valor = prompt("Digite um numero");
    if (isNaN(valor)) {
        throw new TypeError();
    }
    if (valor <= 0) {
        throw new RangeError();
    }
    console.log(`Valor digitado: ${valor}`);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Erro de tipo");
    } else if (error instanceof RangeError) {
        console.log("Erro de intervalo");
    } else {
        console.log("Erro genérico");
    }
}

// Erro personalizado
class PessoaRemovida extends Error {
    constructor(msg = "", ...args) {
        super(msg, args);
    }
}

try {
    throw new PessoaRemovida("Pessoa não existe mais");
} catch (error) {
    if (error instanceof PessoaRemovida) {
        console.log(`Erro: ${error.message}`);
    } else {
        console.log("Erro genérico");
    }
}