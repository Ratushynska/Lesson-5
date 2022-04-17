/*- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 
    123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log , alert, document.write*/

let h = 'hello ';
let o = 'owu ';
let m = 'com ';
let u = 'ua ';
let x1 = 1;
let x2 = 10;
let x3 = -999;
let x4 = 123;
let x5 = 3.14;
let x6 = 2.7;
let x7 = 16;
let y1 = true;
let y2 = false;

console.log (h)
console.log (o)
console.log (m)
console.log (u)
console.log (x1)
console.log (x2)
console.log (x3)
console.log (x4)
console.log (x5)
console.log (x6)
console.log (x7)
console.log (y1)
console.log (y2)

alert (h)
alert (o)
alert (m)
alert (u)
alert (x1)
alert (x2)
alert (x3)
alert (x4)
alert (x5)
alert (x6)
alert (x7)
alert (y1)
alert (y2)

document.write (h)
document.write (o)
document.write (m)
document.write (u)
document.write (x1)
document.write (x2)
document.write (x3)
document.write (x4)
document.write (x5)
document.write (x6)
document.write (x7)
document.write (y1)
document.write (y2)


/*- Створити об'єкт book з наступними полями :
    назва, (тип string)
    кількість сторінок (числовий тип),
    жанр (string)*/

let book1 = {
    name: 'Dorian Grey',
    pages: 500,
    genre: 'romance'
}

/*- Створити об'єкт book з наступними полями :
    назва, (тип string)
    кількість сторінок (числовий тип),
    жанр (string)
    автори (тип - масив, кожен елемент масиву - це стрінга)*/

let book2 = {
    name: 'Pet cemetery',
    pages: 500,
    genre: 'romance',
    authors: [
        'Stephen King',
        'Tabitha King',
        'Owen King'
    ]
}

/*- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. 
    З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)*/

let firstName = 'Iryna';
let middleName = 'Olehivna';
let lastName = 'Ratushynska';

console.log (lastName + ' ' + firstName + ' ' + middleName)

/*- За допомогою 3х різних prompt() отримати 3 слова які являються вашими 
    Імям, По-Батькові та роками. та вивести в консоль*/

let myName = prompt ('Enter your name:');
let myMiddleName = prompt ('Enter your middle name:');
let myAge = prompt ('Enter your age:');

console.log ('I am ' + myName + ' ' + myMiddleName + '. ' + 'My age is ' + myAge)

/*- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/

let a = 100;
let b = '100';
let c = true;

console.log (typeof a, typeof b, typeof c)

/*- Створити масив об'єктів з назвою books з наступними полями  
    - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт*/

let books = [
    {name: 'Murder on the Eastern Express', pages: 300, genre: 'detective', author: 'A. Christie'},
    {name: 'Lost symbol', pages: 600, genre: 'thriller', author: 'D. Brown'},
    {name: 'Dune', pages: 500, genre: 'fantasy', author: 'F. Herbert'}
]

console.log (books[0], books[1], books[2])