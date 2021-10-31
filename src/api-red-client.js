const axios = require('axios')

module.exports = axios.create({
  baseURL: 'https://red-api.chewy.workers.dev/'
})
