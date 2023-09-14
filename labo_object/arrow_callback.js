const Prefixer = {
  prefix: "pre",
  getPrefixedStringArray(strings) {
    return strings.map((str) => {
      return `${this.prefix}-${str}`;
    });
  },
};

const prefixedStringArray = Prefixer.getPrefixedStringArray(["a", "b", "c"]);

prefixedStringArray.forEach((element) => {
  console.log(element);
});
