import sha256 from 'crypto-js/sha256';

/**
 * Block class
 */
export default class Block {
    index: number
    timestamp: number
    hash: string
    previousHash: string
    data: string

    /**
     * Creates a new Block instance
     * @param index Block index in the blockchain
     * @param previousHash Previous block hash
     * @param data Block data
     */
    constructor(index: number, previousHash: string, data: string) {
        this.index = index;
        this.timestamp = Date.now();
        this.previousHash = previousHash;
        this.data = data;
        this.hash = this.getHash()
    }

    getHash(): string {
        return sha256(this.index + this.data + this.timestamp + this.previousHash).toString();
    }

    /**
     * Checks if the block is valid
     * @returns true if the block is valid, false otherwise
     */
    isValid(previousHash: string, previousIndex: number): boolean {
        if (previousIndex !== this.index - 1) return false;
        if (this.hash !== this.getHash()) return false;
        if (!this.data) return false
        if (this.timestamp < 1) return false;
        if (this.previousHash !== previousHash) return false;
        return true;

    }
}