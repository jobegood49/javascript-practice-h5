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
