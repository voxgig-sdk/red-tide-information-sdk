"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
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
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
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
                    "format": "date",
                    "name": "date",
                    "short": "Date when the red tide was sighted",
                    "type": "`$STRING`"
                },
                {
                    "name": "location",
                    "short": "Location in Hong Kong waters where the red tide was observed",
                    "type": "`$STRING`"
                },
                {
                    "name": "remarks",
                    "short": "Additional remarks or observations",
                    "type": "`$STRING`"
                },
                {
                    "name": "species",
                    "short": "Species causing the red tide",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "short": "Current status of the red tide event",
                    "type": "`$STRING`"
                }
            ],
            "name": "english",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
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
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "en-data",
                                "dataset",
                                "hk-afcd-afcdlist-red-tide-location",
                                "resource",
                                "english"
                            ]
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
                    "format": "date",
                    "name": "date",
                    "short": "Date when the red tide was sighted",
                    "type": "`$STRING`"
                },
                {
                    "name": "location",
                    "short": "Location in Hong Kong waters where the red tide was observed",
                    "type": "`$STRING`"
                },
                {
                    "name": "remarks",
                    "short": "Additional remarks or observations",
                    "type": "`$STRING`"
                },
                {
                    "name": "species",
                    "short": "Species causing the red tide",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "short": "Current status of the red tide event",
                    "type": "`$STRING`"
                }
            ],
            "name": "simplified_chinese",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
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
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "en-data",
                                "dataset",
                                "hk-afcd-afcdlist-red-tide-location",
                                "resource",
                                "simplified-chinese"
                            ]
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
                    "format": "date",
                    "name": "date",
                    "short": "Date when the red tide was sighted",
                    "type": "`$STRING`"
                },
                {
                    "name": "location",
                    "short": "Location in Hong Kong waters where the red tide was observed",
                    "type": "`$STRING`"
                },
                {
                    "name": "remarks",
                    "short": "Additional remarks or observations",
                    "type": "`$STRING`"
                },
                {
                    "name": "species",
                    "short": "Species causing the red tide",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "short": "Current status of the red tide event",
                    "type": "`$STRING`"
                }
            ],
            "name": "traditional_chinese",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
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
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "en-data",
                                "dataset",
                                "hk-afcd-afcdlist-red-tide-location",
                                "resource",
                                "traditional-chinese"
                            ]
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