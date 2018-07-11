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
      const response = { results: [{ direction_id: 0 }] }
      moxios.stubRequest(
        `https://api.scltrans.it/v2/routes/${serviceCode}/directions`,
        {
          status: 200,
          response
        }
      )
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
      const radius = 200
      const response = { results: [{ id: 1 }, { id: 2 }] }
      moxios.stubRequest(
        `https://api.scltrans.it/v1/stops?center_lat=${lat}&center_lon=${lng}&radius=${radius}`,
        { status: 200, response }
      )
      const nearlyBusStopsResponse = await transantiago.nearlyBusStops(
        lat,
        lng,
        radius
      )
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
        const stopId = 'PD111'
        const response = { results: [{ id: 1 }, { id: 2 }] }
        moxios.stubRequest(
          `https://api.scltrans.it/v2/stops/${stopId}/next_arrivals`,
          { status: 200, response }
        )
        const predictionResponse = await transantiago.prediction(stopId)
        expect(predictionResponse).to.equal(response)
      })
    })

    context('when serviceCode is specified', () => {
      it('calls the correct API endpoint', async () => {
        const stopId = 'PD111'
        const routeId = '514'
        const response = { results: [{ route_id: routeId }] }
        moxios.stubRequest(
          `https://api.scltrans.it/v2/stops/${stopId}/next_arrivals`,
          { status: 200, response }
        )
        const predictionResponse = await transantiago.prediction(
          stopId,
          routeId
        )
        expect(predictionResponse).to.equal(response)
      })
    })
  })
})
