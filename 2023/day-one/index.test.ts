import { expect, test } from "bun:test";
import { processInput } from "./index";
import partOneSubset from "./part-one-subset.txt";
import partTwoSubset from "./part-two-subset.txt";

test("processPartOneSubset", () => {
	const input = partOneSubset;
	const result = processInput(input);
	expect(result).toBe(142);
});

test("processPartTwoSubset", () => {
	const input = partTwoSubset;
	const result = processInput(input);
	expect(result).toBe(281);
});
