"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'RedTideInformation',
        slug: "red-tide-information",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://data.gov.hk",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            english: {},
            simplified_chinese: {},
            traditional_chinese: {},
        }
    };
    entity = {
        "english": {
            "fields": [
                {
                    "name": "date",
                    "title": "Date",
                    "type": "`$STRING`",
                    "short": "Date when the red tide was sighted",
                    "format": "date"
                },
                {
                    "name": "location",
                    "title": "Location",
                    "type": "`$STRING`",
                    "short": "Location in Hong Kong waters where the red tide was observed"
                },
                {
                    "name": "remarks",
                    "title": "Remarks",
                    "type": "`$STRING`",
                    "short": "Additional remarks or observations"
                },
                {
                    "name": "species",
                    "title": "Species",
                    "type": "`$STRING`",
                    "short": "Species causing the red tide"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "short": "Current status of the red tide event"
                }
            ],
            "name": "english",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english",
                            "segments": [
                                {
                                    "lit": "en-data"
                                },
                                {
                                    "lit": "dataset"
                                },
                                {
                                    "lit": "hk-afcd-afcdlist-red-tide-location"
                                },
                                {
                                    "lit": "resource"
                                },
                                {
                                    "lit": "english"
                                }
                            ],
                            "parts": [
                                "en-data",
                                "dataset",
                                "hk-afcd-afcdlist-red-tide-location",
                                "resource",
                                "english"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "json"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "simplified_chinese": {
            "fields": [
                {
                    "name": "date",
                    "title": "Date",
                    "type": "`$STRING`",
                    "short": "Date when the red tide was sighted",
                    "format": "date"
                },
                {
                    "name": "location",
                    "title": "Location",
                    "type": "`$STRING`",
                    "short": "Location in Hong Kong waters where the red tide was observed"
                },
                {
                    "name": "remarks",
                    "title": "Remarks",
                    "type": "`$STRING`",
                    "short": "Additional remarks or observations"
                },
                {
                    "name": "species",
                    "title": "Species",
                    "type": "`$STRING`",
                    "short": "Species causing the red tide"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "short": "Current status of the red tide event"
                }
            ],
            "name": "simplified_chinese",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/simplified-chinese",
                            "segments": [
                                {
                                    "lit": "en-data"
                                },
                                {
                                    "lit": "dataset"
                                },
                                {
                                    "lit": "hk-afcd-afcdlist-red-tide-location"
                                },
                                {
                                    "lit": "resource"
                                },
                                {
                                    "lit": "simplified-chinese"
                                }
                            ],
                            "parts": [
                                "en-data",
                                "dataset",
                                "hk-afcd-afcdlist-red-tide-location",
                                "resource",
                                "simplified-chinese"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "json"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "traditional_chinese": {
            "fields": [
                {
                    "name": "date",
                    "title": "Date",
                    "type": "`$STRING`",
                    "short": "Date when the red tide was sighted",
                    "format": "date"
                },
                {
                    "name": "location",
                    "title": "Location",
                    "type": "`$STRING`",
                    "short": "Location in Hong Kong waters where the red tide was observed"
                },
                {
                    "name": "remarks",
                    "title": "Remarks",
                    "type": "`$STRING`",
                    "short": "Additional remarks or observations"
                },
                {
                    "name": "species",
                    "title": "Species",
                    "type": "`$STRING`",
                    "short": "Species causing the red tide"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "short": "Current status of the red tide event"
                }
            ],
            "name": "traditional_chinese",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese",
                            "segments": [
                                {
                                    "lit": "en-data"
                                },
                                {
                                    "lit": "dataset"
                                },
                                {
                                    "lit": "hk-afcd-afcdlist-red-tide-location"
                                },
                                {
                                    "lit": "resource"
                                },
                                {
                                    "lit": "traditional-chinese"
                                }
                            ],
                            "parts": [
                                "en-data",
                                "dataset",
                                "hk-afcd-afcdlist-red-tide-location",
                                "resource",
                                "traditional-chinese"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "json"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map