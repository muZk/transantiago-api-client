const axios = require('axios')

/**
 * Unofficial API Client for querying data from Transantiago.
 * @module transantiago-client
 */

const BASE_URL = 'https://api.scltrans.it'

/**
 * Gets nearly bus stops for the given position (lat, lng)
 * @alias module:transantiago-client.nearlyBusStops
 * @param {number|string} lat - position latitude
 * @param {number|string} lng - position longitude
 * @returns {Object}
 */
async function nearlyBusStops (lat, lng, radius = 200) {
  const { data } = await axios.get(`${BASE_URL}/v1/stops`, {
    params: { center_lat: lat, center_lon: lng, radius }
  })
  return data
}

/**
 * Gets a prediction about arrival time and distance for a bus service at the given stop.
 * @alias module:transantiago-client.prediction
 * @param {string} stopId - code of the stopç
 * @returns {Object}
 */
async function prediction (stopId) {
  const { data } = await axios.get(
    `${BASE_URL}/v2/stops/${stopId}/next_arrivals`
  )
  return data
}

/**
 * Gets the route for a bus service
 * @alias module:transantiago-client.route
 * @param {string} routeId - bus service code
 * @returns {Object}
 */
async function route (routeId) {
  const { data } = await axios.get(
    `${BASE_URL}/v2/routes/${routeId}/directions`
  )
  return data
}

module.exports = {
  nearlyBusStops,
  prediction,
  route
}
