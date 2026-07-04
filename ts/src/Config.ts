
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://data.gov.hk',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      english: {
      },

      simplified_chinese: {
      },

      traditional_chinese: {
      },

    }
  }


  entity = {
    "english": {
      "fields": [
        {
          "active": true,
          "name": "date",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "location",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "remark",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "species",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "status",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        }
      ],
      "name": "english",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english",
              "parts": [
                "en-data",
                "dataset",
                "hk-afcd-afcdlist-red-tide-location",
                "resource",
                "english"
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
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "simplified_chinese": {
      "fields": [
        {
          "active": true,
          "name": "date",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "location",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "remark",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "species",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "status",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        }
      ],
      "name": "simplified_chinese",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/simplified-chinese",
              "parts": [
                "en-data",
                "dataset",
                "hk-afcd-afcdlist-red-tide-location",
                "resource",
                "simplified-chinese"
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
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "traditional_chinese": {
      "fields": [
        {
          "active": true,
          "name": "date",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "location",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "remark",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "species",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "status",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        }
      ],
      "name": "traditional_chinese",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese",
              "parts": [
                "en-data",
                "dataset",
                "hk-afcd-afcdlist-red-tide-location",
                "resource",
                "traditional-chinese"
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
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

