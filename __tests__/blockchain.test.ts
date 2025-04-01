import Block from "../src/lib/block";
import Blockchain from "../src/lib/blockchain";

describe("Blockchain tests", () => {

    test("Should has genesis block", () => {
        const blockchain = new Blockchain();
        expect(blockchain.blocks.length).toEqual(1)
    })

    test("Should be valid (genesis)", () => {
        const blockchain = new Blockchain();
        expect(blockchain.isValid()).toEqual(true)
    })

    test("Should be valid (two blocks)", () => {
        const blockchain = new Blockchain();
        const block = new Block(1, blockchain.getLastBlock().hash, "Test block");
        blockchain.addBlock(block);
        expect(blockchain.isValid()).toEqual(true)
    })

    test("Should NOT be valid", () => {
        const blockchain = new Blockchain();
        const block = new Block(1, blockchain.getLastBlock().hash, "Test block");
        blockchain.addBlock(block);
        blockchain.blocks[1].data = "a transfere 2 para b";
        expect(blockchain.isValid()).toEqual(false)
    })

    test("Should add block", () => {
        const blockchain = new Blockchain();
        const block = new Block(1, blockchain.getLastBlock().hash, "Test block");
        const result = blockchain.addBlock(block);
        expect(result).toEqual(true)
    })

    test("Should NOT add block", () => {
        const blockchain = new Blockchain();
        const block = new Block(-1, blockchain.getLastBlock().hash, "Test block");
        const result = blockchain.addBlock(block);
        expect(result).toEqual(false)
    })
})