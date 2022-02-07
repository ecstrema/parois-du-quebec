import { publish } from 'gh-pages';

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
    () => {
        console.log('Deploy Complete!');
    }
);
