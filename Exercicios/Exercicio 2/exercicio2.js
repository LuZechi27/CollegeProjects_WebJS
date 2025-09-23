//EX2 . PROCESSAMENTO DE DADOS

function listClients(input)
{
    let list = [];

    list = input.map((element) => {
        let name = element[1];
        let total = element[3].reduce((acc, val) => {
            let tot = acc += val[1];
            return tot;
        }, 0);
        return [name, total, element[3].length];
    });
    return list;
}

//adicionei essa função pois não sabia comparar arrays.
function existArray(array, subarray)
{
    let output = false;

    array.forEach((item) => {
        let answ = true;
        item.forEach((val, i) => {
            if (val != subarray[i])
                answ = false;
        });
        if (answ)
        {
            output = true;
        }
    });

    return output;
}

function listProductsSorted(input)
{
    let products = [];

    input.forEach((val) => {
        let prod = val[3];
        prod.forEach((val) => {
            if (!existArray(products, val))
            {
                products.push(val);
            }
        })
    });
    products.sort((a, b) => b[1] - a[1]);
    return products;
}

function getTotal(input)
{
    let total = input.reduce((acc, item) => {
        if (item[2])
        {
            let subTotal = item[3].reduce((acc2, val) => { return acc2 += val[1] }, 0);
            return acc += subTotal;
        }
        return acc;
    }, 0);
    return total;
}

function getDebtor(input)
{
    let output = [];
    let debt = input.filter((item) => {
        return !item[2];
    });
    output = debt.map((item) => {
        let newItem = item.map((subItem, i) => {
            if (i == 3)
            {
                return subItem.reduce((tot, val) => tot += val[1], 0);
            }
            return subItem;
        })
        return newItem;
    });
    return output;
}

function Main()
{
    /*
    [id, nome, pago|nao-pago, [[nome item, valor item, tipo item], ...]]
    */

    const pedidos = [
        [1, "Alice", true, [["Teclado Mecânico", 300, "Periféricos"], ["Mouse Gamer", 200, "Periféricos"]]],
        [2, "Bruno", false, [["Monitor 27''", 1500, "Monitores"]]],
        [3, "Carla", true, [["Notebook i7", 4800, "Computadores"]]],
        [4, "Daniel", true, [["Cadeira Gamer", 1200, "Móveis"], ["Mousepad XL", 100, "Acessórios"]]],
        [5, "Eduarda", true, [["Monitor Ultrawide", 2500, "Monitores"], ["Suporte para Monitor", 300, "Acessórios"]]],
        [6, "Fernando", true, [["Placa de Vídeo RTX 4060", 3200, "Hardware"]]],
        [7, "Gabriela", false, [["Impressora", 800, "Periféricos"]]],
        [8, "Henrique", true, [["Gabinete RGB", 600, "Hardware"], ["Fonte 750W", 700, "Hardware"]]],
        [9, "Isabela", true, [["SSD 1TB", 900, "Armazenamento"], ["Memória RAM 16GB", 500, "Hardware"]]],
        [10, "João", true, [["Headset Sem Fio", 650, "Periféricos"]]]
    ];

    let clients = listClients(pedidos);
    let produtos = listProductsSorted(pedidos);
    let total = getTotal(pedidos);
    let devedores = getDebtor(pedidos);

    console.log("1)=====================================");

    clients.forEach((cliente) => {
        console.log("cliente: " + cliente[0]);
        console.log("Total comprado: " + cliente[1]);
        console.log("Total de items comprados: " + cliente[2]);
        console.log("\n");
    });
    console.log("2)=====================================");
    
    produtos.forEach((produto) => {
        console.log("Nome do produto: " + produto[0]);
        console.log("Preço: " + produto[1]);
        console.log("Categoria: " + produto[2]);
        console.log("\n");
    });
    console.log("3)=====================================");

    console.log("Total das vendas: " + total);
    console.log("\n");

    console.log("4)=====================================");

    devedores.forEach((devedor) => {
        console.log("Nome do devedor: " + devedor[1]);
        console.log("Valor da dívida: " + devedor[3]);
        console.log("\n");
    });
}
Main();



