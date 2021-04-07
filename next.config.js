const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'chaku29',
                mongodb_password: 'waton007',
                mongodb_clustername: 'eventsearch',
                mongodb_database: 'my-blog-dev',
            },
        };
    }

    return {
        env: {
            mongodb_username: 'chaku29',
            mongodb_password: 'waton007',
            mongodb_clustername: 'eventsearch',
            mongodb_database: 'my-blog',
        },
    };
};