// https://adventofcode.com/2023/day/2
import input from "./subset.txt";
export const processInput = (input: string): number[] => {
	const lines = input.split("\n").filter((line) => line.trim() !== "");
	const numOfCubesInBag: { [key: string]: number } = {
		red: 12,
		green: 13,
		blue: 14,
	};

	let gameSum = 0;

	for (const line of lines) {
		const [gameName, ...colorParts] = line.split(":");
		const gameID = parseInt(gameName.substring(5).trim());

		const colorSets = colorParts.join(":").split(";");

		let gameIsPossible = true;

		for (const colorSet of colorSets) {
			const colors = colorSet
				.split(",")
				.map((color) => color.trim().split(" "));
			for (const [count, color] of colors) {
				// find he hightest number of cubes of each color beteen every set for each game
				if (numOfCubesInBag[color] < parseInt(count)) {
					gameIsPossible = false;
					break;
				}
			}
			if (!gameIsPossible) break;
		}
		if (gameIsPossible) gameSum += gameID;
	}
	return [gameSum];
};

console.log(processInput(input));
