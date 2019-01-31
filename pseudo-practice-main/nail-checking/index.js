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

/*
SET "maximum nail length" from input
SET "data of punished students" with empty data
GET "data of students' name and nail length" from input

LOOP over "data of students"
  COMPARE "one student's nail length" to "maximum nail length"
  IF ("one student's nail length" is longer than "maximum nail length")
    STORE "one student" into "data of punished students"

DISPLAY "data of punished students"
*/

const maximumNailLength = 5 // in milimeter

const students = [
  { name: 'M Haidar Hanif', nailLength: 0.1 },
  { name: 'Bara Limbong', nailLength: 300 },
  { name: 'Fadhila Fajrin Bramantio', nailLength: 10 },
  { name: 'Jonathan Nicolas', nailLength: 2 },
  { name: 'Mario Rizki', nailLength: 0 },
  { name: 'Muhammad Fahrianda', nailLength: 4.9 },
  { name: 'Sakti Dewantoro', nailLength: 20 }
]

const punishedStudents = students.map(student => {
  if (student.nailLength > maximumNailLength) {
    student.punished = true
    return student
  } else {
    return student
  }
})

console.log(punishedStudents)
