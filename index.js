"use strict";
// Basic Types
let id = 5;
let company = 'Everton Media';
let isPublished = true;
let x = 'Hello';
let age;
age = 29;
let ids = [1, 2, 3, 4, 5];
ids.push(7);
let arr = [1, true, 'Hello'];
//Tuple | array of types
let person = [1, 'Ty', true];
//Tuple Array | specifies multiple types required within the array
let employee;
employee: [
    [1, 'Ty'],
    [2, 'Traysen'],
    [3, 'Lane']
];
//Union | allows for multiple types. This one allows for string and numbers
let pid = 22;
//pid = product id
pid = '22';
// Enums | allows to define a constance, numberic or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
const user = {
    id: 1,
    name: "Ty"
};
//Type Assertion | tells compiler we want ot treat an entity as a different type
let cid = 1;
// let customerId = <number>cid
// let customerId = cid as number
// line 62 and 63 do the same thing
//Functions | function parameters need a type unless noImplicitAny = false. The line on 68 states that x and y have a type of number, their added result also has a type of number
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 3));
//Void
function log(message) {
    console.log(message);
}
log('Hello');
const user1 = {
    id: 1,
    name: "Ty",
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes | "this" means this current instance 
// Protected means that you can only access the property within the class, or a class that has been extended within the original class
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered as ${this.id}.`;
    }
}
const ty = new Person(1, 'Ty Everton');
const traysen = new Person(2, 'Traysen Andersen');
console.log(ty, traysen);
console.log(ty.register());
class Employee extends Person {
    constructor(position, id, name) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Ty', 'Developer');
console.log(emp.name);
// Generics | used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray(1, 2, 3, 4, 5);
let stringArray = getArray(['ty', 'traysen', 'john']);
