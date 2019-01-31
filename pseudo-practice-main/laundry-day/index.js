/*
GET "number of clothes" from input
SET "current total" with 0
WHILE
  ("current number" is smaller or equal to 20)
  INCREMENT the "current total by 1"
END-WHILE
DISPLAY "The washing machine is ready to start"
*/

// let numberOfClothes = 20
// let currentNumber = 0

// while (currentNumber <= 20) {
//   console.log(`${currentNumber} is the number of clothes inside the machine`)
//   currentNumber++
// }
// console.log('the machine is ready to start')

const numberOfClothes = prompt('Number of clothes?')
let currentTotal = 0

while (currentTotal <= numberOfClothes) {
  console.log(`${currentTotal} is the number of clothes inside the machine`)
  currentTotal++
}

console.log('The machine is ready to start')

// Future example
const clothes = [
  {
    type: 'Shirt',
    color: 'Blue'
  },
  {
    type: 'Pants',
    color: 'Black'
  }
]
