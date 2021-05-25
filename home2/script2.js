
/*task1
let x = 1;
let y = 2;
let res1 = x + "" + y;
console.log (res1)
console.log (typeof res1)
*/

/*
let x = 1;
let y = 2;
let res2 = (y > x) + '2';
console.log (res2)
console.log (typeof res2)
*/

/*
let x = 1;
let y = 2;
let res3 = y > x
console.log (res3)
console.log (typeof res3)
*/

/*
let x = 1;
let y = 2;
let res4 = x*y/'a'
console.log (res4)
console.log (typeof res4)
*/

/*task2
let user = prompt ('Введіть число', '');
if ((user > 0) % 2 &&  ( user % 7 == 0))
console.log (user) 
else alert ('Вам не пощастило')
*/

/*task3
let x = []
x[0] = 123;
x[1] = "test_string";
x[2] = 2 > 1;
x[3] = null;
console.log (x.length)
console.log(x)
x[4] = prompt ('Введіть 5 елемент масиву', '');
alert (x[4])
x.shift ()
alert(x)
console.log (x)
alert (x)
*/

/*task4
let cities = ['Rome', 'Lviv', 'Warsaw'];
let c1 = cities.join ('*')
console.log (c1)
*/


/*task5
let isAdult = prompt('How old are you?', '');
if (isAdult > 18) alert ('Ви досягли повноліття');
else if (isAdult < 10) alert ('Ви надто молоді');
else alert ('Ви вже не надто молоді але ще і не повнолітні');
*/

/*
let a = parseFloat(prompt ('Введіть сторону А трикутника', ''));
console.log (typeof a)
let b = parseFloat(prompt ('Введіть сторону Б трикутника', ''));
console.log (typeof b)
let c = parseFloat(prompt ('Введіть сторону С трикутника', ''));
console.log (typeof c)


let p = ( a + b + c)/2; // напівпериметр

let s = Math.sqrt (p*(p-a)*(p-b)*(p-c))  // Формула Герона
console.log (s.toFixed (3))

if ((s == 0.5*a*b) || (s == 0.5*b*c) || (s == 0.5*c*a)) {
 console.log ('Трикутник прямокутний')
};
*/

// я не зміг перевірити правильність введених даних. Кружляв біля isNaN, але так і не вийшло. 
// можна коротенький feedback по цьому.

/*task8 mode1 
let time_now = new Date ()
console.log (time_now)
let hours = time_now.getHours ()
console.log (hours)
if ((hours > 23) && (hours < 5 )) {
    alert ('Доброї ночі')
} else if ((hours >= 5 ) && (hours <=11)) {
    alert ('Доброго ранку')
} else if ((hours > 11) && (hours <=17)) {
    alert ('Доброго дня')
} else if ((hours > 17) && (hours <= 23 )) {
    alert ('Доброго вечора')};
*/

/*task8 mode2
let time_now = new Date ()
console.log (time_now)
let hours = time_now.getHours ()
console.log (hours)
switch (hours){
case 24:
case 1:
case 2:
case 3:
case 4:    
alert ('Доброї ночі');
break;
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
alert ('Доброго ранку');
break; 
case 12:
case 13:
case 14:
case 14:
case 15:
case 16:
case 17:
alert ('Доброго дня')
break;
case 18:
case 19:
case 20:
case 21:
case 22:
case 23:
alert ('Доброго вечора')
break

default :
alert ('Халепа...щось пішло не так')
} 
*/
















