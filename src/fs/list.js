import {readdir} from "node:fs/promises";
import {existsSync} from "node:fs";

const list = async () => {
    const filesFolder = new URL('files', import.meta.url);

    if (!existsSync(filesFolder)) {
        throw Error('FS operation failed');
    }

    const filesList = await readdir(filesFolder);
    filesList.forEach(fileName => console.log(fileName));
};

await list();
