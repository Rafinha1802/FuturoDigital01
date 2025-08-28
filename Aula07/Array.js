let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let perguntas = [
    "Nome: ",
    "Data de nascimento (dd/mm/aaaa): ",
    "Email: ",
    "Telefone: ",
    "Você tem animal de estimação? (sim/não): ",
    "Qual animal? ",
    "Você já morou fora do país? (sim/não): ",
    "Onde você mora atualmente? ",
    "Qual sua profissão/ocupação? ",
    "Qual seu Hobby?",
    "Qual a sua sexualidade?",
    "Qual sua cor favorita?",
    "Você prefere comida doce ou salgada?",
    "Você tem alergia a alguma comida? (sim/não): ",
    "Qual comida? "
    
];

let campos = [
    "nome",
    "dataNascimento",
    "email",
    "telefone",
    "temAnimal",
    "animal",
    "morouFora",
    "cidadeAtual",
    "profissao",
    "Hobby",
    "sexualidade",
    "cor",
    "comida",
    "temAlergia",
    "alergia"
];

let respostas = {};
let index = 0;

let perguntar = function () {
    if (index < perguntas.length) {
        rl.question(perguntas[index], function (resposta) {
            respostas[campos[index]] = resposta;

            // Se respondeu "não" para animal, pula a próxima pergunta
            if (campos[index] === "temAnimal" && resposta.toLowerCase() == "não") {
                index++; 
            }
              if (campos[index] === "temAlergia" && resposta.toLowerCase() == "não") {
                index++; 
            }

            index++;
            perguntar();
        });
    } else {
        console.log("\n------ Formulário Preenchido ------");
        for (let campo in respostas) {
            console.log(campo + ": " + respostas[campo]);
        }
        console.log("-----------------------------------");
        rl.close();
    }
};

console.log("------ Formulário (usuário) ------");
perguntar();