import text from "./values.txt";

const lines = text.split("\n").filter(line => line.trim() !== "");

const allNumbers = [];

function isNumber(str: string) {
	return !isNaN(+str);
}

const numberMap: { [key: string]: string } = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
};

function replaceWrittenNumbersWithDigits(line: string): string {
    return line.replace(/one|two|three|four|five|six|seven|eight|nine/gi, matched => {
        return numberMap[matched.toLowerCase()];
    });
}

const convertedLines = lines.map(replaceWrittenNumbersWithDigits);

for (let i = 0; i < convertedLines.length; i++) {
	const line = [convertedLines[i]];
	let numbers = line[0].split("").filter(isNumber);
	if (numbers.length > 2) {
		numbers.splice(1, numbers.length - 2);
	}
	const numberArray = numbers.map(Number);
	if (numberArray.length < 2) {
		numberArray.push(numberArray[0]);
	}
	const combinedNumber = parseInt(numberArray.join(""));
	if (!isNaN(combinedNumber)) {
	  allNumbers.push(combinedNumber);
	}
}
const sum = allNumbers.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0,
);
console.log(sum);
