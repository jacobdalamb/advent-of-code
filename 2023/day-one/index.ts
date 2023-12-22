// https://adventofcode.com/2023/day/1
import input from "./input.txt";

export const processInput = (input: string): number => {
	const lines = input.split("\n").filter((line) => line.trim() !== "");
	function isDigit(str: string) {
		return /^\d+$/.test(str);
	}
	let total = 0;
	for (const line of lines) {
		const digits = [];
		for (const [index, char] of line.split("").entries()) {
			if (isDigit(char)) {
				digits.push(char);
			}
			for (const [digit, value] of [
				"one",
				"two",
				"three",
				"four",
				"five",
				"six",
				"seven",
				"eight",
				"nine",
			].entries()) {
				if (line.substring(index).startsWith(value)) {
					digits.push((digit + 1).toString());
				}
			}
		}
		const calibratedValue = parseInt(digits[0] + digits.at(-1));
		total += calibratedValue;
	}
	return total;
};

console.log(processInput(input));
