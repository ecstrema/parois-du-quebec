import { publish } from 'gh-pages';

import { exec } from 'child_process';
import { exit } from 'process';

const getBranch = () => new Promise((resolve, reject) => {
    return exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
        if (err)
            reject(`getBranch Error: ${err}`);
        else if (typeof stdout === 'string')
            resolve(stdout.trim());
    });
});

if (await getBranch() !== "master") {
    console.log(await getBranch());
    console.error("fatal: currently not on branch master");
    exit(1);
}

console.log("Deploying...")

process.env.CACHE_DIR = '.svelte-kit/cache';

publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Marr11317/escalade-laurentides.git',
        user: {
            name: 'Remi Marche',
            email: 'remimarche@gmail.com',
        },
        dotfiles: true // push .nojekyll too
    },
    (err) => {
        if (err) console.log(err);
        console.log('Deploy Complete!');
    }
);
