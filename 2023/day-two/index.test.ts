import { expect, test } from "bun:test";
import { processInput } from "./index";
import subset from "./subset.txt";

test("processSubset", () => {
	const input = subset;
	const result = processInput(input);
	expect(result).toEqual([8, 2286]);
});
