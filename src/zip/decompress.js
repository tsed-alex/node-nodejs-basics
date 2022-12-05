import * as fs from "fs";
import * as zlib from "zlib";

const decompress = async () => {
    const filePath = new URL('archive.gz', import.meta.url);
    const fileDecompressedPath = new URL('fileToCompress.txt', import.meta.url);

    const input = fs.createReadStream(filePath);
    const output = fs.createWriteStream(fileDecompressedPath);
    const gzip = zlib.createUnzip();

    input.pipe(gzip).pipe(output);
};

await decompress();
