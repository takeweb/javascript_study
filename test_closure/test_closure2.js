function makeCounter() {
	var cnt = 0;
	function push() {
		cnt++;
		console.log(cnt);
	}
	return push;
}

let counter_a = makeCounter();
console.log(counter_a);
counter_a();
counter_a();
counter_a();

let counter_b = makeCounter();
counter_b();
counter_b();