
let pessoa = {
    nome: "Ana",
    altura: 1.72,
    data_de_nascimento: "10/10/2010",
    viva: true,
    pai: {
        nome: "José",
        altura: 1.78,
        data_de_nascimento: "01/05/1982",
        viva: false
    },
    pets: [
        {
            nome: "esqueci",
            raca: "Caramelo"
        },
        {
            nome: "Lola",
            raca: "Lulu da pomerânia"
        }
    ]
}

//console.log(pessoa.pets[1].raca);

//add mãe

pessoa.mae = {
    nome: "Jéssica",
    altura: 1.70,
    data_de_nascimento: "04/06/1984",
    viva: true
}

//console.log(pessoa);

//add pet novo

pessoa.pets.push({
    nome: "Obama",
    raca: "Vira-lata"
})

delete pessoa.altura;
console.log(pessoa);

