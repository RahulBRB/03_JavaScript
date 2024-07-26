/*
Complete the code below so that the getDeansList() function accepts a list of student objects, and returns an array of the student names who are on the Dean’s List based on their GPA of 3.5 or higher.
*/

const students = [
  { name: "Paisley Parker", gpa: 4.0 },
  { name: "Lake Herr", gpa: 3.2 },
  { name: "Promise Lansing", gpa: 3.9 },
  { name: "Friar Park", gpa: 2.8 },
  { name: "Mason Amitie", gpa: 3.49 }
]

function getDeansList(studentList) {
  let deansList = [];
  for(let i = 0 ; i<students.length; i++) {
    if(students[i].gpa>3.5){
      deansList.push(students[i]);
    }
  }
  return deansList;
}

console.log(getDeansList(students))
