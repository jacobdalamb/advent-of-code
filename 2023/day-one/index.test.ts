import { expect, test } from "bun:test";
import { processInput } from "./index";
import partOneSubset from "./part-one-subset.txt";
import partTwoSubset from "./part-two-subset.txt";

test("processInput", () => {
	const firstInput = partOneSubset;
	const secondInput = partTwoSubset;
	const firstResult = processInput(firstInput);
	const secondResult = processInput(secondInput);
	expect(firstResult).toBe(142);
	expect(secondResult).toBe(281);
});
