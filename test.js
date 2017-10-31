const { expect } = require('chai')
const moxios = require('moxios')

describe('Transantiago API Client', () => {
  const transantiago = require('./index')

  describe('properties', () => {
    it('has route property', () => {
      expect(transantiago).to.have.property('route')
      expect(transantiago.route).to.be.a('function')
    })

    it('has nearlyBusStops property', () => {
      expect(transantiago).to.have.property('nearlyBusStops')
      expect(transantiago.nearlyBusStops).to.be.a('function')
    })

    it('has prediction property', () => {
      expect(transantiago).to.have.property('route')
      expect(transantiago.prediction).to.be.a('function')
    })
  })

  describe('#route', () => {
    beforeEach(function () {
      moxios.install()
    })

    afterEach(function () {
      moxios.uninstall()
    })

    it('calls the correct API endpoint', async () => {
      const serviceCode = '514'
      const response = { paradero: serviceCode }
      moxios.stubRequest('https://www.transantiago.cl/restservice/rest/getrecorrido/514', { status: 200, response })
      const routeResponse = await transantiago.route(serviceCode)
      expect(routeResponse).to.equal(response)
    })
  })

  describe('#nearlyBusStops', () => {
    beforeEach(function () {
      moxios.install()
    })

    afterEach(function () {
      moxios.uninstall()
    })

    it('calls the correct API endpoint', async () => {
      const lat = -33
      const lng = -70
      const response = [{ id: 1 }, { id: 2 }]
      moxios.stubRequest(`https://www.transantiago.cl/restservice/rest/getpuntoparada?lat=${lat}&lng=${lng}`, { status: 200, response })
      const nearlyBusStopsResponse = await transantiago.nearlyBusStops(lat, lng)
      expect(nearlyBusStopsResponse).to.equal(response)
    })
  })

  describe('#prediction', () => {
    beforeEach(function () {
      moxios.install()
    })

    afterEach(function () {
      moxios.uninstall()
    })

    context('when serviceCode is not specified', () => {
      it('calls the correct API endpoint', async () => {
        const stopCode = 'PD111'
        const response = [{ id: 1 }, { id: 2 }]
        moxios.stubRequest(`https://www.transantiago.cl/predictor/prediccion?codsimt=${stopCode}&codser=`, { status: 200, response })
        const predictionResponse = await transantiago.prediction(stopCode)
        expect(predictionResponse).to.equal(response)
      })
    })

    context('when serviceCode is specified', () => {
      it('calls the correct API endpoint', async () => {
        const stopCode = 'PD111'
        const serviceCode = '514'
        const response = [{ id: 1 }, { id: 2 }]
        moxios.stubRequest(`https://www.transantiago.cl/predictor/prediccion?codsimt=${stopCode}&codser=${serviceCode}`, { status: 200, response })
        const predictionResponse = await transantiago.prediction(stopCode, serviceCode)
        expect(predictionResponse).to.equal(response)
      })
    })
  })
})
