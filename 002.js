//problem 2
let sum = 0;
let f0 = 0;
let f1 = 1;

for (f1; f1 < 4000000;) {
  f1 = f0 + f1;
  f0 = f1 - f0;

  if(f1 % 2 == 0){
    sum = sum + f1;
  }
}
console.log(sum);
