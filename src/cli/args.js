const parseArgs = () => {
    const { stdout } = process;
    const argsArray = process.argv.slice(2);

    for(let i=0;i<argsArray.length;){
        stdout.write(`${argsArray[i].replace('--','')} is ${argsArray[i+1]}`);
        i+=2;
        if (i<argsArray.length) stdout.write(', ');
    }
};

parseArgs();
