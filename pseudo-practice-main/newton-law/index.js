/* 
SET mass to 600
SET acceleration to 2
COMPUTE multiplication of mass and acceleration
SET force to previous computation result
DISPLAY the value of force
*/

const calculateForce = (mass, acceleration) => {
  const force = mass * acceleration

  return force
}

const mass = 600
const acceleration = 2
const forceResult = calculateForce(600, 2)

console.log('Mass =', mass)
console.log('Acceleration =', acceleration)
console.log('Force result =', forceResult)
