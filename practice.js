//calsius to forehnhit temp check

let calsius = 30;
let forehnhit = (calsius * 9) / 5 + 32;
console.log("calsius to forenhit is:" + forehnhit);

const forehn = 80;
const cals = ((forehn - 32) * 5) / 9;
console.log("forehnight to calcius is " + cals);

// aik array lo: [10, 20, 30, 40]
// map() se sab values ko 10% increase karo
let arr = [10, 20, 30, 40];
let arr1 = arr.map((array) => array + (array * 10) / 100);
console.log(arr1);

// Ek array lo: [5, 12, 8, 130, 44]
// filter() se sirf numbers nikaalo jo 10 se baray ha

let n = [5, 12, 8, 130, 44];
let n1 = n.filter((num) => num > 10);
console.log(n1);

// Tumhare paas students ke naam aur unke marks hain.

// Tum chahte ho:

// Sab ke marks mein 10% increase karo → map() se

// Sirf woh students dikhana jo pass (50+ marks) hain → filter() se

let students = [
  { name: "Ali", marks: 45 },
  { name: "Sara", marks: 80 },
  { name: "Usman", marks: 38 },
  { name: "Ayesha", marks: 72 },
  { name: "Zain", marks: 60 },
];
let updatename = students.map((student) => {
  return {
    name: student.name,
    marks: student.marks + (student.marks * 10) / 100,
  };
});
console.log("Updates marks is");
console.log(updatename);

let passedstudent = updatename.filter((student) => student.marks >= 50);
console.log("congragulations!passed student name is :");
console.log(passedstudent);

let btn = document.getElementById("highlight-btn");
btn.addEventListener("click", function () {
  let allitems = document.querySelectorAll("#task-list li");
  allitems.forEach((items) => {
    items.style.background = "skyBlue";
  });

  firstitems = document.querySelector("#task-list li:first-child");
  firstitems.style.fontWeight = "bold";

  lastitem = document.querySelector("#task-list li:last-child");

  lastitem.style.color = "red";
});
let input = document.getElementById("user");
let div = document.getElementById("greet");
let btn1 = document.getElementById("Show Greeting");
btn1.addEventListener("click", function () {
  const name = document.getElementById("user").value;
  document.getElementById("greet").innerText = "welcome  " + name + "!";
});

let p = document.getElementById("changeText");
let btn3 = document.getElementById("change");
btn3.addEventListener("click", function () {
  p.innerText = "Hi im changed";
});

let div1 = document.getElementsByClassName("random")[0];
let butn = document.getElementById("randomcolor");
butn.addEventListener("click", function () {
  let colour = ["red", "blue", "yellow", "skyBlue"];
  let randomindex = Math.floor(Math.random() * colour.length);
  div1.style.backgroundColor = colour[randomindex];
});

// Task 3 (Practice Question):
// Ek <textarea> banao aur ek <p> tag jisme likha ho "Characters: 0".
// Jab user type kare, <p> me total typed characters ka count real-time update hota rahe.

// Bonus: Agar characters 50 se zyada ho jayein to text ka color red ho jaye.

let head = document.getElementById("textCount");
let textarea = document.getElementById("textArea");
textarea.addEventListener("input", function () {
  let res = textarea.value.length;
  head.innerText = "characater:" + res;
  if (res >= 50) {
    head.style.backgroundColor = "red";
  } else {
    if (res <= 50) {
      head.style.backgroundColor = "white";
    }
    head.style.backgroundColor = "white";
  }
});

//vowels letter count in function.//

