const client = require('./api-client')

module.exports = {
  list: (params = {}, config = {}) =>
    client.get('/v1/buses', { params, ...config }),
  find: (busPlateNumber, config = {}) =>
    client.get(`/v1/buses/${busPlateNumber}`, config)
}
