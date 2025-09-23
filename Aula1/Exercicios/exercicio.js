//==========================================================================

function exercicio1(lista)
{
    //1 - Imprima a lista mantendo apenas os números POSITIVOS.
    let novaLista = [];

    for (listinha of lista) {
        let novaListinha = [];
        for (numero of listinha)
        {
            if (numero >= 0){
                novaListinha.push(numero)
            }
        }
        novaLista.push(novaListinha);
    }
    
    return novaLista;
}

function exercicio2(lista)
{
    //2 - Imprima a soma de todos os números da lista.
    let soma = 0;

    for (listinha of lista) {
        for (numero of listinha)
        {
            soma += numero;
        }
    }
    return soma;
}

function exercicio3(lista)
{
    //3 - Imprima a soma de todos os números POSITIVOS da lista.
    let soma = 0;

    for (listinha of lista) {
        for (numero of listinha)
        {
            if (numero >= 0){
                soma += numero;
            }
        }
    }
    return soma;
}

function exercicio4(lista)
{
    //4 - Imprima a lista de forma a exibir em cada item a soma dos valores da respectiva sublista.
    let novaLista = [];

    for (listinha of lista) {
        let soma = 0;
        for (numero of listinha)
        {
            soma += numero;
        }
        novaLista.push(soma);
    }
    return novaLista;
}

function exercicio5(lista)
{
    //5 - Faça o 4, mas some apenas os números positivos.
    let novaLista = [];

    for (listinha of lista) {
        let soma = 0;
        for (numero of listinha)
        {
            if (numero >= 0) {
                soma += numero;
            }
        }
        novaLista.push(soma);
    }
    return novaLista;
}

//=================================================================================
function separador(exercicio)
{
    console.log("\n===========================================");
    console.log("Exercicio" + exercicio);
}
//================================================================================
function main()
{
    let lista = [[1,2,3,-9,-8,-7,-6], [0,-5,3,-4], [1], [5,-5,5,-5,5,-5]];
    let resultado;

    separador("1");
    resultado = exercicio1(lista);
    console.log(resultado);
    
    separador("2");
    resultado = exercicio2(lista);
    console.log(resultado);

    separador("3");
    resultado = exercicio3(lista);
    console.log(resultado);

    separador("4");
    resultado = exercicio4(lista);
    console.log(resultado);

    separador("5");
    resultado = exercicio5(lista);
    console.log(resultado);
}
//=============================================================================
main();