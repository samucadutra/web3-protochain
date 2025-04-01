import Block from "../src/lib/block";

describe("Block tests", () => {

    test("Should be valid", () => {
        const block = new Block(1, "1234567890abcdef");
        const valid = block.isValid();
        expect(valid).toBe(true);
        expect(valid).toBeTruthy();
    })

    test("Should NOT be valid (hash)", () => {
        const block = new Block(1, "");
        const valid = block.isValid();
        expect(valid).toBe(false);
        expect(valid).toBeFalsy();
    })

    test("Should NOT be valid (index)", () => {
        const block = new Block(-1, "1234567890abcdef");
        const valid = block.isValid();
        expect(valid).toBe(false);
        expect(valid).toBeFalsy();
    })

})