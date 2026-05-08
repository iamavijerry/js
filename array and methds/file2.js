// Level 1 – Realistic Practice (Web Dev Style)

// Q1. (Usernames)
// Sab usernames ko uppercase me convert karke new array banao.

let users = ["rahul", "amit", "neha", "sonal"];
let resUsers = users.map((e) => e.toUpperCase());
console.log(resUsers);


// Q2. (Emails check)
// Sirf valid emails filter karo (@ hona chahiye)

let emails = ["test@gmail.com", "hello.com", "user@yahoo.com"];
let resEmails = emails.filter((e) => e.includes("@"));
console.log(resEmails);


// Q3. (Prices)
// Sab prices me 18% GST add karke new array banao

let prices = [199, 299, 399, 499];
let gstPrices = prices.map((e) => Math.floor(e + ((e * 18) / 100)));
console.log(gstPrices);


// Q4. (Cart total)
// Total bill calculate karo

let cart = [250, 500, 1000];
let cartBill = cart.reduce((acc, val) => acc + val);
console.log(cartBill);


// Q5. (User search)
// Check karo "amit" exist karta hai ya nahi

let usersList = ["rahul", "amit", "neha"];
let resUserList = usersList.includes("amit");
console.log(resUserList);


// Q6. (Tasks list)
// "react" ko end me add karo

let tasks = ["html", "css", "js"];
tasks.push("react")
console.log(tasks);

// Q7. (Remove item)
// "mango" ko remove karo

let fruits = ["apple", "banana", "mango", "orange"];
fruits.splice(2, 1);
console.log(fruits);


// Q8. (Objects basic)
// Sirf product names ka array banao

let products = [
  { name: "phone", price: 10000 },
  { name: "laptop", price: 50000 }
];
let product = [];
let price = [];
products.forEach((e) => {
  product.push(e.name);
  price.push(e.price);
});
console.log(product);
console.log(price);

// Q9. (Filter expensive items)
// Sirf wo items lao jinka price > 100

let items = [
  { name: "pen", price: 10 },
  { name: "bag", price: 1000 },
  { name: "book", price: 200 }
];

let expItem = items.filter((e) => e.price > 100);
console.log(expItem);


// Q10. (Add field)
// Har user me "isAdult: true" add karke new array banao

let usersData = [
  {
    name: "rahul",
    age: 20
  },
  {
    name: "neha",
    age: 12
  }
];

const updateUsers = usersData.map((user) => ({
  ...user,
  isAdult: true
}));
console.log(updateUsers);


// Q1. (Remove duplicates)
// Unique fruits ka array banao

let arrfruits = ["apple", "banana", "apple", "orange", "banana"];

let newFruits = [...new Set(arrfruits)]
console.log(newFruits);



// Q2. (Word frequency)
// Har tech ka count object me convert karo

let techStack = ["js", "react", "js", "node", "react", "js"];


let emp = {};
for (let i = 0; i < techStack.length; i++) {
  const techCount = techStack[i];
  if (emp[techCount]) {
    emp[techCount]++;
  } else {
    emp[techCount] = 1;
  }
}
console.log(emp);



// Q3. (Longest word)
// Longest word find karo

let technologies = ["html", "javascript", "css", "react"];

let longestWord = technologies.reduce((acc, value) => {
  return value.length > acc.length ? value : acc;
});
console.log(longestWord);

// Q4. (Capitalize names)
// First letter capital karke new array banao

let userss = ["rahul", "neha", "amit"];
let capital = userss.map((name) => {
  let fName = name[0].toUpperCase();
  let remain = name.slice(1);

  return fName + remain;
});

console.log(capital);


// Q5. (Total price)
// Total cart value nikaalo

let cartItems = [
  { name: "pen", price: 10 },
  { name: "book", price: 50 },
  { name: "bag", price: 500 }
];

let totalCart = cartItems.reduce((acc, items) => {
  return acc + items.price
}, 0);
console.log(totalCart);


// Q6. (Group by age)
// 👉 Age ke basis par group karo

let usersData2 = [
  { name: "rahul", age: 20 },
  { name: "amardeep", age: 20 },
  { name: "rajesh", age: 22 }
];

let groupByAge = usersData2.reduce((acc, user) => {

  if (!acc[user.age]) {
    acc[user.age] = [];
  }

  acc[user.age].push(user);

  return acc;

}, {})

console.log(groupByAge);


// Q7. (Find user)
// id = 2 wala user find karo

let usersList1 = [
  { id: 1, name: "rahul" },
  { id: 2, name: "amit" }
];

let finduser = usersList1.find((value) => value.id === 2);
console.log(finduser?.name);


// Q8. (Filter active users)
// Sirf active users ka array banao

let users2 = [
  { name: "rahul", active: true },
  { name: "amit", active: false },
  { name: "neha", active: true }
];

let Actusers = users2.filter((a) => a.active)

console.log(Actusers);


// Q9. (Add new field)
// 👉 Har product me inStock: true add karo (immutably)

let products = [
  { name: "phone", price: 10000 },
  { name: "laptop", price: 50000 }
];

