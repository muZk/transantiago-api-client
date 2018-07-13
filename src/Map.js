const client = require('./api-client')

module.exports = {
  list: (params = {}, config = {}) =>
    client.get('/v2/map', { params, ...config })
}
