var expect = require('chai').expect
var getStrength = require('../lib/passwordMeter')

describe('passwordMeter', () => {
  it('should return enter your password by default', () => {
    expect(getStrength('')).to.be.equal('enter_pw')
  })
})
