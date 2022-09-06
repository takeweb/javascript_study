function fn1() {
    console.log(x);
    {
      var x = "varのx";
    }
    console.log(x);
  }
  //fn1();

  function fn2() {
    console.log(x);
    {
      let x = "letのx";
    }
    console.log(x);
  }
  //fn2();

  function fn3() {
    console.log(x);
    {
      const x = "constのx";
    }
    console.log(x);
  }
  fn3();