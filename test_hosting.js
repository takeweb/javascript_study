function fn() {
    console.log(x);
    {
        var x = "varのx";
    }
    console.log(x);
}
fn();