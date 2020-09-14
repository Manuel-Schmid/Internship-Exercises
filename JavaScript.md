# JavaScript Zusammenfassung

## Allgmeine Befehle
<br>
Konsolenausgabe

    console.log(5); //-> 5
    console.log('Max'); //-> Max
    console.log('ni' + 'ce'); //-> nice
    
    const unknownType = 'Hello';
    console.log(typeof unknownType); //-> string

## Stringbefehle

    console.log('Hello'.length); //-> 5
    console.log('hello'.toUpperCase()); //-> HELLO
    console.log('Hey'.startsWith('H)); //-> true

## Math

    console.log(Math.random()); //-> random number between 0 and 1
    console.log(Math.random() * 50;) //-> random number between 0 and 50
    console.log(Math.floor(Math.random() * 50);) //-> random number (0-50), rounded down to a whole number 
    console.log(Math.ceil(43.8)); //-> 44 (smallest integer greater than or equal to x)


## Datentypen

- Number: Any number, including numbers with decimals
- String: Any grouping of characters on your keyboard (basically any text) surrounded by single quotes: '...'
- Boolean: has one of two values: true or false
- Null: absence of a value, represented by keyword null
- Undefinded: absence of a value, different use than null, represented by keyword undefinded
- Object: Collections of related data


## Variablen

    let meal = 'Enchiladas'; //let = variable can be reassigned
    meal = 'Burrito';   

    const myName = 'Gilberto'; //const = constant variable, can't be reassigned (Wert direkt beim deklarieren zuweisen)

## Arrays

Avoid new Array()

    var points = new Array();     // bad, unnecessary
    var points = [];              // good 

Syntax:

    var array_name = [item1, item2, ...];     
    var cars  ['VW', 'Volvo', 'BMW'];

Access to elements in arrays

    var first = fruits[0]; //accessing the first array element
    var last = fruits[fruits.length-1]; // accessing the last array element

Loop through an array

    for (i = 0; i < fruits.length; i++) { ... }

add new array element

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Lemon"); //adds the element Lemon to fruits


## Array Methoden

toString()

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruitstring = fruits.toString(); //converts Attay into String: 

