// // These are from the tutorials

// // ///// Variables
// // let bodna="Fuyck all night"
// // const constFonda = "CosntBlando - Messaging"

// // console.log(bodna)
// // console.log('%cBodna', 'color: #ff2040; font-size: 24px;');
// // console.log('%c' + constFonda, 'color: #ff2040; font-size: 24px;');

// // /// operators
// // console.log('%cOeprators', 'color: #ff2040; font-size: 24px;')
// // console.log(100 < 5)

// // /// Function keywords

// // function greet() {
// //   console.log("Console log Function")
// // }

// // greet()

// /// Function params

// function greet(userName, mMessage = "Fuci") {
//   return "Holas" + userName + "." + mMessage;
// }

// const Msg = greet("Bonda");
// console.log(Msg);

// Arrow Functions

// export default (userName, message) => {
//   console.log("Hello");
// };

// KV Object Vars

// const userKV = {
//   name: "Mina",
//   fetish: "fart",

//   // Method definition inside the Var
//   greet() {
//     console.log("Greeter Funtion");
//     console.log(this.name);
//   },
// };
// console.log(userKV.greet());

// // Blue print method
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("hi");
//   }
// }

// // Instantiate the class
// const user1 = new User("Bootydance", "99");
// console.log(user1);

/// Array Methods - Map functions are very common

// const hobbies = ["sports", "cooking", "reading"];
// console.log(hobbies[0]);

// const editedHobbies = hobbies.map((i) => i + " _mapAdd");
// console.log(editedHobbies);

/// Destructuring Objects
// const userNameData = ["Bindo", "Kando"];

// const firstName = userNameData[0];
// const secondName = userNameData[1];

// const [first]

// const [fruit, veg] = ["Mango", "Onion"];
// console.log(fruit);
// console.log(veg);

// Object should be the same of the properies
// const { name, age } = {
//   name: "Ina",
//   age: 18,
// };

// // mergin list

// const newHobbies = []

/// Functions inside function

function init() {
  function greet() {
    console.log("Funck");
  }

  greet();
}

init();

//// references and primitives
