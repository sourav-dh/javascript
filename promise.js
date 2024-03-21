function placeOrder(cart, isAPISuccess = true) {
	return new Promise((resolve, reject) => {
		if (cart.length) {
			// Here we should call the API
			setTimeout(function() {
				if (isAPISuccess) {
					const apiResponse = {orderId: '12345', orderDetails: cart.toString()};
					resolve(apiResponse);
				} else {
					reject(new Error('There is an error in API call!!!'));
				}
			}, 2000);
		} else {
			reject(new Error('Cart is empty!!!'));
		}
	});
}

function makePayment(orderId) {
	return new Promise((resolve, reject) => {
		// Here we should call a API for payment
		setTimeout(function() {
			resolve('Payment is successfully done for the order : ' + orderId);
		}, 1000);
	});
}

const cart = ['Shirt', 'T-shirt', 'Shoe', 'Perfume'];
console.log('Placing order and waiting......');
placeOrder(cart).then(orderData => {
	console.log('Order is placed successfully for the items : ' + orderData.orderDetails + ' and order ID : ' + orderData.orderId);
	return orderData.orderId;
})
.then(orderId => makePayment(orderId))
.then(message => {
	console.log(message);
})
.catch(error => {
	console.log(error.message);
});

console.log('************************************************************************');


const p1 = new Promise((resolve, reject) => {
	setTimeout(function () {
		// resolve('v1');
		reject('e1');
	}, 3000);
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(function () {
		// resolve('v2');
		reject('e2');
	}, 1000);
});

const p3 = new Promise((resolve, reject) => {
	setTimeout(function () {
		// resolve('v3');
		reject('e3');
	}, 2000);
});

Promise.all([p1, p2, p3]).then(response => {
	console.log("Promise.all : ", response);
})
.catch(error => {
	console.log("Promise.all : ", error);
});

Promise.allSettled([p1, p2, p3]).then(response => {
	console.log("Promise.allSettled : ", response);
})
.catch(error => {
	console.log("Promise.allSettled : ", error);
});

Promise.race([p1, p2, p3]).then(response => {
	console.log("Promise.race : ", response);
})
.catch(error => {
	console.log("Promise.race : ", error);
});

Promise.any([p1, p2, p3]).then(response => {
	console.log("Promise.any : ", response);
})
.catch(error => {
	console.log("Promise.any : ", error.errors);
});

console.log('************************************************************************');


const promise1 = new Promise((resolve, reject) => {
	setTimeout(function() {
		resolve('Resolved promise after 3S');
	}, 3000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(function() {
		resolve('Resolved promise after 5S');
	}, 5000);
});

async function testPromise() {
	console.log('Start execution...');
	console.log(await promise1);
	console.log(await promise2);
	console.log('End execution...');
}

testPromise();

console.log('************************************************************************');


fetch('https://reqres.in/api/users?page=2').then(response => {
	return response.json();
})
.then(data => {
	console.log("Using traditional fetch : ", data);
});

async function getData() {
	const response = await fetch('https://reqres.in/api/users?page=2');
	const data = await response.json();
	console.log("Using async/await fetch : ", data);
}
getData();

console.log('************************************************************************');

