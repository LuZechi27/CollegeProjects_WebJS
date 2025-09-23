//==========================================================

function somador(acc, val) {
    return acc + val;
}

function somadorPositivo(acc, val) {
    if (val >= 0) {
        return acc + val;
    }
    return acc;
}

function exe1(entrada)
{
    //1 - Imprima a lista mantendo apenas os números POSITIVOS.
    let resultado = [];
    resultado = entrada.map((sublista) => {
        return sublista.filter((val) => {
            if (val >= 0) {return true;} else { return false;}
        })
    })
    return resultado;
}

function exe2(entrada)
{
    //2 - Imprima a soma de todos os números da lista.
    let soma = 0;
    soma = entrada.map((sublista) => sublista.reduce(somador)).reduce(somador);
    return soma;
}

function exe3(entrada)
{
    //3 - Imprima a soma de todos os números POSITIVOS da lista.
    let soma = 0;
    soma = entrada.map((sublista) => sublista.reduce(somadorPositivo)).reduce(somador);
    return soma;
}

function exe4(entrada)
{
    //4 - Imprima a lista de forma a exibir em cada item a soma dos valores da respectiva sublista.
    let resultado = [];
    resultado = entrada.map((sublista) => sublista.reduce(somador));
    return resultado;
}

function exe5(entrada)
{
    //5 - Faça o 4, mas some apenas os números positivos.
    let resultado = [];
    resultado = entrada.map((sublista) => sublista.reduce(somadorPositivo));
    return resultado;
}

function main()
{
    let lista = [[1,2,3,-9,-8,-7,-6], [0,-5,3,-4], [1], [5,-5,5,-5,5,-5]];

    console.log("\nExercicio 1 : ", exe1(lista));
    console.log("\nExercicio 2 : ", exe2(lista));
    console.log("\nExercicio 3 : ", exe3(lista));
    console.log("\nExercicio 4 : ", exe4(lista));
    console.log("\nExercicio 5 : ", exe5(lista));
}
main();

console.log("\n\ntestes\n");

let lista = [[1,2,3,-9,-8,-7,-6], [0,-5,3,-4], [1], [5,-5,5,-5,5,-5]];

let novaLista = lista.reduce((acc, sublista) => {
    let resultado = sublista.reduce(somador, 0);
    return acc + resultado;
}, 0);

console.log(novaLista);