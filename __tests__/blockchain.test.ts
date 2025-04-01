import Block from "../src/lib/block";
import Blockchain from "../src/lib/blockchain";

describe("Blockchain tests", () => {

    test("Should be valid", () => {
        const blockchain = new Blockchain();
        expect(blockchain.blocks.length).toBe(1)
    })

})