const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' '); // the input being split at every ' ' will go into array tokens 

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
	if (mathSymbol === 'rmdr'){
		console.log(num1 % num2);
	}
	if (mathSymbol === 'pow'){
		console.log(Math.pow(num1, num2));
	}
	if (mathSymbol === 'sq'){
		console.log(Math.pow(num1, 2));
	}
	if (mathSymbol ==='cube'){
		console.log(Math.pow(num1, 3));
	}

	// This line closes the connection to the command line interface.
	reader.close()
});
