const { expect } = require('chai')
const sinon = require('sinon')
const client = require('../src/api-client')

describe('Stops', () => {
  const rutes = require('../src/Stops')

  beforeEach(() => {
    sinon.stub(client, 'get')
  })

  afterEach(() => {
    client.get.restore()
  })

  describe('properties', () => {
    const properties = ['list', 'find', 'nextArrivals', 'stopRoutes']

    properties.forEach(property => {
      it(`has ${property} property`, () =>
        expect(rutes).to.have.property(property))
    })
  })

  describe('.list', () => {
    it('calls the correct API endpoint', () => {
      rutes.list()
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v1/stops')
    })
  })

  describe('.find', () => {
    it('calls the correct API endpoint', () => {
      rutes.find('a')
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v1/stops/a')
    })
  })

  describe('.nextArrivals', () => {
    it('calls the correct API endpoint', () => {
      rutes.nextArrivals('a')
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v2/stops/a/next_arrivals')
    })
  })

  describe('.stopRoutes', () => {
    it('calls the correct API endpoint', () => {
      rutes.stopRoutes('a')
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v3/stops/a/stop_routes')
    })
  })
})
