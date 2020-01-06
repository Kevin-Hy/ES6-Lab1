//Exercise 1 - ES6 Syntax
const greetText = 'Hello ';
let gretter = (myArray, counter) =>{
    for(let index of myArray){
        console.log(greetText + index);
    }

}
gretter(['Randy Savage','Ric Flair','Hulk Hogan'],3);

//Exercise 2 - Capitalize First Letter
const words = ['fooBar','nodeJs'];
const capitalize = ([first, ...rest]) =>{
    return first.toUpperCase()+rest;
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//Exercise 3 - Capitalize Color Names
const colors =['red','green','blue']
console.log(colors.map(capitalize)) 

//Exercise 4 - Filter Values
var values = [1,60,34,30,20,5]
const filterLessThan20 = values.filter(values => values<20);
console.log(filterLessThan20);

//Exercise 5 - Calculate sum/product
var array = [1,2,3,4]
const calculateSum =(accumulator,currentValue) => accumulator + currentValue;
const calculateProduct =(accumulator,currentValue) => accumulator * currentValue;

console.log(array.reduce(calculateSum));
console.log(array.reduce(calculateProduct));

//Exercise 6 - Class and Subclasses
class Car{
    constructor(name,year){
        this.name = name;
        this.year=year;
    }
    details(){
        return "Model: " +this.name +" "+this.year;
    }
}

class Sedan extends Car{
    constructor(name, year,balance){
        super(name, year);
        this.balance = balance;
    }
    info(){
        return this.name + " has a balance of $"+this.balance; 
    }
}
const car2 = new Car('Pontiac Firebird', 196);
console.log(car2.details());
//Subclass - extends Car super class
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());



