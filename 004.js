// problem 4
const largest = () => {
 	let arr = [];
 	for(let i = 999; i > 100; i--){
     for (let x = 999; x > 100; x--) {
         let multi = i * x;
         if(palindrome(multi)) {
            arr.push(i * x)
         }
     }
   }
   return Math.max.apply(Math, arr);
 }
palindrome = (i) => {
  return i.toString() == i.toString().split("").reverse().join("");
}
console.log(largest());
