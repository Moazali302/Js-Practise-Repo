//calsius to forehnhit temp check

let calsius=30;
let forehnhit= (calsius*9)/5+32;
console.log("calsius to forenhit is:"+ forehnhit);

const forehn=80;
const cals=(forehn-32)*5/9;
console.log("forehnight to calcius is "+cals)


// aik array lo: [10, 20, 30, 40]
// map() se sab values ko 10% increase karo
let arr=[10,20,30,40]
let arr1=arr.map((array)=> array+(array*10/100));
console.log(arr1);

// Ek array lo: [5, 12, 8, 130, 44]
// filter() se sirf numbers nikaalo jo 10 se baray ha

let n=[5,12,8,130,44]
let n1=n.filter((num)=>num>10)
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
  { name: "Zain", marks: 60 }
];
let updatename=students.map((student)=>{
    return{
        name:student.name,
        marks:student.marks+(student.marks*10/100)
    }
});
console.log("Updates marks is")
console.log(updatename);

let passedstudent=updatename.filter((student)=>student.marks>=50)
console.log("congragulations!passed student name is :")
console.log(passedstudent);
  


let btn=document.getElementById("highlight-btn")
 btn.addEventListener("click",function(){


  let allitems=document.querySelectorAll("#task-list li")
   allitems.forEach(items => {
     items.style.background="skyBlue";
   });

    firstitems=document.querySelector("#task-list li:first-child")
    firstitems.style.fontWeight="bold";

    lastitem=document.querySelector("#task-list li:last-child")

   lastitem.style.color="red";
   })
  let input=document.getElementById("user")
  let div=document.getElementById("greet")
 let btn1=document.getElementById("Show Greeting")
 btn1.addEventListener("click",function(){
    const name=document.getElementById("user").value;
    document.getElementById("greet").innerText="welcome  " +name+"!";
 })

 let p=document.getElementById("changeText")
 let btn3=document.getElementById("change")
 btn3.addEventListener("click",function(){
    p.innerText="Hi im changed";
 })

  let div1=document.getElementsByClassName("random")[0];
  let butn=document.getElementById("randomcolor");
  butn.addEventListener("click",function() {
    let colour=['red','blue','yellow','skyBlue'];
    let randomindex=Math.floor(Math.random()*colour.length);
    div1.style.backgroundColor=colour[randomindex];
  })

  
// Task 3 (Practice Question):
// Ek <textarea> banao aur ek <p> tag jisme likha ho "Characters: 0".
// Jab user type kare, <p> me total typed characters ka count real-time update hota rahe.

// Bonus: Agar characters 50 se zyada ho jayein to text ka color red ho jaye.



let head=document.getElementById("textCount")
let textarea=document.getElementById("textArea")
textarea.addEventListener("input",function(){
  let  res=textarea.value.length;
   head.innerText="characater:"+res;
  if(res>=50){
    head.style.backgroundColor="red";
  }
  else{
    if(res<=50){
      head.style.backgroundColor="white"
    }
    head.style.backgroundColor="white"
  }
  }
)