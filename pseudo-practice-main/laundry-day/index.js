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
  currentNumber++
}
console.log('the machine is ready to start')
