
// Generics <T>
//Pode estipular um valor padrão que no caso é Aluno
type Pessoa<T = Aluno> = {
    nome: String
    idade: number
    carro?: string
    profissao: T
}

type Aluno = {
   matricula:string
}

interface Engenheiro {
    crea:string
}

interface Medico {
    crm: string
}

let medico: Pessoa<Medico>
let engenheiro: Pessoa<Engenheiro>

// Como é um valor padrão não precisa especificar o tipo como aluno, uma vez que já é aluno
let aluno: Pessoa

