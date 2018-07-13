const { expect } = require('chai')
const sinon = require('sinon')
const client = require('../src/api-client')

describe('Map', () => {
  const map = require('../src/Map')

  beforeEach(() => {
    sinon.stub(client, 'get')
  })

  afterEach(() => {
    client.get.restore()
  })

  describe('properties', () => {
    const properties = ['list']

    properties.forEach(property => {
      it(`has ${property} property`, () =>
        expect(map).to.have.property(property))
    })
  })

  describe('.list', () => {
    it('calls the correct API endpoint', () => {
      map.list()
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v2/map')
    })
  })
})
