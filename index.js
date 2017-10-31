const axios = require('axios')

/**
 * Unofficial API Client for querying data from Transantiago.
 * @module transantiago-client
 */

const BASE_URL = 'https://www.transantiago.cl'
const REST_BASE_URL = `${BASE_URL}/restservice/rest`

/**
 * Gets nearly bus stops for the given position (lat, lng)
 * @alias module:transantiago-client.nearlyBusStops
 * @param {number|string} lat - position latitude
 * @param {number|string} lng - position longitude
 * @returns {Object[]}
 */
async function nearlyBusStops (lat, lng) {
  const { data } = await axios.get(`${REST_BASE_URL}/getpuntoparada`, { params: { lat, lng } })
  return data || []
}

/**
 * Gets a prediction about arrival time and distance for a bus service at the given stop.
 * @alias module:transantiago-client.prediction
 * @param {string} stopCode - code of the stop
 * @param {string} [serviceCode=''] - code of the bus service. If not specified, it will query for all services in the stop
 * @returns {Object}
 */
async function prediction (stopCode, serviceCode = '') {
  const { data } = await axios.get(`${BASE_URL}/predictor/prediccion`, { params: { codsimt: stopCode, codser: serviceCode } })
  return data || null
}

/**
 * Gets the route for a bus service
 * @alias module:transantiago-client.route
 * @param {string} serviceCode - bus service code
 * @returns {Object[]}
 */
async function route (serviceCode) {
  const { data } = await axios.get(`${REST_BASE_URL}/getrecorrido/${serviceCode}`)
  return data || []
}

module.exports = {
  nearlyBusStops,
  prediction,
  route
}
