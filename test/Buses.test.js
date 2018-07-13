const { expect } = require('chai')
const sinon = require('sinon')
const client = require('../src/api-client')

describe('Buses', () => {
  const buses = require('../src/Buses')

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
        expect(buses).to.have.property(property))
    })
  })

  describe('.list', () => {
    it('calls the correct API endpoint', () => {
      buses.list()
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v1/buses')
    })
  })

  describe('.find', () => {
    it('calls the correct API endpoint', () => {
      buses.find('a')
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v1/buses/a')
    })
  })
})
