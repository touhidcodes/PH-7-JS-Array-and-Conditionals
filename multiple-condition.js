var salary = 25000;
var graduated = true;
var car = 1;

// Logical And
if (salary >= 25000 && graduated == true && car >= 1) {
	console.log("eso bie kori");
} else {
	console.log("tor kopale bie nai");
}

// Logical Or
if (salary >= 25000 || graduated == true || car >= 1) {
	console.log("eso bie kori");
} else {
	console.log("tor kopale bie nai");
}

// Logical And Or Mix
if ((salary >= 25000 && graduated == true) || car >= 1) {
	console.log("eso bie kori");
} else {
	console.log("tor kopale bie nai");
}
