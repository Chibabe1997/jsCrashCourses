class Car {
  name;
  model;
  year;
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
  startEngine() {
    console.log(`${this.name} engine has been started`);
  }

  showDetails() {
    console.log(
      `This is a ${this.name}, with model ${this.model} made in ${this.year}`
    );
  }
}

class MyString {
  toUpperCase() {
    // convert the string to upper case
  }
  toLowerCase() {
    // convert the string to lower case
  }
}

const myString = new MyString();
myString.toUpperCase();
myString.toLowerCase();

var lexus = new Car("Lexus", "RX350", "2024");
var benz = new Car("4matic", "gle300", "2024");

const names = ["Charity", "Chidinma", "timothy"];
const numbers = [1, 2, 3];

function sumTotal(acc, curr) {
  return acc + curr;
}
/*const sum = numbers.reduce(sumTotal, 0);

console.log("SUM: " + sum); // Outputs: 6

console.log("Collections of objects of size: " + names.length);
console.log("ALL NAMES: " + names);
let lastName = names[2];
console.log(lastName.toUpperCase());
console.log("NAMES: " + names.filter((n) => n.startsWith("C")));
console.log("Collections of objects of size: " + names.length);
lexus.showDetails();
benz.showDetails();
lexus.startEngine();
benz.startEngine();

// Guest lists
var guestList = ["Chidinma", "Saheed", "Jackson", "Kingsley", "Goodness"];
var guestName = prompt("what is your name?");
if (guestList.includes(guestName)){
    alert("welcome");
} else {
    alert("sorry, please try next time");
}*/


