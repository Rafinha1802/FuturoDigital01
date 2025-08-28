let times = ["Flamengo", "Palmeiras", "Corinthians", "São Paulo"];

let ultimoTime = times[times.length - 1];

console.log(ultimoTime); 

let minhaListaDeTarefas = [];

minhaListaDeTarefas.push("Comprar pão");
minhaListaDeTarefas.push("Estudar JavaScript");
minhaListaDeTarefas.push("Fazer exercícios");

console.log(minhaListaDeTarefas);

let animais = ["Cachorro", "Gato", "Leão", "Elefante", "Pássaro"];

for (let i = 0; i < animais.length; i++) {
    console.log("O animal na posição " + i + " é " + animais[i]);
}

let numeros = [7, 12, 5, 20, 15, 8, 3, 22, 11, 4];

for (let i = 0; i < numeros.length; i++) {
    
    if (numeros[i] % 2 === 0) {
        console.log("Número par encontrado: " + numeros[i]);
    }
}

let frutas = ["maçã", "banana", "uva", "morango", "abacaxi"];

let i = 0;
while (i < frutas.length) {
    console.log("Fruta: " + frutas[i]);
    i++;
}

console.log("Fim do Desafio!");

for (let i = 2; i <= 9; i++) {
    console.log("Tabuada do " + i);

    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }

    console.log("---------------"); 
}