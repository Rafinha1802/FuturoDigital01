let readline = require('readline-sync')

//let nome = readline.question("qual é o seu nome?")
//console.log(`oi ${nome}`)

//let numero = 2
//let fruta = "banana"
  // or
//if(numero >= 2 || fruta == "banana"){
    //console.log("aprovado!")
//}else{
    //console.log("reprovado!")
//}
  // and
//if(numero >= 2 && fruta == "banana"){
    //console.log("aprovado!")
//}else{
    //console.log("reprovado!")
//}
let nome = readline.question("qual é o seu nome?")
console.log(`oi ${nome}`)

let numero = readline.question("Qual o ano que você nasceu?")
console.log(`que legal ${nome}!, você nasceu no ano ${numero}`)
let ano = 2025
let idade = ano - numero

if(idade>= 2000){
    console.log("pode ser preso! meus parabéns :D")
    console.log(`sua idade é ${idade}!`)
}else{
    console.log("ainda não pode ser preso, que pena :(")
    console.log(`sua idade é ${idade}!`)
}