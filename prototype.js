const myPrototype = {
	getFullName: function() {
		return this.fname + ' ' + this.lname;
	},
	getAge: function() {
		return 'Age is '+this.age;
	}
};

const wweUser = {
	fname: 'Seth',
	lname: 'Rollince',
	age: '45',
	__proto__: myPrototype
};

console.log(wweUser.getFullName(), wweUser.getAge());

console.log('************************************************************************');


Array.prototype.addDash = function() {
	return this.map(v => `-${v}-`);
}

console.log([1, 2, 3].addDash());

console.log('************************************************************************');


Function.prototype.sayNamaste = function() {
	console.log('Namaste __/\\__');
	this();
}
function testFunction() {
	console.log('function body...');
}
testFunction.sayNamaste();

console.log('************************************************************************');


function user(name, age) {
	this.name = name;
	this.age = age;
}
user.prototype.getDetails = function() {
	return this.name + ' is ' + this.age + ' years old';
}
const user1 = new user('Dave Batista', 54);
console.log(user1.getDetails());

console.log('************************************************************************');


function Vehicle(model, brand, year) {
	this.model = model;
	this.brand = brand;
	this.year = year;
}

Vehicle.prototype.getVehicle = function() {
	return `Model : ${this.model} | Brand : ${this.brand} | Year : ${this.year}`;
}

function car(name, brand, year, honkBrand) {
	Vehicle.call(this, name, brand, year);
	this.honkBrand = honkBrand;
}

car.prototype = Object.create(Vehicle.prototype);
car.prototype.honk = function() {
	return `Honk brand : ${this.honkBrand} and sounds beep beep`;
}

function bike(name, brand, year, engine) {
	Vehicle.call(this, name, brand, year);
	this.engine = engine;
}

bike.prototype = Object.create(Vehicle.prototype);
bike.prototype.revEngine = function() {
	return `Engine Name : ${this.engine} and sounds like broom broom`;
}

const car1 = new car('i20', 'Hundai', '2021', 'JBL');
const bike1 = new bike('Classic 350', 'Royal Enfil', 2018, 'Japan Made');
console.log(car1.getVehicle(), car1.honk(), bike1.getVehicle(), bike1.revEngine());

console.log('************************************************************************');



