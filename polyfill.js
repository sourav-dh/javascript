Array.prototype.mymap = function(callback) {
	const results = [];
	this.forEach(function(value) {
		const result = callback(value);
		results.push(result);
	});
	return results;
}
console.log("Map : ", [1,2,3].mymap(v => v * 2));

Array.prototype.myfilter = function(callback) {
	const results = [];
	this.forEach(function(value) {
		const result = callback(value);
		if (result) {
			results.push(value);
		}
	});
	return results;
}
console.log("Filter : ", [1,2,3].myfilter(v => v % 2));

Array.prototype.myreduce = function(callback, acc) {
	this.forEach(function(val) {
		acc = callback(acc, val);
	});
	return acc;
}
const sum = [1,2,3,4].myreduce((acc, curr) => acc += curr, 0);
const max = [1,2,3,4].myreduce((acc, curr) => {
	if (curr > acc) {
		acc = curr;
	}
	return acc;
}, 0);
console.log("Reduce : ", sum, max);

console.log('************************************************************************');


const user = {
	fname: 'Roman',
	lname: 'Reign',
	age: 45
};

function getUser(city, country) {
	return this.fname + ' ' + this.lname + ' with age : ' + this.age + ' is from ' + city + ', ' + country;
}

Function.prototype.mycall = function(context, ...args) {
	context = context || window;
	const uniqueKey = '__prototype__' + Date.now();
	context[uniqueKey] = this;
	const result = context[uniqueKey](...args);
	delete context[uniqueKey];
	return result;
}
console.log("call : ", getUser.mycall(user, 'Austin', 'USA'));

Function.prototype.myapply = function(context, inputArr) {
	context = context || window;
	const uniqueKey = '__prototype__' + Date.now();
	context[uniqueKey] = this;
	const result = context[uniqueKey](...inputArr);
	delete context[uniqueKey];
	return result;
}
console.log("Apply: ", getUser.myapply(user, ['Austin', 'USA']));

Function.prototype.mybind = function(context, ...args) {
	context = context || window;
	const _fn = this;
	return function(fnParams) {
		return _fn.apply(context, [...args, fnParams]);
	}
}
const get = getUser.mybind(user, 'Austin', 'USA');
console.log("Bind : ", get());

console.log('************************************************************************');


function add(a) {
	return function(b) {
		if (b) {
			return add(a + b);
		} else {
			return a;
		}
	}
}
console.log("Infinite currying : ", add(1)(2)(3)(4)());

console.log('************************************************************************');
