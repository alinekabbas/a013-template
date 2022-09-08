//const idade = Number (prompt('Qual é a sua idade?'))

//Correção
//If aninhado

// if(idade >=13){
//     if(idade <= 17){
//         console.log('Seu dependente já pode ter um cartão de crédito vinculado ao seu')
//     }else {
//         console.log('Consulte outras possibilidades do Labank')
//     }

// }else {
//     console.log('Consulte outras possibilidades do Labank')
// }

//Com operador lógico (correto)

// if (idade >=13 && idade <= 17){
//     console.log('Seu dependente já pode ter um cartão de crédito vinculado ao seu')
// }else{
//     console.log('Consulte outras possibilidades do Labank')
// }

//if ternário

// idade === 13 ? console.log('A idade do dependente é 13 e já pode ter um cartão') : console.log('Verifique as opções possíveis')

//switch-case

// const opcaoDiscada = Number (prompt("Digite a opção desejada: \n1. para Fácil \n2. para Black \n3. para Platinum \n4. para Master Gold"))

// switch(opcaoDiscada){
// 	case 1:
// 		console.log("Fácil")
// 		break;
// 	case 2:
// 		console.log("Black")
// 		break
// 	case 3:
// 		console.log("Platinum")
// 		break
// 	case 4:
// 		console.log("Master Gold")
// 		break
// 	default:
// 		console.log('Escolha umas das quatro opções disponíveis');	
// }

//Exercicio de fixação

// 1. Crie um código que receba um número por prompt e verifique se um número é divisível por 2 e por 3.
const numero = Number(prompt("Digite um número"))

//Faça isso:

// Utilizando ifs aninhados
if (numero % 2 === 0) {
    if (numero % 3 === 0) {
        console.log(numero)
    } else {
        console.log('Este número não é divisível por 2 e 3')
    }
} else {
    console.log('Este número não é divisível por 2 e 3')
}

// Utilizando um operador lógico para unir duas operações relacionais

if (numero % 2 === 0 && numero % 3 === 0) {
    console.log(numero)
    numero === 30 ? console.log('UFA ACERTEI!') : console.log('não foi dessa vez :(')
    switch (numero) {
        case 6:
            console.log("Você escolheu o número 6.");
            break;
        case 12:
            console.log("Você escolheu o número 12.");
            break;
        case 18:
            console.log("Você escolheu o número 18.");
            break;
        case 24:
            console.log("Você escolheu o número 24.");
            break;
        case 30:
            console.log("Você escolheu o número 30.");
            break;
        default:
            console.log('O número é maior que 30 ou menor que 6');
    }
} else {
    console.log('Este número não é divisível por 2 e 3')
}

//2. switch-case (acima)


//3. Ainda dentro do if do exercício anterior, crie estrutura de switch case que verifique se o número é 6, 12, 18, 24 ou 30 e imprima uma mensagem diferente para cada número

