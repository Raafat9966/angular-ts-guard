const calcuLength = n => {
  let length = 0;
  while (n != 0) {
    length = length + 1;
    n = n / 10;
  }
  return length;
};

let num = 175;
let rem = 0;
let sum = 0;
let n;
let len = calcuLength(num);
n = num;
while (num > 0) {
  rem = num % 10;
  sum = sum + Math.pow(rem, len);
  num = num / 10;
  len--;
}
if (sum == n) {
  console.log(n + " this is a disarium number");
} else {
  console.log(n + " is not a disatium number");
}
