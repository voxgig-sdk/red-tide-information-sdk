
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'RedTideInformation',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://data.gov.hk",

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
          "name": "date",
          "type": "`$STRING`"
        },
        {
          "name": "location",
          "type": "`$STRING`"
        },
        {
          "name": "remarks",
          "type": "`$STRING`"
        },
        {
          "name": "species",
          "type": "`$STRING`"
        },
        {
          "name": "status",
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
          "type": "`$STRING`"
        },
        {
          "name": "location",
          "type": "`$STRING`"
        },
        {
          "name": "remarks",
          "type": "`$STRING`"
        },
        {
          "name": "species",
          "type": "`$STRING`"
        },
        {
          "name": "status",
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
          "type": "`$STRING`"
        },
        {
          "name": "location",
          "type": "`$STRING`"
        },
        {
          "name": "remarks",
          "type": "`$STRING`"
        },
        {
          "name": "species",
          "type": "`$STRING`"
        },
        {
          "name": "status",
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
              }
            }
          ]
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

