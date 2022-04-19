var ghpages = require('gh-pages');

ghpages.publish(
    'dist',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/curdev/curdev.github.io', 
        user: {
            name: 'Curtis McLaws',
            email: 'cortescurtis@users.noreply.github.com'
        },
    },
    () => {
        console.log('Deploy Complete!')
    }
)