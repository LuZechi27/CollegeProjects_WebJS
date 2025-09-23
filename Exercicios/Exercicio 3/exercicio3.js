//EX3 . GERADOR DE CAMPO MINADO

function getPosition(num)
{
    //Função para pegar as posicoes das minas
    /*
    recebe um numero de dois dígitos (Ex: 35), e retorna os numeros
    separados em uma lista, menos um (index) (Ex: 35 => [2, 4])
    */

    //se for undefined, retorna index negativo para tratamento de erro.
    if (num == undefined)
    {
        return [-1, -1];
    } else {
        let x;
        let y;
        y = num % 10; //resto da divisao por 10.
        x = (num - y) / 10; //basicamente uma divisao inteira ("//" no python).
        return [x-1, y-1];
    }
}

function generateBlankField(size)
{
    //Gera um campo "em branco" de tamanho "size" (preenxido com zeros).

    let blankfield = [];
    for (let i = 0; i < size; i++)
    {
        let row = [];
        for (let j = 0; j < size; j++)
        {
            row.push(0);
        }
        blankfield.push(row);
    }
    return blankfield;
}

function generateField(str)
{
    //Gera o campo minado.

    let field = [];
    let data = str.split(";"); //é a informacao necessaria extraida da string informada.
    let pos;
    let size = data[0]; //o primeiro elemento da string representa o tamanho.

    field = generateBlankField(size); //pega o campo "em branco" para preencher com as minas.

    for (let i = 1; i < data.length; i++)
    {
        pos = getPosition(parseInt(data[i])) //pega as posicoes das minas com base no numero dado.
        if (pos == [-1, -1])
        {
            console.log("Erro: undefined / coordenada inválida");
            console.log(i);
            //Tratamento de erro em caso de undefined. ("""Tratamento""").
        } else
        {
            field[pos[0]][pos[1]] = "X" //posiciona a mina na posicao indicada.
            for (let x = -1; x <= 1; x++)
            {
                for (let y = -1; y <= 1; y++)
                {
                    //varre as casas em volta da mina.
                    let x_ = pos[0] + x;
                    let y_ = pos[1] + y;

                    if ((x_ >= 0) && (x_ < size) && (y_ >= 0) && (y_ < size))
                    {
                        //se as coordenadas estao no limite da lista...
                        let currentPos = field[x_][y_];
                        if (currentPos != "X")
                        {
                            //...e se a posicao atual nao for uma mina, incrementa 1 na posicao.
                            field[x_][y_] += 1;
                        }
                    }
                }
            }
        }
    }
    return field; //retorna o campo minado completo.
}

let string = prompt("Insira a string geradora");
let campoMinado = generateField(string);

console.table(campoMinado);