function countVowels(Str) {
  count = 0;
  for (const char of Str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

// even odd check/

function isEven(num) {
  if (num % 2 === 0) {
    console.log("number is even");
  } else {
    console.log("Num is odd");
  }
}
isEven(23);
isEven(2);

// reverse letter string/
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

// find maximum///

function findmax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findmax([2, 3, 8, 6, 9, 2, 11]));

//find maximum reduce method
function arraysum(array) {
  return array.reduce((sum, num) => {
    return num > sum ? num : sum;
  });
}

console.log(arraysum([2, 3, 4, 5]));

let amount = [1, 2, 3, 4, 5];
let sum = amount.reduce((acc, current) => acc + current, 0);
console.log(sum);

let v = [1, 2, 3, 4, 5, 6];
let even = v.filter((v) => v % 2 === 0);
console.log(even);

let s = ["apple", "mango", "oange"];
let upercase = s.map((s) => s.toUpperCase());
console.log(upercase);

//cout how many number are greater then 10.using filter reduce method,

let c = [5, 12, 8, 20, 3, 15];
let f = c.filter((c) => c >= 10);

let r = f.reduce((acc, curent) => {
  if (curent > 10) {
    return acc + 1;
  }
  return acc;
}, 0);
console.log(f);
console.log(r);

let m = [3, 7, 2, 9, 4];
let max = m.reduce((maximum, num) => (num > maximum ? maximum : num), m[0]);
console.log(max);

//sum of odd numbers  [1,2,3,4,5]
let od = [1, 2, 3, 4, 5];
let sumodd = od.reduce((accu, sum) => {
  if (sum % 2 !== 0) {
    return accu + sum;
  }
  return accu;
}, 0);
console.log(sumodd);

// Count how many words have more than 4 letters
let data = ["apple", "cat", "banana", "dog", "grape"];
let words = data.reduce((acc, count) => {
  if (count.length > 4) {
    return acc + 1;
  }
  return acc;
}, 0);
console.log(words);

// find the smallest number of the aray
let numb = [8, 3, 6, 2, 10];

let smalestnum = numb.reduce(
  (acc, smalnum) => (smalnum < acc ? smalnum : acc),
  numb[0]
);
console.log(smalestnum);

//find total price  from cart
let cart = [{ price: 100 }, { price: 250 }, { price: 75 }];
let objval = cart.reduce((acc, value) => acc + value.price, 0);
console.log(objval);

// Create a frequency counter for letters
let string = "hello";
let fre = string.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(fre);

//square of even number and its sum
let num = [1, 2, 3, 4, 5, 6];
let checkeven = num.filter((num) => num % 2 === 0);

let square = checkeven.map((squ) => squ * squ);

let sumofnum = square.reduce((acc, sum) => acc + sum, 0);

console.log(checkeven);
console.log(square);
console.log(sumofnum);

// Average marks of students who scored 50+
let student = [
  { name: "Ali", marks: 45 },
  { name: "Sara", marks: 60 },
  { name: "Omar", marks: 80 },
];
let passed = student.filter((stu) => stu.marks >= 50);

let makearray = passed.map((stu) => stu.marks);

let total = makearray.reduce((acc, curr) => acc + curr, 0);

let aver = total / makearray.length;

console.log(aver);

// Problem:
// Words starting with "a" ko uppercase karke, comma-separated string me join karo.

let fruits = ["apple", "banana", "avocado", "grape"];
let result = fruits
  .filter((word) => word.startsWith("a"))
  .map((word) => word.toUpperCase())
  .join(",");
console.log(result);

//   Problem:
// Ek shopping cart ka total price nikalna hai.

let cartt = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 150 },
];
let pricevalue = cartt.map((p) => p.price).reduce((acc, item) => acc + item, 0);
console.log(pricevalue);

//apply 10% discount

let discount = cartt.reduce((acc, item) => {
  let discounted = item.price - item.price * 0.1; //apply 10% disocunt
  let finalamount = discounted + discounted * 0.08; // add tax 8%
  return acc + finalamount;
}, 0);
console.log(discount);

// Sirf un products ke names ka array banao jinki price >= 500 hai
let products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 150 },
];
//Method :1
let newp = products.map((prod) => {
  if (prod.price >= 500) {
    return prod.name;
  }
  return prod;
});
console.log(newp);

//Method #2
let newmethod = products
  .filter((produ) => produ.price >= 500)
  .map((produ) => produ.name);
