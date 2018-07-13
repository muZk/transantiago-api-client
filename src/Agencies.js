const client = require('./api-client')

module.exports = {
  list: (params = {}, config = {}) =>
    client.get('/v1/agencies', { params, ...config })
}
