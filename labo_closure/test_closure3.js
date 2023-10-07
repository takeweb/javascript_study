const makeCounter = () => {
	let cnt = 0;
	return () => {
		cnt++;
		return cnt;
	};
};

const counter_a = makeCounter();
console.log(counter_a);
console.log(counter_a());
console.log(counter_a());
console.log(counter_a());

let counter_b = makeCounter();
console.log(counter_b());
console.log(counter_b());