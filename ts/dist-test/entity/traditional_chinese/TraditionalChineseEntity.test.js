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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TraditionalChineseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RED_TIDE_INFORMATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RED_TIDE_INFORMATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.RedTideInformationSDK.test();
        const ent = testsdk.TraditionalChinese();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RED_TIDE_INFORMATION_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'traditional_chinese.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "date": { "a": true, "fo": "date", "h": "Date", "n": "date", "r": false, "sh": "Date when the red tide was sighted", "t": "`$STRING`", "key$": "date", "index$": 0 }, "location": { "a": true, "h": "Location", "n": "location", "r": false, "sh": "Location in Hong Kong waters where the red tide was observed", "t": "`$STRING`", "key$": "location", "index$": 1 }, "remarks": { "a": true, "h": "Remarks", "n": "remarks", "r": false, "sh": "Additional remarks or observations", "t": "`$STRING`", "key$": "remarks", "index$": 2 }, "species": { "a": true, "h": "Species", "n": "species", "r": false, "sh": "Species causing the red tide", "t": "`$STRING`", "key$": "species", "index$": 3 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "Current status of the red tide event", "t": "`$STRING`", "key$": "status", "index$": 4 } }, "name": "traditional_chinese", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese", "q": { "exist": ["format"] }, "r": {}, "s": [{ "lit": "en-data" }, { "lit": "dataset" }, { "lit": "hk-afcd-afcdlist-red-tide-location" }, { "lit": "resource" }, { "lit": "traditional-chinese" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "traditional_chinese", "name__orig": "traditional_chinese", "Name": "TraditionalChinese", "name_": "traditional_chinese", "name-": "traditional-chinese", "NAME": "TRADITIONAL_CHINESE", "index$": 2 }, { "active": true, "entity": "traditional_chinese", "key$": "BasicTraditionalChineseFlow", "kind": "basic", "name": "BasicTraditionalChineseFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "traditional_chinese_ref01" } }], "index$": 0 }] }, 'TraditionalChinese', { "GET /en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese": { "protocol": "http", "operationId": "getRedTideTraditionalChinese", "responses": { "200": { "description": "Successful response with red tide information in Traditional Chinese", "content": { "application/json": { "schema": { "type": "object", "properties": { "data": { "items": { "description": "Individual red tide sighting record", "properties": { "date": { "description": "Date when the red tide was sighted", "format": "date", "type": "string", "key$": "date" }, "location": { "description": "Location in Hong Kong waters where the red tide was observed", "type": "string", "key$": "location" }, "remarks": { "description": "Additional remarks or observations", "type": "string", "key$": "remarks" }, "species": { "description": "Species causing the red tide", "type": "string", "key$": "species" }, "status": { "description": "Current status of the red tide event", "type": "string", "key$": "status" } }, "type": "object", "x-ref": "#/components/schemas/RedTideRecord", "index$": 0 }, "key$": "data", "type": "array" }, "metadata": { "key$": "metadata", "properties": { "category": { "description": "Data category", "example": "Environment", "type": "string" }, "lastUpdated": { "description": "Timestamp of the last data update", "format": "date-time", "type": "string" }, "provider": { "description": "Data provider organization", "example": "Agriculture, Fisheries and Conservation Department", "type": "string" }, "recordCount": { "description": "Total number of records in the response", "type": "integer" }, "updateFrequency": { "description": "Frequency of data updates", "example": "Every Week", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Metadata" } }, "x-ref": "#/components/schemas/RedTideResponse" } }, "text/csv": { "schema": { "type": "string" } } } }, "400": { "description": "Bad request", "content": { "application/json": { "schema": { "type": "object", "properties": { "code": { "type": "string", "description": "Error code" }, "message": { "type": "string", "description": "Error message describing what went wrong" }, "details": { "type": "string", "description": "Additional error details" } }, "required": ["code", "message"], "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "code": { "type": "string", "description": "Error code" }, "message": { "type": "string", "description": "Error message describing what went wrong" }, "details": { "type": "string", "description": "Additional error details" } }, "required": ["code", "message"], "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "format", "in": "query", "description": "Response format (csv or json)", "required": false, "schema": { "type": "string", "enum": ["csv", "json"], "default": "json" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let traditional_chinese_ref01_data = Object.values(setup.data.existing.traditional_chinese)[0];
        // LIST
        const traditional_chinese_ref01_ent = client.TraditionalChinese();
        const traditional_chinese_ref01_match = {};
        const traditional_chinese_ref01_list = (await traditional_chinese_ref01_ent.list(traditional_chinese_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/traditional_chinese/TraditionalChineseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.RedTideInformationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['traditional_chinese01', 'traditional_chinese02', 'traditional_chinese03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RED_TIDE_INFORMATION_TEST_TRADITIONAL_CHINESE_ENTID': idmap,
        'RED_TIDE_INFORMATION_TEST_LIVE': 'FALSE',
        'RED_TIDE_INFORMATION_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['RED_TIDE_INFORMATION_TEST_TRADITIONAL_CHINESE_ENTID'];
    const live = 'TRUE' === env.RED_TIDE_INFORMATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RED_TIDE_INFORMATION_TEST_TRADITIONAL_CHINESE_ENTID'];
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
//# sourceMappingURL=TraditionalChineseEntity.test.js.map