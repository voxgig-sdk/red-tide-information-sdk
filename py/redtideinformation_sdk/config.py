# RedTideInformation SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
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
            "short": "Date when the red tide was sighted",
            "type": "`$STRING`",
          },
          {
            "name": "location",
            "short": "Location in Hong Kong waters where the red tide was observed",
            "type": "`$STRING`",
          },
          {
            "name": "remarks",
            "short": "Additional remarks or observations",
            "type": "`$STRING`",
          },
          {
            "name": "species",
            "short": "Species causing the red tide",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Current status of the red tide event",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english",
                "parts": [
                  "en-data",
                  "dataset",
                  "hk-afcd-afcdlist-red-tide-location",
                  "resource",
                  "english",
                ],
                "select": {
                  "exist": [
                    "format",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "short": "Date when the red tide was sighted",
            "type": "`$STRING`",
          },
          {
            "name": "location",
            "short": "Location in Hong Kong waters where the red tide was observed",
            "type": "`$STRING`",
          },
          {
            "name": "remarks",
            "short": "Additional remarks or observations",
            "type": "`$STRING`",
          },
          {
            "name": "species",
            "short": "Species causing the red tide",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Current status of the red tide event",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/simplified-chinese",
                "parts": [
                  "en-data",
                  "dataset",
                  "hk-afcd-afcdlist-red-tide-location",
                  "resource",
                  "simplified-chinese",
                ],
                "select": {
                  "exist": [
                    "format",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "short": "Date when the red tide was sighted",
            "type": "`$STRING`",
          },
          {
            "name": "location",
            "short": "Location in Hong Kong waters where the red tide was observed",
            "type": "`$STRING`",
          },
          {
            "name": "remarks",
            "short": "Additional remarks or observations",
            "type": "`$STRING`",
          },
          {
            "name": "species",
            "short": "Species causing the red tide",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Current status of the red tide event",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese",
                "parts": [
                  "en-data",
                  "dataset",
                  "hk-afcd-afcdlist-red-tide-location",
                  "resource",
                  "traditional-chinese",
                ],
                "select": {
                  "exist": [
                    "format",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
