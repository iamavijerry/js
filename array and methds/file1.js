// Array ka first element print karo
let marksList = [10, 20, 30, 40, 50];
console.log(marksList.at(0));


// Array ka last element print karo
let pricesList = [5, 15, 25, 35];
console.log(pricesList.at(-1));


// Length find karo
let studentIds = [1, 2, 3, 4, 5];
console.log(studentIds.length);


// End me 60 add karo
let scores = [10, 20, 30];
scores.push(60);
console.log(scores);


// Start me 50 add karo
let productPrices = [100, 200, 300];
productPrices.unshift(50);
console.log(productPrices);


// Last element remove karo
let countdownNumbers = [9, 8, 7, 6];
countdownNumbers.pop();
console.log(countdownNumbers);


// First element remove karo
let queueList = [11, 22, 33, 44];
queueList.shift();
console.log(queueList);


// Check karo 4 present hai ya nahi
let evenNumbers = [2, 4, 6, 8];
let isFourPresent = evenNumbers.includes(4); 
console.log(isFourPresent);


// Sab elements ka sum nikaalo
let oddNumbers = [1, 3, 5, 7];
let totalSum = oddNumbers.reduce((acc, val) => acc + val);
console.log(totalSum);


// Har element ko double karke new array banao
let salaryList = [12, 24, 36, 48];
let doubledSalaries = salaryList.map((val) => val * 2);
console.log(doubledSalaries);;

// Sirf map() use karke sab numbers ko double karo.

const arr = [1, 2, 3, 4, 5];
let result = arr.map(value => value * 2);
console.log(result);

// filter() use karke sirf even numbers nikaalo.

let arr1 = [10, 15, 20, 25, 30];
let result2 = arr1.filter(e => e % 2 === 0);
console.log(result2);

// forEach() use karke har item ke aage "I like " add karke print karo.

let arr2 = ["apple", "banana", "mango"];
arr2.forEach((val) => {
  console.log(`I like ${val}`)
});

// reduce() use karke sum nikaalo.
let arr3 = [5, 10, 15, 20];
let result3 = arr3.reduce((acc, val) => acc + val);
console.log(result3);

// Ek hi line me:
// pehle even numbers filter karo
// phir unko square karo

let arr4 = [1, 2, 3, 4, 5, 6];
console.log(
  arr4.filter(val => val % 2 === 0)
    .map(val => val * val)
);


// Sirf un users ke names ka array banao jinki age 18+ hai.

let users = [
  { name: "Aman", age: 20 },
  { name: "Riya", age: 17 },
  { name: "Rahul", age: 25 }
];

let result5 = users
  .filter(user => user.age >= 18)
  .map(user => user.name);
console.log(result5);


// Duplicate remove karke new array banao.

let arr5 = [1, 2, 2, 3, 4, 4, 5];
let newarr = [...new Set(arr5)];
console.log(newarr);  //best way, time Complexity O(n)

// let result6 = arr5.filter((val, index) => arr5.indexOf(val)===index)
// console.log(result6); Time Complexity O(n^2)


// Sabse lamba word kaunsa hai? (reduce() try karo);

let words = ["hello", "world", "javascript"];
let result7 = words.reduce((acc, value) =>( value.length > acc.length ? value : acc), "");
console.log(result7);


// Maximum/Larget number find karo bina Math.max use kiye.

let arrlarge = [3, 7, 2, 9, 5];
let max = arrlarge[0];

for (let i = 0; i < arrlarge.length; i++) {
  if (arrlarge[i] > max) {
    max = arrlarge[i];
  }
  
}
console.log("Max : ", max);



