const person1 = {
  name: "Alice",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  },
  greet1: () => {
    console.log(this);
  },
};

const person2 = {
  name: "Bob",
};

person1.greet.call(person2); // Hi, I'm Bob
person1.greet1();
function sumNumbers(a, b, c) {
  return `${this.name} says total is: ${a + b + c}`;
}

const user = { name: "Neha" };
console.log(sumNumbers.apply(user, [1, 2, 3])); // Neha says total is: 6

// function Hello(name) {
//   this.name = name;
// }

// Hello.prototype.sayHello = function () {
//   console.log("Hello, I am " + this.name);
// };

// const user = new Hello("Priya");
// const btn = document.getElementById("sayHello");
// btn.addEventListener("click", user.sayHello.bind(user)); // Bound context
