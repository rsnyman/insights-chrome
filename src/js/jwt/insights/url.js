const log = require('../logger')('insights/url.js');

module.exports = () => {
    switch (location.hostname) {
        // Prod auth servers
        case 'access.redhat.com':
        case 'prod.foo.redhat.com':
            log('ENV: prod');
            return 'https://sso.redhat.com/auth';

        // QA auth servers
        case 'access.qa.redhat.com':
        case 'access.qa.itop.redhat.com':
        case 'qa.foo.redhat.com':
            log('ENV: qa');
            return 'https://sso.qa.redhat.com/auth';

        // note: Insights Platform uses QA auth for our CI envs
        case 'access.ci.itop.redhat.com':
        default: {
            log('ENV: ci');
            return 'https://sso.qa.redhat.com/auth';
        }
    }
};