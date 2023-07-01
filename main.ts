
// Interfaces

interface Pesoa{
    nome: String
    idade: number
}

let user:Pesoa

// Estendendo interface e interface

interface Aluno extends Pesoa{
    curso: string
    periodo:number
}

let aluno: Aluno

// Estendendo type e interface
type Carro = {
    chassi: number
}

interface Ferrari extends Carro{
    modelo: string
    ano: number
}

interface Porsche extends Carro{
    modelo: string
    ano: number
}

let ferrari: Ferrari
let porsche: Porsche

// estendendo type para type

type Fruta = {
    id: number
}

type Citrica = Fruta & {
    nome:String
}

type Acida = Fruta &{
    nome:String
}

let sitrica: Citrica 
let acida: Acida