import * as os from 'os';
import { Worker } from 'node:worker_threads';

const filePath = new URL('worker.js', import.meta.url);

const performCalculations = async () => {
    const promiseWorkerArray = [];

    console.log(os.cpus().length);
    for (let cpuIndex = 0;  cpuIndex < os.cpus().length; cpuIndex++) {
        const worker = new Worker(filePath, {
            workerData: {
                num: 10 + cpuIndex
            }
        });

        const promise = new Promise((resolve, reject) => {
            worker.once('message', (msg) => {
                resolve({ status: 'resolved', data: msg })
            });
        });
        promiseWorkerArray.push(promise);
    }

    Promise.all([...promiseWorkerArray]).then(value => {
        console.log(value);
    });
};

await performCalculations();
