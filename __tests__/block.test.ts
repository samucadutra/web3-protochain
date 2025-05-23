import Block from "../src/lib/block";

describe("Block tests", () => {

    let genesisBlock: Block;

    beforeAll(() => {
        genesisBlock = new Block(0, "", "Genesis Block");
    })

    test("Should be valid", () => {
        const block = new Block(1, genesisBlock.hash, "Test block");
        const valid = block.isValid(genesisBlock.hash, genesisBlock.index);
        expect(valid.success).toBeTruthy();
    })

    test("Should NOT be valid (index)", () => {
        const block = new Block(-1, genesisBlock.hash, "Test block");
        const valid = block.isValid(genesisBlock.hash, genesisBlock.index);
        expect(valid.success).toBeFalsy();
    })
    test("Should NOT be valid (hash)", () => {
        const block = new Block(1, genesisBlock.hash, "Test block");
        block.hash = '';
        const valid = block.isValid(genesisBlock.hash, genesisBlock.index);
        expect(valid.success).toBeFalsy();
    })

    test("Should NOT be valid (previous hash)", () => {
        const block = new Block(1, "", "Test block");
        const valid = block.isValid(genesisBlock.hash, genesisBlock.index);
        expect(valid.success).toBeFalsy();
    })

    test("Should NOT be valid (data)", () => {
        const block = new Block(1, genesisBlock.hash, "");
        const valid = block.isValid(genesisBlock.hash, genesisBlock.index);
        expect(valid.success).toBeFalsy();
    })

    test("Should NOT be valid (timestamp)", () => {
        const block = new Block(1, genesisBlock.hash, "Test block");
        block.timestamp = -1;
        block.hash = block.getHash();
        const valid = block.isValid(genesisBlock.hash, genesisBlock.index);
        expect(valid.success).toBeFalsy();
    })
})