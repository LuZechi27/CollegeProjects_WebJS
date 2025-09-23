//EX1 . CONVERSOR DE NÚMERO DE TELEFONE

function converter(str, numList, key)
{
    let num = "";
    console.log(num);
    for (let i = 0; i < str.length; i++)
    {
        console.log(str[i]);
        if (numList.includes(parseInt(str[i]))) {
            num += str[i];
            console.log(num);
        }
        else 
        {
            for (let j = 0; j < key.length;j++)
            {
                if (key[j].includes(str[i]))
                    num += numList[j];
                console.log[num];
            }
        }
    }
    return num;
}

function Main()
{
    let string = prompt("Digite o texto para transformar em um número de telefone");

    let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

    let phoneKey = [["a","b","c","A","B","C"],["d","e","f","D","E","F"],["g","h","i","G","H","I"],
    ["j","k","l","J","K","L"],["m","n","o","M","N","O"],["p","q","r","s","P","Q","R","S"],
    ["t","u","v","T","U","V"],["w","x","y","z","W","X","Y","Z"],[" "]];

    let newNumber;

    newNumber = converter(string, numbers, phoneKey);

    alert(newNumber);
}
Main();