const student = {
  name: "Rahul kumar",
  age: 33,
  class: "phD"
}

const teachers = {
  name : "Dr Bhanu Pratap",
  dept : "Biology",
  id: "TTM2001"
}

console.log(student.name, student.age);
student.grade = 7.4

console.log(Object.keys(student));

delete student.grade ;

console.log(Object.values(student));

console.log(Object.entries(student));

Object.freeze(student); //Prevents changes.

console.log(Object.assign({}, student, teachers)); // isse student ke name and age change ho gye uski jagah teacher ke name and age aa gye.

// Practise Questions
// Get all keys from this object:
let obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));

let vari = Object.entries(obj)
console.log(typeof vari);

