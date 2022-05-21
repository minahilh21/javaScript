/*
write a function that takes an innteger argument and print alphabet "X" with stars. If we pass 5 to function it should print a pattern like this
*   *
 * * 
  *
 * *
*   *
*/
function printPattern(rows_length) {
	var pattern = "";
	for(let rows = 1; rows <= rows_length; rows++){
		for(let cols = 1; cols <= rows_length; cols++){
			if(rows == cols || (rows+cols == rows_length+1) ){
        pattern += "*";
      }
      else {
        pattern += " ";
      }
		}
    pattern += "\n";
	}
  console.log(pattern);
}
printPattern(9);