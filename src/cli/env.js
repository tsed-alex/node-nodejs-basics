const parseEnv = () => {
    const { stdout } = process;

    for(let keyEnv in process.env) {
        if (keyEnv.includes('RSS_')) {
            stdout.write(`${keyEnv}=${process.env[keyEnv]}; `);
        }
    }
};

parseEnv();
