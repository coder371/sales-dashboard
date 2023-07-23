const { allow,deny } = require('graphql-shield');
const { shield } = require('graphql-shield');

const { isAuthenticated } = require('../middlewares/permissions');
module.exports = shield({
    Query: {
        salesData: allow,
    },
});
