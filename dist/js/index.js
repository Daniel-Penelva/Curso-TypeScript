"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var num = 10;
num = 12;
console.log('Valor numerico:' + num);
//---------------------- 
var firstName = 'Daniel';
var age = 34;
var isAdmin = true;
console.log("Define o tipo: " + typeof firstName);
console.log("Nome:" + firstName + ' - idade: ' + age + " - Admin:" + isAdmin);
console.log("Letra caixa alta: " + firstName.toUpperCase);
//---------------------- Object
var myNumber = [1, 2, 3, 4, 5];
console.log("Array: " + myNumber);
console.log("Tamanho do array: " + myNumber.length);
myNumber.push(6);
console.log("Adiciona um novo valor no array: " + myNumber);
//---------------------- Tuplas
var myTuple;
myTuple = [34, 'Daniel', ['typescript', "java", "php", "phyton"]];
console.log(myTuple);
//---------------------- Object Literals
var user = {
    name: 'Pedro',
    age: 18
};
console.log(user);
console.log("Nome: " + user.name + " - Idade: " + user.age);
//---------------------- any
var a = 0;
a = 'teste';
a = 10;
a = true;
a = ['João', 19, 1.98];
console.log("Utilizando o any: " + a);
//---------------------- union type - pode ser tanto string quanto number
var id;
id = 10;
console.log("Sendo number: " + id);
id = '20';
console.log("Sendo String: " + id);
var userId = 10;
var productId = 100;
var shirId = 30;
console.log("Type Alias: " + userId + " - " + productId + " - " + shirId);
//---------------------- enum
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "m\u00E9dio";
    Size["G"] = "grande";
    Size["GG"] = "Super grande";
})(Size || (Size = {}));
var camisa = {
    modelo: "camisa gola V",
    tamanho: Size.G
};
var calca = {
    modelo: "calça de jeans",
    tamanho: Size.M
};
console.log("Modelo da camisa: ", camisa.modelo, " - Tamanho da camisa: ", camisa.tamanho);
console.log("Modelo da calça: ", calca.modelo, " - Tamanho da calça: ", calca.tamanho);
//---------------------- funções
// Exemplo 1
function soma(a, b) {
    return a + b;
}
console.log("Resultado da soma =" + soma(10, 20));
// Exemplo 2
function sayHelloTo(n) {
    // Não é aspas simples e sim acento!!!
    return "Ol\u00E1, " + n;
}
console.log(sayHelloTo("Fabiana"));
// Exemplo 3 - sem retorno
function logger(msg) {
    console.log(msg);
}
logger('Teste!');
// Exemplo 4 - propriedade opcional (?)
function greeting(name, greet) {
    if (greet) {
        console.log("Ol\u00E1 " + greet + " " + name);
        return;
    }
    console.log("Ol\u00E1 " + name);
}
greeting("josé");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 10, n2: 3 }));
// Reaproveitando os dados
function multNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multNumbers({ n1: 10, n2: 3 }));
// Exemplo 2
function doSomething(info) {
    if (typeof info === 'number') {
        console.log("O n\u00FAmero \u00E9 " + info);
        return;
    }
    console.log('Não foi passado número!');
}
doSomething(10);
doSomething(true);
//---------------------- generics
function showArraysItems(arr) {
    arr.forEach(function (item) {
        console.log("ITEM: " + item);
    });
}
var a1 = [1, 2, 3, 4];
var a2 = ['a', 'b', 'c', 'd'];
showArraysItems(a1);
showArraysItems(a2);
//---------------------- classes
var User = /** @class */ (function () {
    function User(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    User.prototype.showUserName = function () {
        console.log("O nome do usu\u00E1rio \u00E9 " + this.name);
    };
    User.prototype.showUserRole = function (canShow) {
        if (canShow) {
            console.log("Role do usu\u00E1rio \u00E9 " + this.role);
            return;
        }
        console.log("Informação restrita!");
    };
    return User;
}());
var Zeca = new User("Zeca", "Admin", true);
console.log(Zeca);
Zeca.showUserName();
Zeca.showUserRole(true);
Zeca.showUserRole(false);
var Car = /** @class */ (function () {
    function Car(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    Car.prototype.showBraind = function () {
        console.log("A marca do carro \u00E9 " + this.brand);
    };
    return Car;
}());
var fusca = new Car("VW", 4);
fusca.showBraind();
//---------------------- Herança
var SuperCars = /** @class */ (function (_super) {
    __extends(SuperCars, _super);
    function SuperCars(brand, wheels, engine) {
        var _this = _super.call(this, brand, wheels) || this;
        _this.engine = engine;
        return _this;
    }
    return SuperCars;
}(Car));
var ferrari = new SuperCars("Ferrari", 4, 12.0);
console.log(ferrari);
ferrari.showBraind();
//---------------------- Decorators
function baseParamters() {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.id = Math.random();
                _this.createdAt = new Date();
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person = __decorate([
        baseParamters()
    ], Person);
    return Person;
}());
var sam = new Person("Sam");
console.log(sam);
