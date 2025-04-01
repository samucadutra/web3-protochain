import Block from "../src/lib/block";

describe("Block tests", () => {

    test("Should be valid", () => {
        const block = new Block(1, "1234567890abcdef", "Test block");
        const valid = block.isValid();
        expect(valid).toBe(true);
        expect(valid).toBeTruthy();
    })

    test("Should NOT be valid (index)", () => {
        const block = new Block(-1, "1234567890abcdef", "Test block");
        const valid = block.isValid();
        expect(valid).toBe(false);
        expect(valid).toBeFalsy();
    })
    test("Should NOT be valid (hash)", () => {
        const block = new Block(1, "1234567890abcdef", "Test block");
        block.hash = '';
        const valid = block.isValid();
        expect(valid).toBe(false);
        expect(valid).toBeFalsy();
    })

    test("Should NOT be valid (previous hash)", () => {
        const block = new Block(1, "", "Test block");
        const valid = block.isValid();
        expect(valid).toBe(false);
        expect(valid).toBeFalsy();
    })

    test("Should NOT be valid (data)", () => {
        const block = new Block(1, "1234567890abcdef", "");
        const valid = block.isValid();
        expect(valid).toBe(false);
        expect(valid).toBeFalsy();
    })

    test("Should NOT be valid (timestamp)", () => {
        const block = new Block(1, "1234567890abcdef", "Test block");
        block.timestamp = 0;
        const valid = block.isValid();
        expect(valid).toBe(false);
        expect(valid).toBeFalsy();
    })
})