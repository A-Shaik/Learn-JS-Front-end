
/* task1
try {
function calcRectangeArea(a, b) {
   return (a*b)/2
}
console.log(calcRectangeArea(4,adada))
} catch (error) {
   console.log ('its some mistake, check you code');
}
*/
 

/* task2
function checkAge () {
let age = prompt('Введіть свій вік', '');
console.log (typeof age)

try {

if (age.length === 0) {
   alert ('Empty');
} else if (isNaN(age)) {
   alert ('something wrong');
}
else if (age < 14) {
   alert ('Error');
} else if (age > 14) {
   alert ('Good');
}
} catch (mistake) {
   console.log(mistake.name)
   console.log(mistake.stack)
}
}

checkAge ()
*/



/* task3
function showMonthName (month) {
   if (month > 12) {
      throw new Error ('Incorrect month number')
   }
   try {
   switch (month) {
      case 1: console.log ('Jan');
      break;
      case 2: console.log ('Feb');
      break;
      case 3: console.log ('Mar');
      break;
      case 4: console.log ('Apr');
      break;
      case 5: console.log ('May');
      break;
      case 6: console.log ('Jul');
      break;
      case 7: console.log ('Jun');
      break;
      case 8: console.log ('Aug');
      break;
      case 9: console.log ('Sep');
      break;
      case 10: console.log ('Oct')
      break;
      case 11: console.log ('Nov');
      break;
      case 12: console.log ('Dec');
      break;
   }
} catch (mistake) {
   console.log  ('ups smthng wrong')
}
}
showMonthName (15)  
*/

/*task 4
function showUser (id) {
   if (id < 0) {
      throw new Error ('Error: ID must not be negative: ' + id)
   } else return {id}
}

function showUsers (ids) {
   let ids_result = [];
   let result;
for (let i = 0; i<ids.length; i++) {
   let value = ids[i];
   try {
   result = showUser(value)}
   catch (error) {
      console.log (error.message);
    //  continue
   }
   ids_result.push(result)
}
return ids_result
}

console.log (showUsers([-12,3,5,-32,343,22]))
*/