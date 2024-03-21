function area(radius) {
	return Math.PI * radius * radius;
}

function circumference(radius) {
	return 2 * Math.PI * radius;
}

function diameter(radius) {
	return 2 * radius;
}

function calculate(radiusArr, callback) {
	const resultArr = [];
	for (let i = 0; i < radiusArr.length; i++) {
		const result = callback(radiusArr[i]);
		resultArr.push(result);
	}
	return resultArr;
}

const radiusArr = [1, 2, 3];
console.log(calculate(radiusArr, area), calculate(radiusArr, circumference), calculate(radiusArr, diameter));

console.log('************************************************************************');


setTimeout(function() {
	console.log('Hello world after 1 seconds');
}, 1000);

const startTime = new Date().getTime();
let endTime = startTime;

while (endTime < startTime + 2000) {
	endTime = Date.now();
}

console.log('Finished main thread execution timer after 2S...');

console.log('************************************************************************');


const users = [
	{
		fname: 'Roman',
		lname: 'Reign',
		age: 45
	},
	{
		fname: 'Dean',
		lname: 'Ambrose',
		age: 28
	},
	{
		fname: 'Seth',
		lname: 'Rollince',
		age: 28
	}
];

const fullNames = users.map(v => v.fname + ' ' + v.lname);
const ageCount = users.reduce((acc, curr) => {
	if (acc[curr.age]) {
		++acc[curr.age]
	} else {
		acc[curr.age] = 1;
	}
	return acc;
}, {});
const belowthirtyUsers = users.filter(v => v.age <30).map(v => v.fname + ' ' + v.lname);
const reduceBelowthirtyUsers = users.reduce((acc, curr) => {
	if (curr.age < 30) {
		acc.push(curr.fname + ' ' + curr.lname);
	}
	return acc;
}, []);
console.log(fullNames, ageCount, belowthirtyUsers, reduceBelowthirtyUsers);

console.log('************************************************************************');
