console.log('WELCOME TO%c inheritance.js!!', 'background: #222; color: #3399FF');

// MY NOTES IN OOP INHERITANCE IN JAVASCRIPT
// CLASS OBJECT
class Animals {
    fourLegs() {
       return "This animals has 4 Legs";
   };
   eating() {
       return "This animal is eating! "
   }    

};
class carnivoreAnimals extends Animals {
   wild() {
       return "Not friendly. want flesh Blood!";
   }
}
class herbivoresAnimals extends carnivoreAnimals {
   friendly() {
       return  "This animal is friendly and not"
   }
}

// PURE OBJECT
const anotherAnimals = {
   fourLegs() {
       return "This animals has 4 Legs too!."
   }
}
const anotherCarnivoreAnimals = {
   wild() {
       return "Want Flesh blood!! "
   }
}

// CONSTRUCTOR FUNCTION

function Person() {
   this.name;
   this.surName
};
// Person.prototype.setName = function () {
//     const paramVar = {
//         newName: "Neyt",
//         surName: "Gaming"
//     } 
//     this.name = paramVar.newName;
//     this.surName = paramVar.surName;
// }
Person.prototype.talk = function () {
//   return `Talking ${this.name} ${this.surName}`;
   const initObj = {
       name: this.name,
       surname: this.surName,
   }
   return initObj;
}
class testClass {
   myFunc() {
       let x = function() {
           const varOne = "Neyt";
           const varTwo = "Gaming Again!"
           Person.prototype.setName = function () {
               const paramVar = {
                   newName: varOne,
                   surName: varTwo
               } 
               this.name = paramVar.newName;
               this.surName = paramVar.surName;
           }
           const me1 = new Person();
           me1.setName();
           let r = me1.talk();
        //    console.log("This is me1", r.name);
       }
       let n = x();
       return n;
   }
}
const testClassExec = new testClass();
testClassExec.myFunc();

const me = new Person();
const you = new Person();

me.talk(); // Talking
you.talk(); // Talking


//  Instantiating or Making an instance or 
//  Simple access the object

/** 
   Instantiating using "NEW"
**/
   // const cow = new herbivoresAnimals();
   // const lion = new carnivoreAnimals();
   // const lion = new carnivoreAnimals();

//  This will refer to the pure object "anotherAnimals"
//  Instantiating using "Object.create"

/**
* Instantiating using "Object.create"
*/
   // const cow = Object.create(anotherAnimals);

// CODE BELOW USING inheritance in a pure object.
   // const lion = Object.create(anotherCarnivoreAnimals);
   // Object.setPrototypeOf(anotherAnimals, anotherCarnivoreAnimals);


// cow.fourLegs();
// lion.wild();

// FACTORY FUNCTION
function factoryTestFunction (name, age) {
   return {
       talk() {
           return `Hello this is ${name} I'm ${age}!!`
       }        
   } 
}
const x = Object.create(factoryTestFunction("Chan" ,23));
//BINDING 
function talk(){
   return `Zup!, I'm ${this.name} and I love Coding!!`;
}
function talkWithParam() {
   return this.name;
   // return `I'm ${this.name} and my favorite color is blank`;
}
// YOU CAN'T USE ARROW FUNCTION in constructor function
// var talk = ()=> {
//     return `Zup!, I'm ${this.name} and I love Coding!!`;
// }
const person = {
   name: 'San Pedro',
   name2: "Neyt"
   // say: talk,
}

// const speak = talk.bind(person);
// speak();
// talk.call(person);

// with parameters
// const speak = talkWithParam.bind(person, "Red");
// speak();
//let x1 = talkWithParam.call(person, "Red");
// talkWithParam.call(person, "Red");
// console.log(x);

/** Getter and Setter */
const language = {
   set current(name) {
     this.log.push(name);
   },
   log: []
 };
 language.current = 'EN';
 language.current = 'FA';
 console.log(language.log);
 // expected output: Array ["EN", "FA"]

 const obj = {
   log: ['a', 'b', 'c'],
   item: "",
   get latest() {
     if (this.log.length === 0) {
       return undefined;
     }
     return this.log[this.log.length - 1];
   },
   setting (one){
      this.log.push(one);
      this.item = "Item is set and  working!"
   }
   
 };
 
 obj.setting ("Got it!") ;
 console.log(obj.item);
 //Array ["a", "b", "c", "Got it!"]
 