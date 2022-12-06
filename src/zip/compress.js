import * as fs from "fs";
import * as zlib from "zlib";

const compress = async () => {
    const filePath = new URL('./files/fileToCompress.txt', import.meta.url);
    const fileCompressedPath = new URL('archive.gz', import.meta.url);

    const input = fs.createReadStream(filePath, 'utf-8');
    const output = fs.createWriteStream(fileCompressedPath);
    const gzip = zlib.createGzip();

    input.pipe(gzip).pipe(output);
};

await compress();
