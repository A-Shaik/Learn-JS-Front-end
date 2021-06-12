/* task1
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function propsCount(currentObject) {
 return Object.keys (currentObject).length
}

console.log (propsCount(mentor));
*/


/* task2
let arr = {}
   arr.couurse = 'javascript',
   arr.time = 'june 21',
   arr.count = '15 person',
   arr.level = 'traine',
   arr.future= 'dark' 


function showsProps (obj) {
    return Object.keys(arr)
}

console.log (showsProps(arr))
console.log (Object.values (arr))
*/



/* task3
class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log(this.name + ' ' + this.surname);
    }
}

class Student extends Person {
    constructor (name, surname,year) {
        super (name, surname);
        this.year = year; 
    }
    showCourse() {
        return currentYear - this.year  
    }
    showFullName(midleName) {
       return (this.name + ' ' + midleName  + ' ' +  this.surname)
   }
}


let currentTime = new Date ();
let currentYear = currentTime.getFullYear ()

let stud1 = new Student ('Anatolii', 'Shaikovskyi', 2020);

console.log(stud1.showFullName ('Andriyovich'))

let result = stud1.showCourse()
   if ((0 < result) && (result < 7)) {
       console.log('Ви на ' + result  + ' курсі' )}
        else {
           console.log('Щось не так')
       }
*/


/*task4
class Worker {

   _expierence = 1.2

constructor (fullName, dayRate, workingDays, salary) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.salary =this.showSalaryWithExpierence();
 

}
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    
    showSalaryWithExpierence () {
        return this.dayRate * this.workingDays* this._expierence;
    }
   get expierence () {
        return this._expierence
    }
    set expierence (value)  {
        this._expierence = value;
    }

}


let worker1 = new Worker ('AA BB', 2, 5);
worker1.expierence = 1.5
console.log(worker1.fullName)
console.log(worker1.showSalary())
console.log(worker1.showSalaryWithExpierence())

let worker2 = new Worker ('BB CC', 2, 10)
console.log(worker2.showSalaryWithExpierence())
let worker3 = new Worker ('DD EE',1, 5)
console.log(worker3.showSalaryWithExpierence())
console.log (worker1.salary)
console.log (worker2.salary)
console.log (worker3.salary)

let arr = [worker1, worker2,worker3];

function sortSalary (a,b) {

    if (a.salary < b.salary) return 1;
    if (a.salary > b.salary) return -1;
    return 0 ;
}

arr.sort(sortSalary);
console.log (JSON.stringify (arr));
*/

