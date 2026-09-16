"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('EnglishEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RED_TIDE_INFORMATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RED_TIDE_INFORMATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.RedTideInformationSDK.test();
        const ent = testsdk.English();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RED_TIDE_INFORMATION_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'english.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date", "name": "date", "req": false, "short": "Date when the red tide was sighted", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "location", "req": false, "short": "Location in Hong Kong waters where the red tide was observed", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "remarks", "req": false, "short": "Additional remarks or observations", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "species", "req": false, "short": "Species causing the red tide", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "status", "req": false, "short": "Current status of the red tide event", "type": "`$STRING`", "index$": 4 }], "name": "english", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english", "json": "{\"operationId\":\"getRedTideEnglish\",\"parameters\":[{\"description\":\"Response format (csv or json)\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"csv\",\"json\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"description\":\"Individual red tide sighting record\",\"properties\":{\"date\":{\"description\":\"Date when the red tide was sighted\",\"format\":\"date\",\"type\":\"string\"},\"location\":{\"description\":\"Location in Hong Kong waters where the red tide was observed\",\"type\":\"string\"},\"remarks\":{\"description\":\"Additional remarks or observations\",\"type\":\"string\"},\"species\":{\"description\":\"Species causing the red tide\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the red tide event\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"metadata\":{\"properties\":{\"category\":{\"description\":\"Data category\",\"example\":\"Environment\",\"type\":\"string\"},\"lastUpdated\":{\"description\":\"Timestamp of the last data update\",\"format\":\"date-time\",\"type\":\"string\"},\"provider\":{\"description\":\"Data provider organization\",\"example\":\"Agriculture, Fisheries and Conservation Department\",\"type\":\"string\"},\"recordCount\":{\"description\":\"Total number of records in the response\",\"type\":\"integer\"},\"updateFrequency\":{\"description\":\"Frequency of data updates\",\"example\":\"Every Week\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"text/csv\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with red tide information in English\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english", "segments": [{ "lit": "en-data" }, { "lit": "dataset" }, { "lit": "hk-afcd-afcdlist-red-tide-location" }, { "lit": "resource" }, { "lit": "english" }], "select": { "exist": ["format"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "english", "name__orig": "english", "Name": "English", "name_": "english", "name-": "english", "NAME": "ENGLISH", "index$": 0 }, { "active": true, "entity": "english", "key$": "BasicEnglishFlow", "kind": "basic", "name": "BasicEnglishFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "english_ref01" } }], "index$": 0 }] }, 'English');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let english_ref01_data = Object.values(setup.data.existing.english)[0];
        // LIST
        const english_ref01_ent = client.English();
        const english_ref01_match = {};
        const english_ref01_list = (await english_ref01_ent.list(english_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/english/EnglishTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.RedTideInformationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['english01', 'english02', 'english03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RED_TIDE_INFORMATION_TEST_ENGLISH_ENTID': idmap,
        'RED_TIDE_INFORMATION_TEST_LIVE': 'FALSE',
        'RED_TIDE_INFORMATION_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['RED_TIDE_INFORMATION_TEST_ENGLISH_ENTID'];
    const live = 'TRUE' === env.RED_TIDE_INFORMATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RED_TIDE_INFORMATION_TEST_ENGLISH_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.RedTideInformationSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=EnglishEntity.test.js.map