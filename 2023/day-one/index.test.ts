import { expect, test } from "bun:test";
import { processInput } from "./index";

test("processInput", () => {
	const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
	const result = processInput(input);
	expect(result).toBe(142);
});
