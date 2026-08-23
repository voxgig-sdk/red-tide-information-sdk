# RedTideInformation SDK configuration

module RedTideInformationConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "RedTideInformation",
        "slug" => "red-tide-information",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://data.gov.hk",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "english" => {},
          "simplified_chinese" => {},
          "traditional_chinese" => {},
        },
      },
      "entity" => {
        "english" => {
          "fields" => [
            {
              "name" => "date",
              "short" => "Date when the red tide was sighted",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "short" => "Location in Hong Kong waters where the red tide was observed",
              "type" => "`$STRING`",
            },
            {
              "name" => "remarks",
              "short" => "Additional remarks or observations",
              "type" => "`$STRING`",
            },
            {
              "name" => "species",
              "short" => "Species causing the red tide",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "short" => "Current status of the red tide event",
              "type" => "`$STRING`",
            },
          ],
          "name" => "english",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english",
                  "parts" => [
                    "en-data",
                    "dataset",
                    "hk-afcd-afcdlist-red-tide-location",
                    "resource",
                    "english",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "simplified_chinese" => {
          "fields" => [
            {
              "name" => "date",
              "short" => "Date when the red tide was sighted",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "short" => "Location in Hong Kong waters where the red tide was observed",
              "type" => "`$STRING`",
            },
            {
              "name" => "remarks",
              "short" => "Additional remarks or observations",
              "type" => "`$STRING`",
            },
            {
              "name" => "species",
              "short" => "Species causing the red tide",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "short" => "Current status of the red tide event",
              "type" => "`$STRING`",
            },
          ],
          "name" => "simplified_chinese",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/simplified-chinese",
                  "parts" => [
                    "en-data",
                    "dataset",
                    "hk-afcd-afcdlist-red-tide-location",
                    "resource",
                    "simplified-chinese",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "traditional_chinese" => {
          "fields" => [
            {
              "name" => "date",
              "short" => "Date when the red tide was sighted",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "short" => "Location in Hong Kong waters where the red tide was observed",
              "type" => "`$STRING`",
            },
            {
              "name" => "remarks",
              "short" => "Additional remarks or observations",
              "type" => "`$STRING`",
            },
            {
              "name" => "species",
              "short" => "Species causing the red tide",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "short" => "Current status of the red tide event",
              "type" => "`$STRING`",
            },
          ],
          "name" => "traditional_chinese",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese",
                  "parts" => [
                    "en-data",
                    "dataset",
                    "hk-afcd-afcdlist-red-tide-location",
                    "resource",
                    "traditional-chinese",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    RedTideInformationFeatures.make_feature(name)
  end
end
