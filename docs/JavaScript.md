# JavaScript Zusammenfassung

## Was ist JavaScript?

JavaScript ist eine Skriptsprache, die für dynamisches HTML in Webbrowsern entwickelt wurde, um Benutzerinteraktionen auszuwerten, Inhalte zu verändern, nachzuladen oder zu generieren und so die Möglichkeiten von HTML und CSS zu erweitern.
~ wikipedia

JavaScript ist mittlerweile eine komplexe Programmiersprache geworde mit der fast alles möglich ist.
Mit JavaScript lassen sich Webseiten dynamisch aufbauen und durch den Benutzer anpassen. 
JavaScripts werden innerhalb des HTML-Codes einer Webseite eingefügt und dann durch den Browser
ausgeführt. Fast alle interaktiven Elemente einer Webseite werden durch JavaScript gesteuert.
Mit Hifle von JavaScript können die Seiten auf Ereignisse reagieren, Spezialeffekte aufweisen, variablen Text akzeptieren, Daten validieren, Cookies erstellen, den Browser eines Benutzers erkennen und vieles mehr.


## Geschichte von JavaScript

Die Entwicklung von JavaScript begann 1995 bei Netscape Communications, dem Entwickler des Netscape-Browsers.
Zu dieser Zeit waren viele Webseiten noch sehr grob und statisch gestaltet, da sollte mit einer neuen, in HTML
eingebeteten, Programmiersprache geändert werden um die Benutzerakzeptanz zu erhöhen. Da damals Java die neue, angesagte
Programmiersprache war, wurde JavaScript in der Syntax näher an Java herangeführt. Das Ergebnis war JavaScript mit Funktionen von HTML, der Objektorientierung von SmallTalk und der Syntax von Java. 1996 wurde JavaScript zur Fertigstellung als Standardspezifikation an die ECMA International übermittelt. ECMA ist eine Gesellschaft zur Normierung von Kommunikations- und Informationssystemen. Heute ist JavaScript neben HTML und CSS eine der drei Säulen der Webentwicklung geworden. JavaScript war seit seiner entwicklung ein essentieller Teil der Webentwicklung und jede interaktive Seite verwendet es, wenn wir kein JavaScript hätten wären wir nich

JavaScript Versionen:

![JavaScript_versions](https://gbksoft.com/blog/wp-content/uploads/2018/04/JavaScript-versions-timeline.png)


## Allgmeine Befehle
<br>
Konsolenausgabe

    console.log(5); //-> 5
    console.log('Max'); //-> Max
    console.log('ni' + 'ce'); //-> nice
    
    const unknownType = 'Hello';
    console.log(typeof unknownType); //-> string

    sum(12, 4, -14) // -> 2, es könnten (un)endlich viele Zahlen in der Klammer stehen

## Stringbefehle

    console.log('Hello'.length); //-> 5
    console.log('hello'.toUpperCase()); //-> HELLO
    console.log('Hey'.startsWith('H)); //-> true

Template literals

    let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;

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


## Variablen & Deklarationen

    var variable2 = [];      //var is function scoped, available inside the function
    let variable1 = 1;      //let is block scoped, only available inside the "block"
    const variable3 = "Hi";    //exactly like "let" but the assigned value of it is constant, you can't reassign it

## Objects

declare an object: 

    const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
    };

or

    let type = 'quartz';
    let color = 'rose';
    let carat = 21.29;

    let gemstone = {type, color, carat};


access values from the object:

    const type = gemstone.type;
    const color = gemstone.color;
    const carat = gemstone.carat;




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

combine two arrays 

    const fruits = ["apples", "bananas"];
    const vegetables = ["corn", "potatoes";
    const produce = fruits.concat(vegetables); //merges the two arrays (fruits first)
    console.log(produce);   //Prints: ["apples", "bananas", "corn", "potatoes"]

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

## Array Methods

toString()

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruitstring = fruits.toString(); //converts Array into String: 

## Destructuring
Arrays:

    const point = [10, 25, -34];

    const [x, y, z] = point; //(Syntax: Array umkehren)

    console.log(x, y, z);   //Prints: 10 25 -34

Objects:
    const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
    };

    const {type, color, carat} = gemstone;

    console.log(type, color, carat);    //Prints: quartz rose 21.29

# ES6
## Iterations

For...of Loop

    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (const digit of digits) {   //loops over all iterable elements
    console.log(digit);     //Prints:1-9
    }

    static badWeather(planes) {
        for (plane of planes) {
        plane.enginesActive = false;
        }
    }

## Operators
Spread Operator (...)

    const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland"];
    console.log(...books);  //Prints: Don Quixote The Hobbit Alice in Wonderland

    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    console.log(...primes);     //Prints: 2 3 5 7 11 13 17 19 23 29

Rest Operator (also ...)

    const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
    const [total, subtotal, tax, ...items] = order; //everything that comes after tax is merged into one element
    console.log(total, subtotal, tax, items);   //Prints: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

## Functions

Arrow Functions

These two codes do exactly the same but the second one is an arrow function (=>)

    const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
    return name.toUpperCase();
    });

    const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
    );

Arrow function stored in a variable

    const greet = name => `Hello ${name}!`;
    greet('Matthew');   //Prints: Hello Mathew!

Default function parameters

    function greet(name = 'Student', greeting = 'Welcome') { 
    return `${greeting} ${name}!`;
    }        
    //Standardmäsig ist name = Student und greeting = Welcome, wenn jedoch ein neuer Wert übergeben wird dieser genommen.

    greet(); // Welcome Student!
    greet('James'); // Welcome James!
    greet('Richard', 'Howdy'); // Howdy Richard!

## Classes

'extends' declares a class as a subclass of another class.<br>
'super' is used to get from the subclass to the parent class.

    class Tree {
    constructor(size = '10', leaves = 'green') {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
    }

    class Maple extends Tree { //subclass
    constructor(syrupQty = 15, size, leaves) {
    super(size, leaves);
    this.syrupQty = syrupQty;
    }