// console.log("print")
// console.log(5*2)

// const a = 5;
// const b = 3;
// let myName = "ro";

// console.log(a);
// console.log(b);
// console.log("My name : " + myName);

// myName = "ro-el";

// console.log("Changed my name : " + myName);

// const amIFat = false;
// const somethingThere = null;
// let something;

// console.log(amIFat);
// console.log(somethingThere);
// console.log(something);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const dow = mon + tue + wed + thu + fri + sat + sun;
console.log(dow);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[2]);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// object
const player = {
  name: "ro-el",
  points: 100,
  fat: false,

  sayHello: function (otherPersonName) { // object에 function 포함
    console.log('Hello, ' + otherPersonName)
  },
};
console.log(player.name);
// player 자체를 새로운 값으로 지정하려고 하면 오류 밠생
player.sayHello("Tom");
player.partner = "Grace"; // object에 새로운 속성 추가
console.log(player);

function sayHello(name) {
  console.log("Hello, " + name + "!");
}
sayHello("nico");

function plus(num1, num2) {
  console.log(num1 + num2);
}
plus(5, 12);