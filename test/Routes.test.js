const { expect } = require('chai')
const sinon = require('sinon')
const client = require('../src/api-client')

describe('Routes', () => {
  const rutes = require('../src/Routes')

  beforeEach(() => {
    sinon.stub(client, 'get')
  })

  afterEach(() => {
    client.get.restore()
  })

  describe('properties', () => {
    const properties = ['list', 'find', 'directions', 'direction']

    properties.forEach(property => {
      it(`has ${property} property`, () =>
        expect(rutes).to.have.property(property))
    })
  })

  describe('.list', () => {
    it('calls the correct API endpoint', () => {
      rutes.list()
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v1/routes')
    })
  })

  describe('.find', () => {
    it('calls the correct API endpoint', () => {
      rutes.find('a')
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v1/routes/a')
    })
  })

  describe('.directions', () => {
    it('calls the correct API endpoint', () => {
      rutes.directions('a')
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v2/routes/a/directions')
    })
  })

  describe('.direction', () => {
    it('calls the correct API endpoint', () => {
      rutes.direction('a', 'b')
      expect(client.get.called).to.eql(true)
      expect(client.get.getCall(0).args[0]).to.eql('/v2/routes/a/directions/b')
    })
  })
})
