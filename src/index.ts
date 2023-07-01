let num: number = 10;
num = 12;
console.log('Valor numerico:' + num);

//---------------------- 

let firstName: string = 'Daniel';
let age: number = 34;
const isAdmin: boolean = true;

console.log("Define o tipo: " + typeof firstName);

console.log("Nome:" +  firstName + ' - idade: ' + age + " - Admin:" + isAdmin);

console.log("Letra caixa alta: " + firstName.toUpperCase);

//---------------------- Object
const myNumber: number[] = [1, 2, 3, 4, 5]

console.log("Array: " + myNumber);
console.log("Tamanho do array: " + myNumber.length);

myNumber.push(6);
console.log("Adiciona um novo valor no array: " + myNumber);

//---------------------- Tuplas
let myTuple: [number, string, string[]];

myTuple = [34, 'Daniel', ['typescript', "java", "php", "phyton"]];

console.log(myTuple);

//---------------------- Object Literals

const user:{name:string, age:number} = {
    name: 'Pedro',
    age: 18
}

console.log(user);
console.log("Nome: " + user.name + " - Idade: " +user.age);

//---------------------- any
let a:any = 0;

a = 'teste';
a = 10;
a = true;
a = ['João', 19, 1.98];
console.log("Utilizando o any: " + a);

//---------------------- union type - pode ser tanto string quanto number
let id: string | number;
id = 10;
console.log("Sendo number: " + id);

id = '20';
console.log("Sendo String: " + id);

//---------------------- type alias
type myIdTiype = number | string;

const userId: myIdTiype = 10;
const productId: myIdTiype = 100;
const shirId: myIdTiype = 30;

console.log("Type Alias: " + userId + " - " + productId + " - " + shirId);

//---------------------- enum
enum Size{
P= "pequeno", 
M = "médio", 
G = "grande",
GG = "Super grande"
}

const camisa = {
    modelo: "camisa gola V",
    tamanho: Size.G 
}

const calca = {
    modelo: "calça de jeans",
    tamanho: Size.M
}

console.log("Modelo da camisa: ", camisa.modelo, " - Tamanho da camisa: ", camisa.tamanho);
console.log("Modelo da calça: ", calca.modelo, " - Tamanho da calça: ", calca.tamanho);

//---------------------- funções

// Exemplo 1
function soma(a:number, b:number){
    return a + b
}

console.log("Resultado da soma =" + soma(10,20));

// Exemplo 2
function sayHelloTo(n: string): string{

    // Não é aspas simples e sim acento!!!
    return `Olá, ${n}`;
}

console.log(sayHelloTo("Fabiana"));

// Exemplo 3 - sem retorno
function logger(msg: string): void{
    console.log(msg);
}

logger('Teste!');

// Exemplo 4 - propriedade opcional (?)
function greeting(name: string, greet?: string){
    if(greet){
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    
    console.log(`Olá ${name}`);
}

greeting("josé");
greeting("Pedro", "Sir");

//---------------------- interfaces 

interface MathFunctionParamns{
    n1: number, 
    n2: number
}

function sumNumbers(nums:MathFunctionParamns){
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1:10, n2:3}));

// Reaproveitando os dados
function multNumbers(nums: MathFunctionParamns){
    return nums.n1 * nums.n2;
}

console.log(multNumbers({n1:10, n2:3}));

// Exemplo 2
function doSomething(info: number | boolean){
    if(typeof info === 'number'){
        console.log(`O número é ${info}`);
        return;
    }

    console.log('Não foi passado número!');
}

doSomething(10);
doSomething(true);

//---------------------- generics
function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    })
}

const a1 = [1, 2, 3, 4];
const a2 = ['a', 'b', 'c', 'd'];

showArraysItems(a1);
showArraysItems(a2);

//---------------------- classes
class User{
    name
    role
    isApproved

    constructor(name:string, role:string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow:boolean){
        if(canShow){
            console.log(`Role do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }

}

const Zeca = new User("Zeca", "Admin", true);
console.log(Zeca);

Zeca.showUserName();
Zeca.showUserRole(true);
Zeca.showUserRole(false);

//---------------------- Interfaces em classes

interface IVehicle{
    
    brand: string;
    showBraind():void;
}

class Car implements IVehicle{

    brand
    wheels
 
    constructor(brand:string, wheels:number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBraind(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

const fusca = new Car("VW", 4);
fusca.showBraind();

//---------------------- Herança
class SuperCars extends Car{
    engine

    constructor(brand:string, wheels: number, engine: number){
        
        super(brand, wheels);
        this.engine = engine;
    }
}

const ferrari = new SuperCars("Ferrari", 4, 12.0);
console.log(ferrari);

ferrari.showBraind();


//---------------------- Decorators

// Vai ser inserido duas propriedades, id e data 
function baseParamters(){
    return function<T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@baseParamters()
class Person{
    name;

    constructor(name:string){
        this.name = name;
    }
}

const sam = new Person("Sam");
console.log(sam);
