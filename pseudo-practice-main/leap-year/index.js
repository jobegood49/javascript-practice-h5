/*
NOTE: In a function
GET "year" from input
IF
  "year" modulus 4 is 0 and "year" modulus 100 is not 0
  RETURN "it is a leap year"
ELSE IF
  "year" modulus 400 is 0
  RETURN "it is a leap year"
ELSE
  RETURN "it is not a leap year"
*/

const checkLeapYear = year => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return 'is a leap year'
  } else if (year % 400 === 0) {
    return 'is a leap year'
  } else {
    return 'is not a leap year'
  }
}

const year = prompt('please enter a year')
const result = checkLeapYear(year)

console.log(`${year} ${result}`)
