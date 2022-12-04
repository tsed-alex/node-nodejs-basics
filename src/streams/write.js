import * as fs from "fs";

const write = async () => {
    const filePath = new URL('./files/fileToWrite.txt', import.meta.url);
    const output = fs.createWriteStream(filePath, 'utf-8');

    process.stdin.on('data', data => {
        output.write(data);
    });
};

await write();
