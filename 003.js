//problem 3
let number = 600851475143;
let division = 2;

 while(number > 1){
     if(number % division === 0){
         number /= division;
     } else {
         division++;
     }
 }
 console.log(division)
