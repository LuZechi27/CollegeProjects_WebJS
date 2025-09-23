//===============================================================================

var promp = prompt("Digite um número positivo");
var n = parseInt(promp);
var resp;

while ((n == "") || ( !n ) || (n <= 0)) {
    alert("isso não é um número positivo.")
    promp = prompt("Digite um número positivo");
    n = parseInt(promp);
}
if ((n != "") && n && (n > 0)) {
    resp = conta(n);
    console.log("Quantidade de números = "+ resp);
}

function conta(x) {
    var contador = 1;
    var soma = x;
    console.log(x);
    while (x > 1) {
        if (x % 2 != 0) {
            x = 3*x + 1;
        } else {
            x = x/2;
        }
        contador++;
        soma += x;
        console.log(x);
    }
    var media = soma/contador;
    console.log("Média = "+ media);
    return contador;
}