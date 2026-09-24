
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RedTideInformationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RedTideInformationSDK.test()
    equal(testsdk instanceof RedTideInformationSDK, true,
      'RedTideInformationSDK.test() must return a client synchronously')
  })

})
