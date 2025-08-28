let readline = require('readline-sync')

let conta = readline.question("Qual conta você quer fazer?")
let num1 = Number(readline.question("Qual o primeiro número?"))
let num2 = Number(readline.question("Qual o segundo número?"))

switch(conta){
    case "+":
        let soma = num1 + num2
        console.log(soma)
        break;
    case "-":
        let menos = num1 - num2
        console.log(menos)
        break;
    case "/":
        let div = num1/num2
        console.log(div)
        break;
    case "*":
        let mult = num1*num2
        console.log(mult)
        break;
    default:
        console.log("não é uma operação válida!")        
}


//let n1 = 10
//let n2 = 2

//switch(conta){
    //case  "soma" :
        //let soma = n1 + n2
       // console.log(soma)
        //break;
    //case "divisao":
        //let div = n1 / n2
        //console.log(div)
        //break;
    //case "menos" :
        //let menos = n1 - n2
        //console.log(menos)
        // break;
    //case "multiplicacao":
        //let mult = n1 * n2
        //console.log(mult)
        //break;
    //default:
       // console.log("Eu não conheço")    
//}