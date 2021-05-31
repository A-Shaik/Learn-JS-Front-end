/*task 1
let num = [2,3,4,5];
let calc = 1
for (let i = 0; i < num.length; i++) {
    calc*=num [i]
}
console.log (calc)

let num = [2,3,4,5];
let mult = 1;
let i = 0;
while ( i < num.length) {
    mult*= num[i];
    i++
}
console.log (mult)
*/

/*task 2
let i = 0
for (i = 0;  i <= 15; i++) {
    if (i % 2 == 0) { 
    console.log ( i + ' is even')
    } else (console.log (i + ' is odd'))
}
*/



/* task 3
function randArray(k) {

     let result = [];
     
    for (let i = 0; i < k; i++) {
     result.push(getRandomIntIncusive (1,500));
    }

    return result

function getRandomIntIncusive (min, max) {
    min = Math.ceil (min)
    max = Math.floor (max)
    return Math.floor(Math.random ()*(max-min+1))+min;
}
}
console.log (randArray(15))
*/



/* task 4
function raiseToDegree (a,b) {
let result = 1
for (let i = 0; i < b; i++) {
result*=a;
}
return result;
}

let a = parseInt (prompt('Enter a',''));
let b = parseInt (prompt ('Enter b', ''));

console.log (raiseToDegree(a,b))
*/


/*function findMin () {
   let result = [];
     for (let i = 0; i < arguments.length; i++) {
         result.push(arguments[i]); 
     }
     console.log (result)
    return Math.min(...result);
 }
 console.log(findMin(12,9,34,344,676,6786))
*/


 /*function findUnique (arr) {
    for(let i = 0; i < arr.length; i++) {
      if  (arr.indexOf (arr[i]) !== i) {
      return false
    }
}
return true
 }
    console.log (findUnique ([1,5,6,-4,-4]))
*/


function reEl (a,b=1) {            //b=1 by default

let aCopy = [...a];
return aCopy.splice (-b)
}

console.log (reEl([3,4,10,-5],2));