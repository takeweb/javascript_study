function greaterThan(n) {
	return (m) => {
		return m > n;
	};
}

const createrThan5 = greaterThan(5);
console.log(createrThan5(4));
console.log(createrThan5(5));
console.log(createrThan5(6));