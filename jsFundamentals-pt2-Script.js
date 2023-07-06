"use strict";

// USING OF FUNCTIONS

// function myName(){
//     console.log("MY NAME IS HASSAN");
// }

// myName();

// function  getName(fname,lname) {

//     const name =`MY NAMES ARE ${fname} ,${lname}`

//     return name;
//   }

//   let mynames =  getName("ABDULAZIZ","HASSAN");
//   console.log(mynames);

//OR

//console.log(getName("HASSAN" ,"ROCKS"));

//CODING CHALLENGE 1

// function checkwinner(koalaaverage,dolphinsaverage){

// if( koalaaverage >= dolphinsaverage){

// console.log(`KOALAS WIN THE EVENT WITH AN AVERAGE SCORE OF ${koalaaverage} TO DOLPHINS SCORE OF ${dolphinsaverage}`);
// }
// else{

//     console.log(`DOLPHINS WIN THE EVENT WITH AN AVERAGE SCORE OF ${dolphinsaverage} TO KOALAS SCORE OF  ${koalaaverage} `);
// }

// }

// function avgscore(koala1 , koala2 , koala3 , dolphins1 , dolphins2 , dolphins3){

//   const  koalaaverage = (koala1 + koala2 + koala3)/ 3 ;

//    const dolphinsaverage =(dolphins1 + dolphins2 + dolphins3)/3 ;

//   console.log(`THE AVERAGE OF ALL KOALAS ARE ${koalaaverage} AND THE AVERAGE OF THE DOLPHINS ARE ${dolphinsaverage}`);

//   checkwinner(koalaaverage,dolphinsaverage);

// }

// avgscore(44,23,71,65,54,49);

//ARRAYS

//creating an array

// const myFirstArray = ["hassan","HASMAN","HASMANN"];

// console.log(myFirstArray);

// myFirstArray[0]="kehinde";

// console.log(myFirstArray);

// myFirstArray.push("kenny g");

// console.log(myFirstArray);

// myFirstArray.unshift("abdulaziz");
// console.log(myFirstArray);

// myFirstArray.pop();
// console.log(myFirstArray);

// myFirstArray.shift();
// console.log(myFirstArray);

// if(myFirstArray.includes("HASMAN")){

//   console.log("it contains hasmann");
// }

// console.log(myFirstArray.indexOf("HASMAN") );

//CODING CHALLENGE #2

// function calctip(bills){

//   const tip1 = bills *0.15;
//   const tip2 = bills *0.2;

//   if(bills>=50 && bills <=300){
//     return console.log("your tip is below 300:"+tip1);
//   }
//   else{
//     return console.log("your tip is above 300:"+tip2);
//   }
// }

// const bill =[125,555,44];

// const tip =[calctip(bill[0]),calctip(bill[1]),calctip(bill[2])]

// console.log(tip);

//OBJECTS IN JAVASCRIPT

// const details={

//   firstName:"Abdulaziz",
//   lastName:"hassan",
//   OtherNames:"kehinde",
//   age:20,

// }

// const markMiller ={
// fullname:"mark Miller",
// height:1.69,
// weight:78,

// calcbmi : function(){
// this.bmi = this.weight / this.height**2;

// return this.bmi;
// }

// };

// const JohnSmith ={
//   fullname:"John Smith",
//   height:1.95,
//   weight:92,

// calcbmi : function() {
//   this.bmi = this.weight /this.height**2;

//   return this.bmi;
//   }
// };

// console.log(`mark Millers Bmi ${markMiller.calcbmi()}  john smiths Bmi ${JohnSmith.calcbmi()}`);

// console.log(markMiller.bmi);

// console.log(JohnSmith.fullname);

// console.log(`${markMiller.calcbmi() >= JohnSmith.calcbmi() ? 'Mark millers Bmi  is greater than johnsmiths' :
//  'johnsmiths bmi is greater than mark millers'}`);

// const weights = prompt("HOW many reps did you do Today?")

// for(let i=1;i<=Number(weights);i++){
// if(i===1){
//   console.log("YOU DID 1 REP TODAY!!");
// }

// console.log("YOU DID "+i+" REPS TODAY!!");

// }

// const bills = [10, 10, 10, 10, 10];

// let tips = [];
// let totals = [];

// function calctip(bill) {
//   for (let i = 0; i <= bills.length; i++) {
//     if (bills[i] >= 50 && bills[i] <= 300) {
//       tips[i] = bills[i] * 0.15;
//     } else {
//       tips[i] = bills[i] * 0.2;
//     }

//     totals[i] = tips[i] + bills[i];

//     console.log(`${bills[i]} ${tips[i]} ${totals[i]}`);
//   }
// }

// console.log(calctip(bills));

// function calcaverage(bill) {
//   let total = 0;
//   let average = 0;
//   for (let i = 0; i < bill.length; i++) {
//     total += bill[i];
//   }
//   average = total / bill.length;
//   return average;
// }

// console.log(calcaverage(bills));

// const weather = [10, 20, 30];

// function calcweather(weath) {
//   let str = "";

//   for (let i = 0; i < weath.length; i++) {
//     str += `The weather on day ${i + 1} is ${weath[i]}C ...`;
//   }

//   console.log(str);
// }

// calcweather(weather);

// let a = 12;

// a += 5;

// console.log(a);

// const a = [10, 20, 30];

// let ans = 0;
// for (let i = 0; i < a.length; i++) {
//   ans = ans + "the weather on day " + (i + 1) + " is " + a[i];
// }

// console.log(ans);
