const client = require('./api-client')

module.exports = {
  list: (params = {}, config = {}) =>
    client.get('/v1/bip_spots', { params, ...config }),
  find: (bipSpotCode, config = {}) =>
    client.get(`/v1/bip_spots/${bipSpotCode}`, config)
}