console.log(newmethod);

//object keys ka count
let car = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log(Object.keys(car).length);
// Output → 3

// Sirf values ka array banao
let person = { name: "Sara", age: 25, city: "Lahore" };

console.log(Object.values(person));

// Output → ["Sara", 25, "Lahore"]

// For...in loop se sab properties print karo
let book = { title: "JS Basics", author: "John Doe", price: 500 };
for (let key in book) console.log(`${key}: ${book[key]}`);

// Output → title: JS Basics, author: John Doe, price: 500

//Nested object me se ek property access karo
let student1 = {
  name: "Ali",
  marks: { math: 90, science: 85 },
};

console.log("science marks:", student1.marks.science);

// Output → Science marks: 85

// Students array hai, jisme har student ka name aur marks object hota hai.
// Tumhe har student ka total marks nikal ke ek naya array banana hai jisme student ka name aur total marks ho.
let students2 = [
  { name: "Ali", marks: { math: 80, science: 90, english: 70 } },
  { name: "Sara", marks: { math: 85, science: 95, english: 75 } },
  { name: "Omar", marks: { math: 70, science: 80, english: 65 } },
];
let std = students2.map((student) => {
  let total = Object.values(student.marks).reduce((acc, mark) => acc + mark, 0);

  return {
    name: student.name,
    totalmarks: total,
  };
});
console.log(std);

// Ek function square banao jo ek number lega aur uska square return kare.

function squ(n) {
  return n * n;
}
console.log(squ(5));

// Ek function isPositive banao jo check kare number positive hai ya nahi (true/false return kare).
function isPositive(num) {
  return num >= 0;
}
console.log(isPositive(2));
console.log(isPositive(-4));

//  Ek arrow function banao jo ek number lega aur batayega ke wo even hai ya odd.
// Agar even hai → "Even number" return kare
// Agar odd hai → "Odd number" return kare
const checkval = (n) => {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
console.log(checkval(4));
console.log(checkval(5));

// Ek arrow function banao jo ek array lega aur us array ka sum return kare.

const arrsum = (arr) => {
  return arr.reduce((acc, currval) => acc + currval, 0);
};
console.log(arrsum([2, 3, 4]));
// Ek arrow function banao jo ek array lega aur usme se sirf odd numbers ka square 
// nikal kar ek nayi array return kare.

const sumod = (num) => {
  return num
    .filter((n) => n % 2 !== 0)
    .map((n) => n * n)
    .reduce((acc, sumodd) => acc + sumodd, 0);
};
console.log(sumod([1, 2, 3, 4, 5, 6]));

//Ek arrow function banao jo students ka array lega (har student ke naam aur marks honge)
//  aur sirf un students ke naam return kare jin ke marks 50 se zyada hain.

const student4=()=>{
  let studnetob=[
  {name: "Ali", marks: 40},
  {name: "Sara", marks: 60}
];
  return studnetob.map(mar=> mar.marks>50);
};
console.log(student4());

//Ek arrow function banao jo ek string lega aur return karega string me vowels ki total count.
      
const vowelcount=(str)=>{
  let vowl=["a","e","i","o","u"];
 let letter=str.toLowerCase().split("");
 let cont= letter.reduce((acc,chec)=>{
  if(vowl.includes(chec)){
    return acc+1;
  }
  return acc;
  },0);

  return cont;
};
console.log(vowelcount("Pakistan"));

//Ek arrow function banao jo ek array lega aur return karega largest number.
 const finmaximum=(number)=>{
    return number.reduce((acc,max)=> acc>max? acc:max,[0]);
 }
 console.log(finmaximum([1,2,3,4,5,24]));

// Ek arrow function banao jo ek array of prices lega aur return karega total bill with 10% discount.

const totalbil=(pric)=>{
 let dis=pric.map(pr =>pr- pr*0.1);
 return dis.reduce((acc,price)=> (acc+price),0);
};
console.log(totalbil([100,200,50]));


alert("hello");