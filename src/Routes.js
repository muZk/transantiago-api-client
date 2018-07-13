const client = require('./api-client')

module.exports = {
  list: (params = {}, config = {}) =>
    client.get('/v1/routes', { params, ...config }),
  find: (routeId, config = {}) => client.get(`/v1/routes/${routeId}`, config),
  directions: (routeId, config = {}) =>
    client.get(`/v2/routes/${routeId}/directions`, config),
  direction: (routeId, directionId, config = {}) =>
    client.get(`/v2/routes/${routeId}/directions/${directionId}`, config)
}
