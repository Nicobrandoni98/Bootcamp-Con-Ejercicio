interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const ejercicioDias = (hsDays: number[], hsObj: number) => {
    const periodLength = hsDays.length
    const trainingDays = hsDays.filter(h => h > 0).length
    const average = hsDays.reduce((anterior, actual) => anterior + actual, 0) / periodLength
    const target = hsObj
    const success = average >= target

    let rating: number
    let ratingDescription: string

    if (average >= target) {
        rating = 3;
        ratingDescription = 'excellent, you met your goal!';
    } else if (average >= target * 0.75) {
        rating = 2;
        ratingDescription = 'not too bad but could be better';
    } else {
        rating = 1;
        ratingDescription = 'you need to work harder';
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
    }
}

const parseArguments = (args: string[]): {hsDays: number[], hsObj: number} => {
    if (args.length < 4) throw new Error('Not enough arguments. Provide daily hours and a target.');

    const numbers = args.slice(2).map(arg => Number(arg));

    if (numbers.some(isNaN)) {
        throw new Error('All provided values must be numbers!')
    } 

    const hsObj = numbers.pop()
    if (hsObj === undefined) {
        throw new Error('Target value is missing!')
    }

    return {
        hsDays: numbers,
        hsObj
    }
}

try {
    const { hsDays, hsObj } = parseArguments(process.argv);
    const result = ejercicioDias(hsDays, hsObj);
    console.log(result);
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error('Error:', error.message);
    } else {
        console.error('Unknown error occurred');
    }
}

