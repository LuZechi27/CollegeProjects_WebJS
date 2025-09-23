//===================================================================================================
var temp1;
var temp2;
var far;
var celMaior;
var celMenor = prompt("Digite a menor temperatuda");

while ((celMenor == "")||(!parseInt(celMenor))) {
    alert("Número inválido!");
    celMenor = prompt("Digite a menor temperatuda");
}
if ((celMenor != "")&&(parseInt(celMenor))) {
    celMaior = prompt("Digite a maior temperatura");

    while ((celMaior == "")||(!parseInt(celMaior))||(parseInt(celMaior) <= parseInt(celMenor))) {
        alert("Número inválido!");
        celMaior = prompt("Digite a maior temperatura");
    }
    if ((celMaior != "")&&(parseInt(celMaior))) {
        temp1 = parseInt(celMenor);
        temp2 = parseInt(celMaior);

        while (temp1 <= temp2) {
            far = (temp1*9/5) + 32;
            console.log(temp1 + " graus C é " + far + " graus F");
            temp1++;
        }
    }
} else {
    alert("Erro");
}