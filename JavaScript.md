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

add and remove array elements

    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    fruits.push("Lemon"); //adds the element Lemon at the end of fruits
    fruits.pop(); //deletes last element of the array
    fruits.shift(); //deletes the first element of the array
    fruits.unshift('Kiwi'); //adds a new element to the beginning of fruits

Spilce & Slice

>Splice can do everything (insert, remove and replace elements)

    arrayName.splice(startindex, deleteCount, elem1, elemN); //starts from startindex, removes deleteCount elements and then inserts elem1, ..., elemN at their place.

    arr.splice(2, 0, "complex", "language"); //inserts elements without any removals (deleteCount = 0)

    let arr = [1, 2, 5];
    arr.splice(-1, 0, 3, 4); //ein negativer Index wird vom Arrayende aus gezählt, arr ist nun [1, 2, 3, 4, 5]

Wenn man splice einer variable zuweist werden die entfernten Elemente übergeben

    let removed = arr.splice(0,2);

Concat

    arr.concat([1,2], 3, 4); //adds an array and the values 3 and 4 to the array arr

## Searching in arrays

    arr.indexOf(item, from) - looks for item starting from index from, and returns the index where it was found, otherwise -1.
    arr.lastIndexOf(item, from) – same, but looks for from right to left.
    arr.includes(item, from) – looks for item starting from index from, returns true if found.

find

    let users = [
     {id: 1, name: "John"},
     {id: 2, name: "Pete"},
     {id: 3, name: "Mary"}
    ];
    let user = users.find(item => item.id == 1);
    alert(user.name); // John

filter

    let users = [
     {id: 1, name: "John"},
     {id: 2, name: "Pete"},
     {id: 3, name: "Mary"}
    ];
    let someUsers = users.filter(item => item.id < 3);
    alert(someUsers.length); // 2

## Transform an array

map

    let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
    });

sort(fn)

    let arr = [ 1, 2, 15 ];
    console.log(arr.sort()); // 1, 15, 2 weil es sortiert alles wie Strings

Eigene Sortierung machen

    function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    }

    let arr = [ 1, 2, 15 ];

    arr.sort(compareNumeric);

    console.log(arr);  // 1, 2, 15

Sortieren mit Sonderzeichen

    let countries = ['Österreich', 'Andorra', 'Vietnam'];
    countries.sort( (a, b) => a.localeCompare(b) ) ); //Andorra, Österreich, Vietnam

## Array Methoden

toString()

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruitstring = fruits.toString(); //converts Attay into String: 

