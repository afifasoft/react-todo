function add(a, b) {
  return a + b;
}

function greeting(name, age) {
  console.log("Hi, "+name + ", you are "+age);
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

greeting(...person);
greeting(...personTwo);


var names = ['Mike', 'Ben'];
var finalTwo = ['Andrew', ...names];

finalTwo.forEach((e) => {
  console.log('Hi..'+e);
})
