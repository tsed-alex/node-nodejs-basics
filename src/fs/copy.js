import { mkdir, readdir, copyFile  } from 'node:fs/promises';

const copy = async () => {
    const filesFolder = new URL('files', import.meta.url);
    const filesCopyFolder = new URL('files_copy', import.meta.url);

    try {
        await createDir();
        await copyFiles();
    } catch (err) {
        throw Error('FS operation failed');
    }

    async function createDir() {
        await mkdir(filesCopyFolder);
    }

    async function copyFiles() {
        const copyFilePromises = [];
        const filesList = await readdir(filesFolder);
        filesList.forEach(fileName => {
            const src = new URL(`files/${fileName}`, import.meta.url);
            const desc = new URL(`files_copy/${fileName}`, import.meta.url);

            copyFilePromises.push(copyFile(src, desc));
        });

        await Promise.all(copyFilePromises);
    }
};

await copy();
