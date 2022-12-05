import * as os from 'os';
import { Worker } from 'node:worker_threads';

const filePath = new URL('worker.js', import.meta.url);

const performCalculations = async () => {
    const result = [];

    console.log(os.cpus().length);
    for (let cpuIndex = 0;  cpuIndex < os.cpus().length; cpuIndex++) {
        const worker = new Worker(filePath, {
            workerData: {
                num: 10 + cpuIndex
            }
        });
        worker.once('message', (msg) => {
            result.push({ status: 'resolved', data: msg })
            if(result.length === os.cpus().length) {
                console.log(result);
            }
        });
    }
};

await performCalculations();
