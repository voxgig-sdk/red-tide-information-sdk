

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('EnglishEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RED_TIDE_INFORMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('RED_TIDE_INFORMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RedTideInformationSDK.test()
    const ent = testsdk.English()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RED_TIDE_INFORMATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'english.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date":{"a":true,"fo":"date","h":"Date","n":"date","r":false,"sh":"Date when the red tide was sighted","t":"`$STRING`","key$":"date","index$":0},"location":{"a":true,"h":"Location","n":"location","r":false,"sh":"Location in Hong Kong waters where the red tide was observed","t":"`$STRING`","key$":"location","index$":1},"remarks":{"a":true,"h":"Remarks","n":"remarks","r":false,"sh":"Additional remarks or observations","t":"`$STRING`","key$":"remarks","index$":2},"species":{"a":true,"h":"Species","n":"species","r":false,"sh":"Species causing the red tide","t":"`$STRING`","key$":"species","index$":3},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Current status of the red tide event","t":"`$STRING`","key$":"status","index$":4}},"name":"english","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english","q":{"exist":["format"]},"r":{},"s":[{"lit":"en-data"},{"lit":"dataset"},{"lit":"hk-afcd-afcdlist-red-tide-location"},{"lit":"resource"},{"lit":"english"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"english","name__orig":"english","Name":"English","name_":"english","name-":"english","NAME":"ENGLISH","index$":0}, {"active":true,"entity":"english","key$":"BasicEnglishFlow","kind":"basic","name":"BasicEnglishFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"english_ref01"}}],"index$":0}]}, 'English', {"GET /en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english":{"protocol":"http","operationId":"getRedTideEnglish","responses":{"200":{"description":"Successful response with red tide information in English","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"items":{"description":"Individual red tide sighting record","properties":{"date":{"description":"Date when the red tide was sighted","format":"date","type":"string","key$":"date"},"location":{"description":"Location in Hong Kong waters where the red tide was observed","type":"string","key$":"location"},"remarks":{"description":"Additional remarks or observations","type":"string","key$":"remarks"},"species":{"description":"Species causing the red tide","type":"string","key$":"species"},"status":{"description":"Current status of the red tide event","type":"string","key$":"status"}},"type":"object","x-ref":"#/components/schemas/RedTideRecord","index$":0},"key$":"data","type":"array"},"metadata":{"key$":"metadata","properties":{"category":{"description":"Data category","example":"Environment","type":"string"},"lastUpdated":{"description":"Timestamp of the last data update","format":"date-time","type":"string"},"provider":{"description":"Data provider organization","example":"Agriculture, Fisheries and Conservation Department","type":"string"},"recordCount":{"description":"Total number of records in the response","type":"integer"},"updateFrequency":{"description":"Frequency of data updates","example":"Every Week","type":"string"}},"type":"object","x-ref":"#/components/schemas/Metadata"}},"x-ref":"#/components/schemas/RedTideResponse"}},"text/csv":{"schema":{"type":"string"}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Error message describing what went wrong"},"details":{"type":"string","description":"Additional error details"}},"required":["code","message"],"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Error message describing what went wrong"},"details":{"type":"string","description":"Additional error details"}},"required":["code","message"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"format","in":"query","description":"Response format (csv or json)","required":false,"schema":{"type":"string","enum":["csv","json"],"default":"json"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let english_ref01_data = Object.values(setup.data.existing.english)[0] as any

    // LIST
    const english_ref01_ent = client.English()
    const english_ref01_match: any = {}

    const english_ref01_list = (await english_ref01_ent.list(english_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/english/EnglishTestData.json')

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
    ['english01','english02','english03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RED_TIDE_INFORMATION_TEST_ENGLISH_ENTID': idmap,
    'RED_TIDE_INFORMATION_TEST_LIVE': 'FALSE',
    'RED_TIDE_INFORMATION_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RED_TIDE_INFORMATION_TEST_ENGLISH_ENTID']

  const live = 'TRUE' === env.RED_TIDE_INFORMATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RED_TIDE_INFORMATION_TEST_ENGLISH_ENTID']
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
  
