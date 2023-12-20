import text from "./part-two-subset.txt";

const lines = text.split("\n").filter((line) => line.trim() !== "");

function isNumber(str: string) {
	return !isNaN(+str);
}

const allNumbers = [];

for (let i = 0; i < lines.length; i++) {
	const line = [lines[i]];
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
		console.log(combinedNumber);
	  allNumbers.push(combinedNumber);
	}
}
const sum = allNumbers.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0,
);
console.log(sum);
