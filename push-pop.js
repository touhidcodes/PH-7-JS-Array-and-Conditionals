var numbers = [10, 23, 45, 76, 89, 23];
var friends = ["balam", "kalam", "salam"];

// .push() use to add element at the last position of an array
console.log(numbers);
numbers.push(55);
console.log(numbers);

console.log(friends);
friends.push("gelam");
console.log(friends);

// .pop() use to remove element at the last position of an array
numbers.pop();
console.log(numbers);

console.log(numbers.length);
var numElement = numbers.pop();
console.log(numElement);
console.log(numElement.length);

friends.pop();
console.log(friends);

console.log(friends.length);
var frdElement = friends.pop();
console.log(frdElement);
console.log(frdElement.length);

// .unshift() use to add element at the last position of an array
numbers.unshift(55);
console.log(numbers);

// .shift() use to remove element at the last position of an array
friends.shift();
console.log(friends);
