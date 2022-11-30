import { existsSync } from "node:fs";
import { rename as renameAsync } from 'node:fs/promises';

const rename = async () => {
    const wrongFileNamePath = 'src/fs/wrongFilename.txt';
    const properFileNamePath = 'src/fs/properFilename.md';

    if (!existsSync(wrongFileNamePath) || existsSync(properFileNamePath)) {
        throw Error('FS operation failed');
    }

    try {
        await renameAsync(wrongFileNamePath, properFileNamePath);
    }
    catch (err) {
        console.error(err);
    }
};

await rename();
