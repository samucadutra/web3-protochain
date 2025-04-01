import Block from "./block";
import Validation from "./validation";

/**
 * Blockchain class
 */
export default class Blockchain {
    blocks: Block[];
    nextIndex: number = 0;

    /**
     * Creates a new Blockchain instance
     */
    constructor() {
        this.blocks = [new Block(0, "", "Genesis Block")];
        this.nextIndex++;
    }

    getLastBlock(): Block {
        return this.blocks[this.blocks.length - 1];
    }

    addBlock(block: Block): Validation {
        const lastBlock = this.getLastBlock();

        const validation = block.isValid(lastBlock.hash, lastBlock.index)
        if(!validation.success) return new Validation(false, `Invalid block: ${validation.message}`);
        this.blocks.push(block);
        this.nextIndex++;
        return new Validation();
    }

    // getBlocks(): Block[] {
    //     return this.blocks;
    // }

    isValid(): Validation {
        for (let i = this.blocks.length - 1; i > 0; i--) {
            const currentBlock = this.blocks[i];
            const previousBlock = this.blocks[i - 1];
            const validation = currentBlock.isValid(previousBlock.hash, previousBlock.index);
            if (!validation.success)
                return new Validation(false, `Invalid block #${currentBlock.index}: ", ${validation.message}`);
        }
        return new Validation();
    }
}