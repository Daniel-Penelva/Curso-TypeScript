
// Funções

function oi(): void{
    console.log('oi')
}

function nome(): string{
    return 'Daniel'
}

function soma(): number{
    
    let soma, num1, num2: number
    num1 = 10, num2 = 20

    soma = num1 + num2
    return soma
}

function nomeCompleto(nome: string, sobrenome:string):string{
    nome = 'Daniel'
    sobrenome = 'Penelva'
    return 'Seu nome completo é:' + nome + ' ' + sobrenome
}

// O TypeScript consegue deduzir que a função é do tipo number, já que seus parâmetros recebem um tipo number
function subtracao(num1:number, num2:number){
    num1 = 10
    num2 = 5

    let subtracao = num1 - num2
    return subtracao
}

// Função com seta (arrow function)
const multiplicacao = (num1:number, num2:number): number => num1 + num2

const divisao = (num1:number, num2:number) =>{
    
    num1 = 10, num2 = 5
    let divisao = num1/num2
    num1 + num2
} 