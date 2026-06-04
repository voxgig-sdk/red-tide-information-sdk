# RedTideInformation SDK

Current red tide sightings in Hong Kong waters with species and location, in English and Chinese

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Red Tide Information

Red Tide Information publishes current red tide sightings in Hong Kong waters. The dataset is produced by the [Agriculture, Fisheries and Conservation Department (AFCD)](https://redtide.afcd.gov.hk/) and distributed through Hong Kong's [open data portal](https://data.gov.hk).

What you get from the API:

- Reported red tide sightings, including the species observed and the location of the sighting
- The same payload in three language variants: English, Traditional Chinese, and Simplified Chinese
- Static JSON files served over HTTPS from `redtide.afcd.gov.hk`

Operational notes: the endpoints are plain GET requests with no authentication. CORS is not enabled on the upstream JSON files, so browser-side use generally requires a proxy. Data is refreshed by AFCD as new sightings are recorded.

## Try it

**TypeScript**
```bash
npm install red-tide-information
```

**Python**
```bash
pip install red-tide-information-sdk
```

**PHP**
```bash
composer require voxgig/red-tide-information-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/red-tide-information-sdk/go
```

**Ruby**
```bash
gem install red-tide-information-sdk
```

**Lua**
```bash
luarocks install red-tide-information-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { RedTideInformationSDK } from 'red-tide-information'

const client = new RedTideInformationSDK({})

// List all englishs
const englishs = await client.English().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o red-tide-information-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "red-tide-information": {
      "command": "/abs/path/to/red-tide-information-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **English** | English-language red tide sighting records, served from `/data/RTMS_ob_RTLE.json`. | `/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english` |
| **SimplifiedChinese** | Simplified Chinese red tide sighting records, served from `/data/RTMS_ob_RTLS.json`. | `/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/simplified-chinese` |
| **TraditionalChinese** | Traditional Chinese red tide sighting records, served from `/data/RTMS_ob_RTLC.json`. | `/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from redtideinformation_sdk import RedTideInformationSDK

client = RedTideInformationSDK({})

# List all englishs
englishs, err = client.English(None).list(None, None)
```

### PHP

```php
<?php
require_once 'redtideinformation_sdk.php';

$client = new RedTideInformationSDK([]);

// List all englishs
[$englishs, $err] = $client->English(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/red-tide-information-sdk/go"

client := sdk.NewRedTideInformationSDK(map[string]any{})

// List all englishs
englishs, err := client.English(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "RedTideInformation_sdk"

client = RedTideInformationSDK.new({})

# List all englishs
englishs, err = client.English(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("red-tide-information_sdk")

local client = sdk.new({})

-- List all englishs
local englishs, err = client:English(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = RedTideInformationSDK.test()
const result = await client.English().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = RedTideInformationSDK.test(None, None)
result, err = client.English(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = RedTideInformationSDK::test(null, null);
[$result, $err] = $client->English(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.English(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = RedTideInformationSDK.test(nil, nil)
result, err = client.English(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:English(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Red Tide Information

- Upstream: [https://redtide.afcd.gov.hk/](https://redtide.afcd.gov.hk/)
- API docs: [https://data.gov.hk/en-data/dataset/hk-afcd-marinfo-red-tide](https://data.gov.hk/en-data/dataset/hk-afcd-marinfo-red-tide)

- Distributed under the Hong Kong Open Data Licence via data.gov.hk
- Free to use for commercial and non-commercial purposes
- Attribution to the data provider (Agriculture, Fisheries and Conservation Department) is expected
- Refer to data.gov.hk terms for the authoritative licence text

---

Generated from the Red Tide Information OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
