import { createHash } from 'crypto';
import { readFile } from "node:fs/promises";

const calculateHash = async () => {
    const filePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);

    try {
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log('hex: ', hash(contents));
    } catch (err) {
        console.error(err.message);
    }
};

await calculateHash();

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}
