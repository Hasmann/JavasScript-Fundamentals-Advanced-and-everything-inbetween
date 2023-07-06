'use strict';

//constructor functions
//what are constructor functions
//as we know oop in javascript is si different from oop anywhere else so we use condtructo functions

//example
// a constructor function is made like this

const PassName = function (firstName, lastName) {
  (this.firstName = firstName), (this.lastName = lastName);

  console.log(firstName, lastName);
};
//there are four process in the background involved in constructor functions they are
//a new object is created thus the this keyword
//2 a this keyword is linked to the functiom
//3 a prototype is linked to the function
//4 the object is returned

//to use the constructor function we use the new keyword on the function name

const HasnName = new PassName('Hassan', 'Abdulaziz');

console.log(HasnName);
//and as OOP states a class can have many instances so we will see it it the constructor function
const HusnName = new PassName('Hussaini', 'Abdulaziz');
const HalnName = new PassName('Halima', 'Abdulaziz');

console.log(HusnName, HalnName);

//we can also check if they are instances of the class like
//this will return a boolean

console.log(HasnName instanceof PassName);
console.log(HusnName instanceof PassName);
console.log(HalnName instanceof PassName);
//NEXT OOP CONCEPT IS PROTOTYPE
//prototype prototype  is juat an expansion that every function has but lives in the background except for when the need for oop arises
//aas we know in constructor functions we cant declare functions directly as this is a very bad practice
//so we snd the prototype to do our dirty work for us
//so lets do one example

PassName.prototype.fullName = function () {
  console.log(
    `Your Last Name Is:${this.lastName}&&Your First Name Is:${this.firstName}`
  );
};
//now this method has been added to the constructor function PassName but you wont see it directly
//why is because itis stored in the prototype
//lets see
console.log(PassName.prototype);
//see if we call it directly we wont see it but if wee add the .property method we will see the new method just added to the prototype

//now we can also add the function to the instances of the constructor function just like calling anyother function
//lets see
//see it worked
HasnName.fullName();
HusnName.fullName();
HalnName.fullName();
//why is this it is because of prototypal inheritance
// as this methodaare also added to the prototype of the instances
//se as we will se it here
console.log(HasnName);
//and to the check i=each instance prototype we use
console.log(HusnName.__proto__);

//NEXT LETS SEE PROTOTYPAL INHERITANCE AND ON BUILT IN OBJECT WITH PROTOTYPAL SCOPE
//NEWS FLASH!!! EVERYTHING ARE STORED IN PROTOTYPES SO FAR AS THEY ARE OBJECTS
//LETS SEE THE PROTOTYPAL SCOPE FIRST

console.log(HasnName.__proto__.__proto__);
//this will refer to the object prototype which is the final prototype scope

console.log(HasnName.__proto__.__proto__.__proto__);
//see if we do this we will be given null
//the object prototype which in a sense you can say is the parent scope and any object or instance under it is the child which inherits from it

//we also have prototypes not only in functions and objects but in arrays and as we know arrays are also objects
//as we know arrays can also be defined as new Array
//so lets see
const arr = [
  10, 20, 30, 40, 50, 60, 10, 10, 10, 20, 30, 30, 40, 50, 50, 60, 60, 60, 60,
];

console.log(arr.__proto__); //by doing this we will see all the methods associated with the array arr
//now letscope up to the main array prototype otherwise known as the object prototype

console.log(arr.__proto__.__proto__);

//we can also add more methods to the array prototype such as
//this example is a function which returns the unique variables in an array

Array.prototype.VarUnique = function () {
  const se = new Set(this); //this which refers to the variable we are applying it on

  return se;
};

console.log(arr.VarUnique());

const Cars = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Cars.prototype.accelerate = function () {
  this.speed += 10;
  return console.log(`${this.make} goes at ${this.speed}km/h`);
};

Cars.prototype.brake = function () {
  this.speed -= 5;
  return console.log(`${this.make} goes at ${this.speed}km/h`);
};

const BMW = new Cars('BMW', 120);
const Mercedes = new Cars('Mercedes', 90);

BMW.accelerate();
BMW.brake();

Mercedes.accelerate();
Mercedes.brake();

//using es6 classes
//es6 classes mainuse is to make the code cleaner and to stop adding to the prototype mnually
//but it has someprerequisites
// like you have to have a constructor in the class to pass the arguements
//but this are three main featurs of the class
//it can not be hoisted like other functions that is it cannoot be used before it is defined
//it can only be used in strict mode
//classes are like first class citizens
//now lets start using the class

class People {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    return console.log(2022 - this.birthYear);
  }
}
//and es6 classes can be called just like constructor functions

const hassan = new People('Haasan', 2003);
hassan.calcAge();
//static methods
//static methods are only applicable to the prototype of the function which they are called on
//for example using a constructor function

