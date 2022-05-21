/*
create a for loop that iterates up to 100 while outputting “fizz” at multiples of 3, “buzz” at multiples of 5 and “fizzbuzz” at multiples of 3 and 5.
*/
function fizzBuzz(n = 100){
	for(let i = 3; i <= n; i++){
  	if(i%3 == 0 && i%5 == 0) {
    	console.log(i,": fizzbuzz");
    }
    else if (i%3 == 0) {
    	console.log(i,": fizz");
    }
     else if (i%5 == 0) {
    	console.log(i,": buzz");
    }
  }
}
fizzBuzz();