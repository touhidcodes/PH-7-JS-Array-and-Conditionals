// Practice-1
var arr = ["Apple", "Banana", "Orange"];
var bananaIndex = arr.indexOf("Banana");
console.log(bananaIndex);
arr[1] = "Mango";
arr.pop();
arr.push("Watermelon");
console.log(arr);

// Practice-2
var result = 85;

if (result >= 80) {
	console.log("A Grade");
} else if (result >= 60) {
	console.log("B Grade");
} else if (result >= 50) {
	console.log("C Grade");
} else if (result >= 40) {
	console.log("D Grade");
} else if (result <= 39) {
	console.log("You are fail");
}

// Practice-3
var x = 13;
var y = 79;
var z = 45;

if (x > y || x > z) {
	console.log(x, " is bigger");
} else if (y > z || y > z) {
	console.log(y, " is bigger");
} else {
	console.log(z, " is bigger");
}

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side2 == side3 || side3 == side3) {
	console.log("Isosceles");
} else {
	console.log("Non Isosceles");
}
