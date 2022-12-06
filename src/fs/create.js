import { existsSync, writeFileSync } from 'node:fs';

const create = async () => {
    const path = 'src/fs/files/fresh.txt';
    if (existsSync(path)) {
        throw Error('FS operation failed');
    }

    try {
        writeFileSync(path, 'I am fresh and young');
    } catch (err) {
        console.log(err)
    }
};

await create();
