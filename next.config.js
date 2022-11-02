// Environmental-Variable-Storing-in-next.config.js-File

// Used if we use the export command
// const { PHASE_EXPORT } = require('next/constants');

// Used if we run 'npm run dev'
const { PHASE_DEVELOPMENT_SERVER} = require('next/constants');

// Used if we run 'npm run build'
// const { PHASE_PRODUCTION_BUILD } = require('next/constants');

// Used after we build, for the server side code once our server is up and running
const { PHASE_PRODUCTION_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'testName',
                mongodb_password: 'testPassword',
                mongodb_clustername: 'testCluster',
                mongodb_database: 'testDatabase'
            }
        };
    }

    return {
        env: {
            mongodb_username: 'aras',
            mongodb_password: 'realPassword',
            mongodb_clustername: 'realCluster',
            mongodb_database: 'realDatabase'
        }
    };
};