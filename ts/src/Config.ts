
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

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'RedTideInformation',
        slug: "red-tide-information",
    version: "0.0.1",
    target: "ts",

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

