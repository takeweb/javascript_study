let counter = () => {
	var cnt = 0;
	function push() {
		cnt++;
		console.log(cnt);
	}
	return push;
}

let counter_a = counter;
console.log(counter);
console.log(counter_a);
counter_a().push();
counter_a().push();

let counter_b = counter;
counter_b();
counter_b();