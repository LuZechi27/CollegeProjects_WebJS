//1 - Imprima o nome do produto mais caro.
function getMOstExpensive(data) {
	let objMostExpensive;
	for (let i = 0; i < data.length; i++) {
		let items = data[i].itens;
		let mostExpensive;
		for (let j = 0; j < items.length; j++) {
			if (j == 0) {
				mostExpensive = items[j];
			} else {
				if (items[j].valor > mostExpensive.valor)
					mostExpensive = items[j];
			}
		}
		if (i == 0) {
			objMostExpensive = mostExpensive;
		} else {
			if (objMostExpensive.valor < mostExpensive.valor)
				objMostExpensive = mostExpensive;
		}
	}
	return objMostExpensive.nome;
}

//2 - Imprima o nome da pessoa que tem os itens mais baratos.
function getCheapestPerson(data) {
	let cheapestPerson = data.reduce(function choosePerson(prevValue, currValue) {

	})
}

let data = [
	{
		id: 1,
		nome: "Ana",
		itens: [
			{
				id: 1,
				nome: "Chapéu",
				valor: 200
			},
			{
				id: 2,
				nome: "Bolsa",
				valor: 350
			},
			{
				id: 4,
				nome: "Carteira",
				valor: 180
			}
		]
	},
	{
		id: 2,
		nome: "Carlos",
		itens: [
			{
				id: 3,
				nome: "Relógio",
				valor: 1200
			},
			{
				id: 4,
				nome: "Carteira",
				valor: 180
			}
		]
	},
	{
		id: 3,
		nome: "Beatriz",
		itens: [
			{
				id: 5,
				nome: "Colar",
				valor: 500
			},
			{
				id: 6,
				nome: "Pulseira",
				valor: 250
			},
			{
				id: 7,
				nome: "Óculos de Sol",
				valor: 600
			},
			{
				id: 10,
				nome: "Tênis",
				valor: 250
			}
		]
	},
	{
		id: 4,
		nome: "Diego",
		itens: [
			{
				id: 8,
				nome: "Notebook",
				valor: 3500
			},
			{
				id: 9,
				nome: "Mochila",
				valor: 220
			},
			{
				id: 10,
				nome: "Tênis",
				valor: 250
			}
		]
	}
]

console.log(getMOstExpensive(data));