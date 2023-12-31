// https://adventofcode.com/2023/day/2
import input from "./input.txt";
export const processInput = (input: string): number[] => {
	const lines = input.split("\n").filter((line) => line.trim() !== "");

	const games = lines;

	const numOfCubesInBag: { [key: string]: number } = {
		red: 12,
		green: 13,
		blue: 14,
	};

	const gameObjects = games.map((game) => {
		const [gameName, colorPart] = game.split(":").map((part) => part.trim());

		const colorsData = colorPart.split(";").map((data) =>
			data
				.trim()
				.split(",")
				.map((item) => item.trim().split(" ")),
		);

		const gameSets: { [key: string]: { [key: string]: number } } = {};

		for (let i = 0; i < colorsData.length; i++) {
			const setData = colorsData[i];
			const setName = `Set ${i + 1}`;
			const set: { [key: string]: number } = {};

			for (let j = 0; j < setData.length; j++) {
				const [count, color] = setData[j];
				set[color] = Number(count);
			}

			gameSets[setName] = set;
		}

		return { [gameName]: gameSets };
	});

	// find the hightest number of cubes of each color beteen every set for each game

	const maxCubesOfEachColor = gameObjects.map((gameObject) => {
		const gameName = Object.keys(gameObject)[0];
		const gameSets = gameObject[gameName];

		const maxCubes: { [key: string]: number } = {};
		for (const colorKey of Object.keys(numOfCubesInBag)) {
			for (const outerKey of Object.keys(gameSets)) {
				const innerKeys = Object.keys(gameSets[outerKey]);

				for (const innerKey of innerKeys) {
					if (innerKey === colorKey) {
						if (maxCubes[innerKey] === undefined) {
							maxCubes[innerKey] = gameSets[outerKey][innerKey];
						} else if (maxCubes[innerKey] < gameSets[outerKey][innerKey]) {
							maxCubes[innerKey] = gameSets[outerKey][innerKey];
						}
					}
				}
			}
		}
		return maxCubes;
	});

	// get the power of a set of cubes from maxCubesOfEachColor

	const powerOfEachSet = maxCubesOfEachColor.map((maxCubes) => {
		const powerOfSet = Object.values(maxCubes).reduce(
			(acc, curr) => acc * curr,
			1,
		);
		return powerOfSet;
	});

	const sumOfPowers = powerOfEachSet.reduce((acc, curr) => acc + curr, 0);

	// find if each object's key's value in gameObjects exceeds the value of numOfCubesInBag's key's value

	const result = gameObjects.map((gameObject) => {
		const gameName = Object.keys(gameObject)[0];
		const gameSets = gameObject[gameName];

		const outerKeys = Object.keys(gameSets);
		const gameStatus: { [key: string]: boolean } = {};
		for (const outerKey of outerKeys) {
			const isEnough = Object.keys(gameSets[outerKey]).every((color) => {
				return gameSets[outerKey][color] <= numOfCubesInBag[color];
			});

			gameStatus[outerKey] = isEnough;
		}
		return { [gameName]: gameStatus };
	});

	// grab the game ID number (like the 11 in Game 11: ...) of each game that all sets were true then add the ID numbers together

	const gameIDs = result.map((game) => {
		const gameName = Object.keys(game)[0];
		const gameStatus = game[gameName];

		const isAllTrue = Object.values(gameStatus).every((status) => status);

		if (isAllTrue) {
			return Number(gameName.split(" ")[1]);
		}
		return 0;
	});

	const sumOfGameIDs = gameIDs.reduce((acc, curr) => acc + curr, 0);
	return [sumOfGameIDs, sumOfPowers];
};

console.log(processInput(input));
