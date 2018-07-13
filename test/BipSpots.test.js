const { expect } = require('chai')
const sinon = require('sinon')
const client = require('../src/api-client')

describe('Buses', () => {
  const bipSpots = require('../src/BipSpots')

  beforeEach(() => {
    sinon.stub(client, 'get')
  })

  afterEach(() => {
    client.get.restore()
  })

  describe('properties', () => {
    const properties = ['list', 'find']

    properties.forEach(property => {
      it(`has ${property} property`, () =>
        expect(bipSpots).to.have.property(property))
    })
  })

  describe('.list', () => {
    it('calls the correct API endpoint', () => {
      bipSpots.list()
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v1/bip_spots')
    })
  })

  describe('.find', () => {
    it('calls the correct API endpoint', () => {
      bipSpots.find('a')
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v1/bip_spots/a')
    })
  })
})
