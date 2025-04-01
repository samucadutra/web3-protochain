import Block from "./block";

/**
 * Blockchain class
 */
export default class Blockchain {
    blocks: Block[];

    /**
     * Creates a new Blockchain instance
     */
    constructor() {
        this.blocks = [new Block(0, "", "Genesis Block")];
    }

    addBlock(block: Block): void {
        this.blocks.push(block);
    }

    getBlocks(): Block[] {
        return this.blocks;
    }

    isValid(): boolean {
        for (let i = 0; i < this.blocks.length; i++) {
            if (!this.blocks[i].isValid()) return false;
        }
        return true;
    }
}