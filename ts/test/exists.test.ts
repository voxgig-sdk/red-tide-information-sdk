
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RedTideInformationSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await RedTideInformationSDK.test()
    equal(null !== testsdk, true)
  })

})
