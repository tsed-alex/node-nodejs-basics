import { existsSync } from "node:fs";
import { rm  } from 'node:fs/promises';

const remove = async () => {
    const removeFileNamePath = 'src/fs/fileToRemove.txt';

    if (!existsSync(removeFileNamePath)) {
        throw Error('FS operation failed');
    }

    try {
        await rm(removeFileNamePath);
    }
    catch (err) {
        console.error(err);
    }

};

await remove();
