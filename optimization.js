function sumOfSeries(n) {
	if (n === 1) {
		return 1;
	}
	return n + sumOfSeries(n - 1);
}

function memoization(callback) {
	let cache = {};
	return function(n) {
		if (n in cache) {
			return cache[n];
		} else {
			const result = callback(n);
			cache[n] = result;
			return result;
		}
	}
}

const cachedSumOfSeries = memoization(sumOfSeries);
console.time();
console.log(cachedSumOfSeries(5));
console.timeEnd();

console.time();
console.log(cachedSumOfSeries(5));
console.timeEnd();

console.time();
console.log(cachedSumOfSeries(5));
console.timeEnd();

console.time();
console.log(cachedSumOfSeries(5));
console.timeEnd();

console.log('************************************************************************');



const $search = document.getElementById('search');
const $show = document.getElementById('show');

function debounce(callback, delay) {
	let timerId;
	return function(...args) {
		clearTimeout(timerId);
		timerId = setTimeout(function() {
			callback.apply(this, args);
		}, delay);
	}
}

const debounceSearch = debounce(popoulateSearchResult, 1000);

$search.addEventListener('input', function(event) {
	debounceSearch(event.target.value);
});

function popoulateSearchResult(value) {
	$show.innerHTML = 'Showing search results for : ' + value;
}

console.log('************************************************************************');


function throttle(callback, delay) {
	let lastCallTime = 0;

	return function(...args) {
		const currentTime = Date.now();

		if (currentTime - lastCallTime >= delay) {
			callback.apply(this, args);
			lastCallTime = currentTime;
		}
	}
}

const throttleScrolling = throttle(handleScroll, 1000);
document.addEventListener('scroll', function() {
	throttleScrolling();
});

function handleScroll() {
	console.log('Scrolling funciton is called...');
}

console.log('************************************************************************');
