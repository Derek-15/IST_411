"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'CodeVolution';
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
isNew = true;
//Both make arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//mixed type arrays
var person1 = ['chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//any when you don't know what the type is
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
//union of types
var multiType;
multiType = 20;
multiType = true;
//? makes optional parameter
// optional have to be after requried
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return manager;
}(Employee));
var m1 = new manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
