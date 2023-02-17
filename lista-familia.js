const casa = [
    {
        nome: "sheyla",
        sobrenome: "ribeiro",
        "coisas favoritas": ["família", "filmes", "música"],
    },
    {
        nome: "carol",
        sobrenome: "alves",
        "coisas favoritas": ["chuva", "instrumentos musicais", "cultura pop"],
    },
    {
        nome: "lucas",
        sobrenome: "ribeiro",
        "coisas favoritas": ["jogar", "viver", "lutar"],
    },
    {
        nome: "mateus",
        sobrenome: "ribeiro",
        "coisas favoritas": ["ilustrar", "cachorros", "arroz doce"],
    },
    {
        nome: "budweiser",
        sobrenome: "ribeiro",
        "coisas favoritas": ["mamãe", "brincar", "comer", "dormir", "latir para os inimigos!"],
    },
    {
        nome: "polnareff",
        sobrenome: "ribeiro",
        "coisas favoritas": ["carinho na cabeça", "pular pelo quintal", "roer a sandália dos meus donos", "roubar comida do bud"],
    },
    {
        nome: "stella",
        sobrenome: "artois",
        "coisas favoritas": ["COMER", "carinho", "rosnar para o bud", "roubar comida do bud e do polnareff"],
    },
]

function pesquisa(nome, prop) {
    for (var i = 0; i< casa.length; i++){
        if (casa[i].nome === nome) {
            return casa[i][prop] || "Essa propriedade não existe."
        }
    }

    return "Esse nome não está na lista"
}

var data = pesquisa("polnareff", "coisas favoritas");

console.log(data);