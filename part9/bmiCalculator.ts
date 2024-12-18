interface MultiplyValues {
    value1: number;
    value2: number;
}

const parseArguments2 = (args: string[]): MultiplyValues => {
    if (args.length !== 4) {
        throw new Error('Usage: node bmiCalculator.js <peso> <altura>');
    }
    
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        value1: Number(args[2]),
        value2: Number(args[3])
    }
} else {
    throw new Error('Provided values were not numbers!');
}
}

const calculateBmi = (peso: number, altura: number) : string => {
    const alturaEnMetros = altura / 100
    const resultado = peso / (alturaEnMetros * alturaEnMetros)
       if (resultado < 20 ) return 'Flaquito'
       if (resultado >= 20 && resultado < 25) return 'Bien'
       return 'Goldito'
}

try {
    const { value1, value2 } = parseArguments2(process.argv);
    const result = calculateBmi(value1, value2);
    console.log(`Your BMI is: ${result}`);
    
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  } 
