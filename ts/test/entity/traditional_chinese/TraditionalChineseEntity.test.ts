

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RedTideInformationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


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
      if (!live && maybeSkipControl(t, 'entityOp', 'traditional_chinese.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"date","req":false,"short":"Date when the red tide was sighted","type":"`$STRING`","index$":0},{"active":true,"name":"location","req":false,"short":"Location in Hong Kong waters where the red tide was observed","type":"`$STRING`","index$":1},{"active":true,"name":"remarks","req":false,"short":"Additional remarks or observations","type":"`$STRING`","index$":2},{"active":true,"name":"species","req":false,"short":"Species causing the red tide","type":"`$STRING`","index$":3},{"active":true,"name":"status","req":false,"short":"Current status of the red tide event","type":"`$STRING`","index$":4}],"name":"traditional_chinese","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese","json":"{\"operationId\":\"getRedTideTraditionalChinese\",\"parameters\":[{\"description\":\"Response format (csv or json)\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"csv\",\"json\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"description\":\"Individual red tide sighting record\",\"properties\":{\"date\":{\"description\":\"Date when the red tide was sighted\",\"format\":\"date\",\"type\":\"string\"},\"location\":{\"description\":\"Location in Hong Kong waters where the red tide was observed\",\"type\":\"string\"},\"remarks\":{\"description\":\"Additional remarks or observations\",\"type\":\"string\"},\"species\":{\"description\":\"Species causing the red tide\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the red tide event\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"metadata\":{\"properties\":{\"category\":{\"description\":\"Data category\",\"example\":\"Environment\",\"type\":\"string\"},\"lastUpdated\":{\"description\":\"Timestamp of the last data update\",\"format\":\"date-time\",\"type\":\"string\"},\"provider\":{\"description\":\"Data provider organization\",\"example\":\"Agriculture, Fisheries and Conservation Department\",\"type\":\"string\"},\"recordCount\":{\"description\":\"Total number of records in the response\",\"type\":\"integer\"},\"updateFrequency\":{\"description\":\"Frequency of data updates\",\"example\":\"Every Week\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"text/csv\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with red tide information in Traditional Chinese\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese","segments":[{"lit":"en-data"},{"lit":"dataset"},{"lit":"hk-afcd-afcdlist-red-tide-location"},{"lit":"resource"},{"lit":"traditional-chinese"}],"select":{"exist":["format"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"traditional_chinese","name__orig":"traditional_chinese","Name":"TraditionalChinese","name_":"traditional_chinese","name-":"traditional-chinese","NAME":"TRADITIONAL_CHINESE","index$":2}, {"active":true,"entity":"traditional_chinese","key$":"BasicTraditionalChineseFlow","kind":"basic","name":"BasicTraditionalChineseFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"traditional_chinese_ref01"}}],"index$":0}]}, 'TraditionalChinese')
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

  const env = envOverride({
    'RED_TIDE_INFORMATION_TEST_TRADITIONAL_CHINESE_ENTID': idmap,
    'RED_TIDE_INFORMATION_TEST_LIVE': 'FALSE',
    'RED_TIDE_INFORMATION_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RED_TIDE_INFORMATION_TEST_TRADITIONAL_CHINESE_ENTID']

  const live = 'TRUE' === env.RED_TIDE_INFORMATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RED_TIDE_INFORMATION_TEST_TRADITIONAL_CHINESE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RedTideInformationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
