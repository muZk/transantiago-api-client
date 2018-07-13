const { expect } = require('chai')

describe('Transantiago API Client', () => {
  const transantiago = require('../src/index')

  describe('properties', () => {
    const properties = [
      'agencies',
      'bipSpots',
      'buses',
      'map',
      'routes',
      'stops'
    ]

    properties.forEach(property => {
      it(`has ${property} property`, () =>
        expect(transantiago).to.have.property(property))
    })
  })
})
