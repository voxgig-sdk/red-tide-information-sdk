
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { RedTideInformationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('TraditionalChineseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RED_TIDE_INFORMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('RED_TIDE_INFORMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RedTideInformationSDK.test()
    const ent = testsdk.TraditionalChinese()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RED_TIDE_INFORMATION_TEST_LIVE
    for (const op of ['list']) {
      if (maybeSkipControl(t, 'entityOp', 'traditional_chinese.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set RED_TIDE_INFORMATION_TEST_TRADITIONAL_CHINESE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let traditional_chinese_ref01_data = Object.values(setup.data.existing.traditional_chinese)[0] as any

    // LIST
    const traditional_chinese_ref01_ent = client.TraditionalChinese()
    const traditional_chinese_ref01_match: any = {}

    const traditional_chinese_ref01_list = (await traditional_chinese_ref01_ent.list(traditional_chinese_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/traditional_chinese/TraditionalChineseTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RedTideInformationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['traditional_chinese01','traditional_chinese02','traditional_chinese03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['RED_TIDE_INFORMATION_TEST_TRADITIONAL_CHINESE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'RED_TIDE_INFORMATION_TEST_TRADITIONAL_CHINESE_ENTID': idmap,
    'RED_TIDE_INFORMATION_TEST_LIVE': 'FALSE',
    'RED_TIDE_INFORMATION_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RED_TIDE_INFORMATION_TEST_TRADITIONAL_CHINESE_ENTID']

  const live = 'TRUE' === env.RED_TIDE_INFORMATION_TEST_LIVE

  if (live) {
    client = new RedTideInformationSDK(merge([
      {
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.RED_TIDE_INFORMATION_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
