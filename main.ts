
// Campo opcional (?)
// Por exemplo, toda pessoa tem um carro?
interface Pessoa{
    nome: String
    idade: number
    carro?: string
}

type Aluno = Pessoa &{
   curso:string
   periodo:number
}

let aluno: Aluno

// O carro por ser um campo opcional não é preciso inseri-lo na variavel aluno
aluno = {nome:'Daniel', idade: 34, curso:'Ciencia da Computação', periodo: 3}

// Pode deixar o campo carro com o valor undefined
// aluno = {nome:'Daniel', idade: 34, curso:'Ciencia da Computação', periodo: 3, carro: undefined}