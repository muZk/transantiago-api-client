const { expect } = require('chai')
const sinon = require('sinon')
const client = require('../src/api-client')

describe('Agencies', () => {
  const agencies = require('../src/Agencies')

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
        expect(agencies).to.have.property(property))
    })
  })

  describe('.list', () => {
    it('calls the correct API endpoint', () => {
      agencies.list()
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v1/agencies')
    })
  })
})
