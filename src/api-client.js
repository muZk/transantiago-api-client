const axios = require('axios')

module.exports = axios.create({
  baseURL: 'https://api.scltrans.it'
})
