/*
alert("Hello World!!");

let firstName="hassan";

if(firstName==="hassan"){

alert("HELLO "+firstName)
}

let PI =3.142;

let SUM = 10+30+40*20-100;

console.log(SUM);

alert(PI);
*/

/*
let number=10;

let myName="HASSAN";

let bool =true;

let undef;

console.log(typeof number);

console.log(typeof myName);

console.log(typeof bool);

console.log(typeof undef);

//TypeOf Error with null
console.log(typeof null);
*/

//CODING CHALLENGE #1
//CALCULATING THE BMI OF TWO VARIABLES

/*
const markMass=78;
const johnMass=92;
const markHeight=1.69;
const johnHeight=1.95;

let markBmi= markMass/(markHeight**2);
let johnBmi= johnMass/(johnHeight**2);

const markHigherBmi = markBmi;
const johnLowerBmi  = johnBmi;

console.log(markBmi,johnBmi,markHigherBmi>johnLowerBmi);
*/
//CORRECT  //

//TEMPLATE LITERALS IN JS USING ``REVERSE COLUMN AND ${}TO SHOW THE DEFINED VARIABLES

/*
let allNames ="Abdulaziz Hassan kehinde";

let info ="Thriving programmer";

let all=`My Name Is ${allNames}, I'm a ,${info} `;

console.log(all);


//CODING CHALLENGE #2
//CALCULATING THE BMI OF TWO VARIABLES


const markMass=78;
const johnMass=92;
const markHeight=1.69;
const johnHeight=1.95;

let markBmi= markMass/(markHeight**2);
let johnBmi= johnMass/(johnHeight**2);

const markHigherBmi = markBmi;
const johnLowerBmi  = johnBmi;

let message;

if(markHigherBmi>=johnLowerBmi){

message=`Mark's Bmi of ^_^ ${markBmi} is higher than John's Bmi of ${johnBmi} `

}
else{
    message=`John's Bmi of ^_^  ${johnBmi} is higher than Marks's Bmi of ${markBmi} `   
}
console.log(`${message}`);


//CORRECT  //



//CODING CHALLENGE #3

const dolphinEventScore=[96,108,89];

const koalasEventScore=[88,91,110];

let avgDolphin =0;

for(let i=0;i<dolphinEventScore.length;i++){

avgDolphin= (avgDolphin + dolphinEventScore[i])/dolphinEventScore.length;

}

let avgKoalas =0;

for(let i=0;i<koalasEventScore.length;i++){

    avgKoalas= (avgKoalas + koalasEventScore[i])/koalasEventScore.length  ;
    
    }

    console.log(avgKoalas)
if(avgDolphin > avgKoalas){
    console.log(`DOLPHINS SCORE ${avgDolphin} wins over KOALAS Score of ${avgKoalas} `);
}
else if (avgDolphin === avgKoalas){

    console.log(`DOLPHINS SCORE ${avgDolphin} equals KOALAS Score of ${avgKoalas}  WHICH MEANS THEY DRAW!!`)
}
else{

    console.log(` KOALAS Score of ${avgKoalas} wins over  DOLPHINS SCORE ${avgDolphin} `);

}

*/

//OR///
//   const avgDolphin=(96+108+89)/3;

//   const avgKoalas=(88+91+110)/3;

//   if(avgDolphin > avgKoalas){
//     console.log(`DOLPHINS SCORE ${avgDolphin} wins over KOALAS Score of ${avgKoalas} `);
// }
// else if (avgDolphin === avgKoalas){

//     console.log(`DOLPHINS SCORE ${avgDolphin} equals KOALAS Score of ${avgKoalas}  WHICH MEANS THEY DRAW!!`)
// }
// else{

//     console.log(` KOALAS Score of ${avgKoalas} wins over  DOLPHINS SCORE ${avgDolphin} `);

// }

// console.log("1991"+19);

//TENARY OPERATORS IN JAVASCRIPT

// age =prompt("ENTER YOUR AGE BELOW");

// age>=18 ? console.log("you can drink wine"):console.log("YOU CAN DRINK WATER");

const bill = 430;

let tip = 0;

bill >= 50 && bill <= 300
  ? (tip = (20 / 100) * bill)
  : (tip = (15 / 100) * bill);

console.log(" YOUR TIP IS :" + tip);