const StatTesting = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  return `${this.firstName},${this.birthYear}`;
};

const Hassanii = new StatTesting('hassan', 32);
console.log(Hassanii);

StatTesting.birthday = function () {
  console.log('HAPPY BIRTHDAY');
};

StatTesting.birthday();

//see if i do this it will return back an error
// Hassanii.birthday();

//now lets seee it using es6 classes

class StaticTesting {
  constructor(FullName, birthYear) {
    this.FullName = this.FullName;
    this.birthYear = birthYear;
  }
  //to use static here we do
  static testing() {
    console.log('TESTING STATIC');
  }
}
console.log(StaticTesting.testing());
//but doing like this wont work

const statt = new StatTesting('abd', 1000);
// as the remaining this will also return an error
// console.log(statt.testing());

//object.create
//object.create is just like craeting your own prototype lets see

const MyProto = {
  sayMyName() {
    console.log(`${this.firstName} DONT GIVE GIRLS FLOWERS`);
  },
  hasManReply() {
    console.log('i GIVE THEM  FLOWERS');
  },
  //we can also pass in arguements like in es6 classes using a conatructor but instead here we can use any method to initialise it.
  //just like this
  init(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

const mee = Object.create(MyProto);
mee.init('Hassan', 'Abdulaziz');
mee.sayMyName();
mee.hasManReply();
//this is another way of implementing prototypal inheritance in which the prototype is added to the instance  using the objectt.create

//coding challenge 2 using es6classes

class Cars2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return console.log(`${this.make} goes at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    return console.log(`${this.make} goes at ${this.speed}km/h`);
  }

  //getting speed

  get speedus() {
    return this.speed / 1.6;
  }

  //always remeber to set a parameter whwn using setter
  set speedus(speed) {
    this.speed = speed;
  }
}
const hasCar = new Cars2('ford', 120);
hasCar.accelerate();
hasCar.accelerate();
console.log(hasCar.speedus);
hasCar.speedus = 80;
console.log(hasCar);

// const obj = {
//   age: 10,
//   hasfun: function () {
//     console.log('kets gooo');
//   },
// };

// for (const [name, stu] of Object.entries(obj)) {
//   console.log(stu);
// }

//inheritance using function classes

//paent class
const Parent = function (fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
};
Parent.prototype.Calcage = function () {
  console.log(2022 - this.birthYear);
};
//children class

const Children = function (fullName, birthYear, course) {
  Parent.call(this, fullName, birthYear);
  this.course = course;
};

//now to link them
//to link them together they have to child class will have to inherit the prototype of the parent and to do that we will need to do

Children.prototype = Object.create(Parent.prototype);
//now they are linked using the object.create method Obvious right
// now we can us ethe methods in the parent class
const there = new Children(
  'Abdulaziz hassan kehinde',
  2001,
  'Computer Science'
);
console.log(there.Calcage());
Children.prototype.constructor = Children;

//CODING CHALLENGE 3

const Cars3 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Cars3.prototype.accelerate = function () {
  this.speed += 10;
  return console.log(`${this.make} goes at ${this.speed}km/h`);
};

Cars3.prototype.brake = function () {
  this.speed -= 5;
  return console.log(`${this.make} goes at ${this.speed}km/h`);
};

const Ev = function (make, speed, charge) {
  Cars3.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Cars3.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.currentBattery--;
  return `${this.make} going at ${this.speed}km/h with a charge of ${this.charge}%`;
};

const Tesla = new Ev('Tesla', 120, 23);

console.log(Tesla.accelerate());
console.log(Tesla.brake());
Tesla.chargeBattery(90);
console.log(Tesla.accelerate());
Ev.prototype.constructor = Ev;

//now lets implement inheritance in  constructor functions

class ParentCl {
  constructor(fullName, birthYear) {
    this.FullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return console.log(2022 - this.birthYear);
  }
}

//now to do inheritance with es6 classes you just need two ingredients which is the extends keyword and the super keyword
//lets see lininkg the two classes
//the extends classis used insteadof the object.create because of the es6 classes hides all the key information
//lets see one example

class StudentCl extends ParentCl {
  //note if you are not adding new parameters you dont need the constructor class
  //but here we are going to add

  constructor(fullName, birthYear, OtherNames) {
    super(fullName, birthYear);
    this.OtherNames = OtherNames;
  }
  //now lets do some real inheritance by changing thr calcage methos
  calcAge() {
    return console.log(2022 - this.birthYear + 10);
  }
}

const Martha = new StudentCl('abdulaziz hassan kehinde', 2001, 'hassan2019');

Martha.calcAge();

//inheritance in objects

const ParentObj = {
  calcAge() {
    return console.log(2022 - this.birthYear);
  },
  init(birthYear, FullName) {
    this.birthYear = birthYear;
    this.fullName = FullName;
  },
};

const ParentChild = Object.create(ParentObj);

ParentChild.init(2001, 'hasman');

ParentChild.calcAge();
//we can add more methods
ParentChild.welcome = function () {
  console.log('HELLO MY NEIGHBOURS');
};
//we can also ad more parameters

//like this
ParentChild.init = function (birthYear, fullName, height) {
  ParentObj.init.call(this, birthYear, fullName);
  this.height = height;
};
ParentChild.showHeight = function () {
  return console.log(this.height);
};

const ParentChildChild = Object.create(ParentChild);

ParentChildChild.welcome();
ParentChildChild.init(2001, 'hasman', 120);
ParentChildChild.showHeight();
//but in real life  a majority of people use es6 classess so that is what we will be using more of from now on

//MORE ON ES6 CLASSES
//Understanding ES6 CLASSES

// class pracclass {
//   constructor(firstName, lastName, pin) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;
//   }
//   toupper() {
//     let names = `${this.firstName.replace(
//       this.firstName[0],
//       this.firstName[0].toUpperCase()
//     )}`;

//     this.firstName = names;
//   }

//   _deposit(amnt) {
//     this._movements.push(amnt);
//   }
//   _withdrawal(amnt) {
//     this.deposit(-amnt);
//   }
// }
// const PracOb = new pracclass('hassan', 'Abdulaziz', 1234);
// PracOb.toupper();
// PracOb._deposit(100);
// PracOb._withdrawal(200);
// console.log(PracOb);
//Encapsulation in javascript
//In javascript there is not really an encapsulation meyhod that exists per say there is only conventions
//which passed in a team such as using the (underscore_) to precede any data  or mrthods you want to encapsulate

//you will see from above

//butbthere is a new encapsulation method which is in works in javascript we wil see in the future but it will take time to formalize

// let namesss = 'abdulaziz hassan kehinde';
// const spli = namesss.split(' ');
// console.log(spli);

// const slk = spli.map(function (ele) {
//   return ele.replace(ele[0], ele[0].toUpperCase());
// });
// console.log(slk);

//I wa stalking about a new convention in Javascript that will take encapsulatyion to a the next level well lets see an example
//this is not yet supported in all browsers but lets see
//we will be creating another class

class NewEncaps {
  //now we have 4 major implementation that is in
  //1)private field
  //2)public field
  //3)private method
  //4}public method

  //to make a public field we simply do this

  //AND ALSO NOTE THIS FIELDS ARE PRESENT IN THE INSTANCE NOT THE PROTOTYPE

  // we can simply see this as just initializing without the modifiers

  //it will still work the same way even withthe this keyword

  locale = navigator.language;

  //and then the private methoh has to be preceded with the # symbol to show a field is privTE letd see an example
  //the pin is now privte only to be accessed bythe clSS
  #pin;
  #movements = [];
  constructor(firstName, lastName, pin) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#pin = pin;
  }
  toupper() {
    let names = `${this.firstName.replace(
      this.firstName[0],
      this.firstName[0].toUpperCase()
    )}`;

    this.firstName = names;
  }
  returnal() {
    return this;
  }
  getMovs() {
    return this.#movements;
  }
  //and this are all public methods just the way we define them all
  deposit(amnt) {
    this.#movements.push(amnt);
    return this;
  }
  _withdrawal(amnt) {
    this.deposit(-amnt);
    return this;
  }
  //and now the private method is done the same way as preceding with an # but is not yet supprte by chrome but lets see some examples
}

const caps = new NewEncaps('hassan', 'abdulaziz', 1234);
//now lets try to acces the pin from outside to see if the pin is really working
//it will return a nenclosing field error
// console.log(caps.#pin);
//seee it will return that the helper private class is not a function
// console.log(caps._withdrawal(100));
// console.log(caps.returnal());

console.log(caps.getMovs());

//now lets do chaining methods
//chaining methods i know right funny heh
//but we can chain methods easily bby returning the instance ofthe class
//EXAMPLE
// the result of this will return a value but for you to successfuly chainit the other methods have to access to the instance which is callsing it
//so thats why we will return the instance of the class calling it
caps.deposit(100); //
// so now this will be possible
caps
  .deposit(100)
  .deposit(100)
  .deposit(100)
  .deposit(100)
  ._withdrawal(200)
  ._withdrawal(200)
  ._withdrawal(200);
//now lets do a summary of classes

//coding challenge 4

class Cars3Cl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return console.log(`${this.make} goes at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    return console.log(`${this.make} goes at ${this.speed}km/h`), this;
  }
}

class EvCl extends Cars3Cl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.currentBattery--;
    console.log(
      `${this.make} going at ${this.speed}km/h with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const Riv = new EvCl('Rivian', 120, 23);
console.log(Riv);
// console.log(Riv.#charge);
Riv.accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

////AND DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
