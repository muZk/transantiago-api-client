const client = require('./api-client')
const redClient = require('./api-red-client')

module.exports = {
  list: (params = {}, config = {}) =>
    client.get('/v1/stops', { params, ...config }),
  find: (stopId, config = {}) => client.get(`/v1/stops/${stopId}`, config),
  nextArrivals: (stopId, config = {}) =>
    redClient.get(`/stops/${stopId}/next_arrivals`, config),
  stopRoutes: (stopId, config = {}) =>
    client.get(`/v3/stops/${stopId}/stop_routes`, config)
}
