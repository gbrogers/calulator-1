const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	let tokens = input.split(' '); // the input being split at every ' ' will go into array tokens --why isn't tokens -> let tokens?
	
	mathSymbol = tokens[0]; // taking the first index of tokens and assigning to mathSymbols
	num1 = Number(tokens[1]); // num1 will be the number of string at tokens array 2nd index
	num2 = Number(tokens[2]); // num1 will be the number of string at tokens array 2nd index

	// see input
	console.log(`mathSymbol ${mathSymbol}`);
	console.log(`num1 ${num1}`); 
	console.log(`num2 ${num2}`); 
	
	//addition
	if (mathSymbol === '+'){
		console.log(num1 + num2);
	} 
	//division
	if (mathSymbol === '%'){
		console.log(num1 / num2);
	} 
	//subtraction
	if (mathSymbol === '-'){
		console.log(num1 - num2);
	}
	//multiplication
	if (mathSymbol === '*'){
		console.log(num1 * num2);
	} 
	if (mathSymbol === 'sqrt'){
		console.log(Math.sqrt(num1));
	}

	// This line closes the connection to the command line interface.
	reader.close()
});
