
// Union
// Determina os tipos do id. Vale ressalatar que não se limitar apenas dois tipos
//É possível inserir mais de dois tipos - ex: let id: number | string | boolean | string[]
let id: number | string 
id = 12345
id = '12345'

// Type Alias - exemplificando, trabalhando com vários ids
type Id = string | number

let id1: Id
let id2: Id
let id3: Id
let id4: Id

// Exemplo 2
type Usuario = {nome:string; idade:number}

let user: Usuario