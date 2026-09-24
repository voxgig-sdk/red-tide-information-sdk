# RedTideInformation SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "RedTideInformation",
            "slug": "red-tide-information",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://data.gov.hk",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "english": {},
                "simplified_chinese": {},
                "traditional_chinese": {},
            },
        },
        "entity": {
      "english": {
        "fields": [
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "Date when the red tide was sighted",
            "format": "date",
          },
          {
            "name": "location",
            "title": "Location",
            "type": "`$STRING`",
            "short": "Location in Hong Kong waters where the red tide was observed",
          },
          {
            "name": "remarks",
            "title": "Remarks",
            "type": "`$STRING`",
            "short": "Additional remarks or observations",
          },
          {
            "name": "species",
            "title": "Species",
            "type": "`$STRING`",
            "short": "Species causing the red tide",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Current status of the red tide event",
          },
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
                    "lit": "en-data",
                  },
                  {
                    "lit": "dataset",
                  },
                  {
                    "lit": "hk-afcd-afcdlist-red-tide-location",
                  },
                  {
                    "lit": "resource",
                  },
                  {
                    "lit": "english",
                  },
                ],
                "parts": [
                  "en-data",
                  "dataset",
                  "hk-afcd-afcdlist-red-tide-location",
                  "resource",
                  "english",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "format",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "simplified_chinese": {
        "fields": [
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "Date when the red tide was sighted",
            "format": "date",
          },
          {
            "name": "location",
            "title": "Location",
            "type": "`$STRING`",
            "short": "Location in Hong Kong waters where the red tide was observed",
          },
          {
            "name": "remarks",
            "title": "Remarks",
            "type": "`$STRING`",
            "short": "Additional remarks or observations",
          },
          {
            "name": "species",
            "title": "Species",
            "type": "`$STRING`",
            "short": "Species causing the red tide",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Current status of the red tide event",
          },
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
                    "lit": "en-data",
                  },
                  {
                    "lit": "dataset",
                  },
                  {
                    "lit": "hk-afcd-afcdlist-red-tide-location",
                  },
                  {
                    "lit": "resource",
                  },
                  {
                    "lit": "simplified-chinese",
                  },
                ],
                "parts": [
                  "en-data",
                  "dataset",
                  "hk-afcd-afcdlist-red-tide-location",
                  "resource",
                  "simplified-chinese",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "format",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "traditional_chinese": {
        "fields": [
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "Date when the red tide was sighted",
            "format": "date",
          },
          {
            "name": "location",
            "title": "Location",
            "type": "`$STRING`",
            "short": "Location in Hong Kong waters where the red tide was observed",
          },
          {
            "name": "remarks",
            "title": "Remarks",
            "type": "`$STRING`",
            "short": "Additional remarks or observations",
          },
          {
            "name": "species",
            "title": "Species",
            "type": "`$STRING`",
            "short": "Species causing the red tide",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Current status of the red tide event",
          },
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
                    "lit": "en-data",
                  },
                  {
                    "lit": "dataset",
                  },
                  {
                    "lit": "hk-afcd-afcdlist-red-tide-location",
                  },
                  {
                    "lit": "resource",
                  },
                  {
                    "lit": "traditional-chinese",
                  },
                ],
                "parts": [
                  "en-data",
                  "dataset",
                  "hk-afcd-afcdlist-red-tide-location",
                  "resource",
                  "traditional-chinese",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "format",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
