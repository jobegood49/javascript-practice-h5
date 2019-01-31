console.log('hello world')

/* 
SET mass to 600
SET acceleration to 2
COMPUTE multiplication of mass and acceleration
SET force to previous computation result
DISPLAY the value of force
*/

let mass = 600
let acceleration = 2

let result = mass * acceleration
force = result
console.log(force)

/*
STORE "year" with any value
IF
  ("year" modulus 4 is 0 and "year" modulus 100 is not equal to 0) OR
  ("year" modulus 4 is 0 and "year" modulus 100 is 0 and "year" modulus 400 is 0)
  THEN DISPLAY "leap year"
ELSE
  DISPLAY "not a leap year"
*/

let year = prompt('please enter a year')
if (
  (year % 4 === 0 && year % 100 != 0) ||
  (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
) {
  alert('It is a leap year')
} else {
  alert('it is not a leap year')
}

/*
STORE "number of clothes" with value of 20
STORE "current number" with value of 0
WHILE
  ("current number" is smaller or equal to 20)
  INCREMENT the "current number by 1"
ENDWHILE
DISPLAY "The washing machine is ready to start"
*/

let numberOfClothes = 20
let currentNumber = 0
while (currentNumber <= 20) {
  console.log(`${currentNumber} is the number of clothes inside the machine`)
  alert(`${currentNumber} is the number of clothes inside the machine`)
  currentNumber++
}
console.log('the machine is ready to start')

/*
STORE "students nail length" in an array
STORE "length of long nail" with any value 
STORE "current student" with the value of 0
WHILE
  ("current student" is smaller than 40)
    IF (length of the student nails is greater than length of long nail )
      DISPLAY "the student will be punished"
    ELSE
      DISPLAY "the student will be praised"
ENDWHILE
*/
