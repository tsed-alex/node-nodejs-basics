import {existsSync} from "node:fs";
import {readFile} from "node:fs/promises";

const read = async () => {
    const filePath = new URL('fileToRead.txt', import.meta.url);

    if (!existsSync(filePath)) {
        throw Error('FS operation failed');
    }

    try {
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        console.error(err.message);
    }
};

await read();
