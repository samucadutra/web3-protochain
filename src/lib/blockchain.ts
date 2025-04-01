import Block from "./block";

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

    addBlock(block: Block): boolean {
        const lastBlock = this.getLastBlock();
        if(!block.isValid(lastBlock.hash, lastBlock.index)) return false
        this.blocks.push(block);
        this.nextIndex++;
        return true;
    }

    // getBlocks(): Block[] {
    //     return this.blocks;
    // }

    isValid(): boolean {
        for (let i = this.blocks.length - 1; i > 0; i--) {
            const currentBlock = this.blocks[i];
            const previousBlock = this.blocks[i - 1];
            const isValid = currentBlock.isValid(previousBlock.hash, previousBlock.index);
            if (!isValid) return false;
        }
        return true;
    }
}