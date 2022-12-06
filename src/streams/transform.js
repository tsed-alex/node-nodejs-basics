import { Transform } from 'node:stream';

const transform = async () => {
    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
            const str = chunk.toString();
            const reversedStr = [...str].reverse().join('');

            // Push the data onto the readable queue.
            callback(null, reversedStr);
        },
    });

    process.stdin.on('data', data => {
        myTransform.write(data);

        // why it does not work?
        // process.stdout.pipe(myTransform).write(data);
    });

    myTransform.on('data', (chunk) => process.stdout.write(chunk));
};

await transform();
