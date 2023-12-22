// https://adventofcode.com/2023/day/1
import input from "./input.txt";

export const processInput = (input: string): number => {
	const lines = input.split("\n").filter((line) => line.trim() !== "");
	const allNumbers = [];
	const numberMap: { [key: string]: string } = {
		one: "1",
		two: "2",
		three: "3",
		four: "4",
		five: "5",
		six: "6",
		seven: "7",
		eight: "8",
		nine: "9",
	};

	function isNumeric(str: string) {
		return !Number.isNaN(+str);
	}

	function replaceWrittenNumbersWithDigits(line: string): string {
		return line.replace(
			/one|two|three|four|five|six|seven|eight|nine/gi,
			(matched) => {
				return numberMap[matched.toLowerCase()] + matched[matched.length - 1];
			},
		);
	}

	function replaceWrittenNumbersWithDigitsTwice(line: string): string {
		const firstPass = replaceWrittenNumbersWithDigits(line);
		return firstPass.replace(
			/one|two|three|four|five|six|seven|eight|nine/gi,
			(matched) => {
				return numberMap[matched.toLowerCase()];
			},
		);
	}

	const convertedLines = lines.map(replaceWrittenNumbersWithDigitsTwice);

	for (let i = 0; i < convertedLines.length; i++) {
		const line = [convertedLines[i]];
		const numbers = line[0].split("").filter(isNumeric);
		if (numbers.length > 2) {
			numbers.splice(1, numbers.length - 2);
		}
		const numberArray = numbers.map(Number);
		if (numberArray.length < 2) {
			numberArray.push(numberArray[0]);
		}
		const combinedNumber = parseInt(numberArray.join(""));
		if (!Number.isNaN(combinedNumber)) {
			allNumbers.push(combinedNumber);
		}
	}
	const sum = allNumbers.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0,
	);
	return sum;
};

console.log(processInput(input));
