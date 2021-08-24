module.exports = {
  return_two() {
    return 2;
  },
  greeting(name) {
    return `Hello, ${name}`;
  },
  add(num1, num2) {
    const mum = (num1 += num2);
    return mum;
  },
  mult(num1, num2) {
    const mum = (num1 *= num2);
    return mum;
  },
  div(num1, num2) {
    const mum = (num1 /= num2);
    return mum;
  },
  sub(num1, num2) {
    const mum = (num1 -= num2);
    return mum;
  },
};
