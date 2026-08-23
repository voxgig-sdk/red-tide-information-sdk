-- RedTideInformation SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "RedTideInformation",
      slug = "red-tide-information",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://data.gov.hk",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["english"] = {},
        ["simplified_chinese"] = {},
        ["traditional_chinese"] = {},
      },
    },
    entity = {
      ["english"] = {
        ["fields"] = {
          {
            ["name"] = "date",
            ["short"] = "Date when the red tide was sighted",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["short"] = "Location in Hong Kong waters where the red tide was observed",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "remarks",
            ["short"] = "Additional remarks or observations",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "species",
            ["short"] = "Species causing the red tide",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "Current status of the red tide event",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "english",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english",
                ["parts"] = {
                  "en-data",
                  "dataset",
                  "hk-afcd-afcdlist-red-tide-location",
                  "resource",
                  "english",
                },
                ["select"] = {
                  ["exist"] = {
                    "format",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["simplified_chinese"] = {
        ["fields"] = {
          {
            ["name"] = "date",
            ["short"] = "Date when the red tide was sighted",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["short"] = "Location in Hong Kong waters where the red tide was observed",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "remarks",
            ["short"] = "Additional remarks or observations",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "species",
            ["short"] = "Species causing the red tide",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "Current status of the red tide event",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "simplified_chinese",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/simplified-chinese",
                ["parts"] = {
                  "en-data",
                  "dataset",
                  "hk-afcd-afcdlist-red-tide-location",
                  "resource",
                  "simplified-chinese",
                },
                ["select"] = {
                  ["exist"] = {
                    "format",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["traditional_chinese"] = {
        ["fields"] = {
          {
            ["name"] = "date",
            ["short"] = "Date when the red tide was sighted",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["short"] = "Location in Hong Kong waters where the red tide was observed",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "remarks",
            ["short"] = "Additional remarks or observations",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "species",
            ["short"] = "Species causing the red tide",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "Current status of the red tide event",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "traditional_chinese",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese",
                ["parts"] = {
                  "en-data",
                  "dataset",
                  "hk-afcd-afcdlist-red-tide-location",
                  "resource",
                  "traditional-chinese",
                },
                ["select"] = {
                  ["exist"] = {
                    "format",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
