function manageCounter() {
	let counter = 0;

	this.increment = function() {
		++counter;
		console.log(counter);
	}

	this.decrement = function() {
		--counter;
		console.log(counter);
	}
}

const counter1 = new manageCounter();
counter1.increment();
counter1.increment();
counter1.decrement();

const counter2 = new manageCounter();
counter2.increment();
counter2.increment();

console.log('************************************************************************');