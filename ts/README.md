# RedTideInformation TypeScript SDK



The TypeScript SDK for the RedTideInformation API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/red-tide-information-sdk/releases](https://github.com/voxgig-sdk/red-tide-information-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { RedTideInformationSDK } from '@voxgig-sdk/red-tide-information'

const client = new RedTideInformationSDK()
```

### 2. List english records

`list()` resolves to an array of English objects — iterate it directly:

```ts
const englishs = await client.English().list()

for (const english of englishs) {
  console.log(english)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = RedTideInformationSDK.test()

const english = await client.English().load({ id: 'test01' })
// english is a bare entity populated with mock response data
console.log(english)
```

You can also use the instance method:

```ts
const client = new RedTideInformationSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.English()

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new RedTideInformationSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
RED_TIDE_INFORMATION_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### RedTideInformationSDK

#### Constructor

```ts
new RedTideInformationSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `English(data?)` | `EnglishEntity` | Create an English entity instance. |
| `SimplifiedChinese(data?)` | `SimplifiedChineseEntity` | Create a SimplifiedChinese entity instance. |
| `TraditionalChinese(data?)` | `TraditionalChineseEntity` | Create a TraditionalChinese entity instance. |
| `tester(testopts?, sdkopts?)` | `RedTideInformationSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `RedTideInformationSDK.test(testopts?, sdkopts?)` | `RedTideInformationSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): RedTideInformationSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### English

| Field | Description |
| --- | --- |
| `date` |  |
| `location` |  |
| `remark` |  |
| `species` |  |
| `status` |  |

Operations: list.

API path: `/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english`

#### SimplifiedChinese

| Field | Description |
| --- | --- |
| `date` |  |
| `location` |  |
| `remark` |  |
| `species` |  |
| `status` |  |

Operations: list.

API path: `/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/simplified-chinese`

#### TraditionalChinese

| Field | Description |
| --- | --- |
| `date` |  |
| `location` |  |
| `remark` |  |
| `species` |  |
| `status` |  |

Operations: list.

API path: `/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese`



## Entities


### English

Create an instance: `const english = client.English()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | ``$STRING`` |  |
| `location` | ``$STRING`` |  |
| `remark` | ``$STRING`` |  |
| `species` | ``$STRING`` |  |
| `status` | ``$STRING`` |  |

#### Example: List

```ts
const englishs = await client.English().list()
```


### SimplifiedChinese

Create an instance: `const simplified_chinese = client.SimplifiedChinese()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | ``$STRING`` |  |
| `location` | ``$STRING`` |  |
| `remark` | ``$STRING`` |  |
| `species` | ``$STRING`` |  |
| `status` | ``$STRING`` |  |

#### Example: List

```ts
const simplified_chineses = await client.SimplifiedChinese().list()
```


### TraditionalChinese

Create an instance: `const traditional_chinese = client.TraditionalChinese()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | ``$STRING`` |  |
| `location` | ``$STRING`` |  |
| `remark` | ``$STRING`` |  |
| `species` | ``$STRING`` |  |
| `status` | ``$STRING`` |  |

#### Example: List

```ts
const traditional_chineses = await client.TraditionalChinese().list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
red-tide-information/
├── src/
│   ├── RedTideInformationSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { RedTideInformationSDK } from '@voxgig-sdk/red-tide-information'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const english = client.English()
await english.load({ id: "example_id" })

// english.data() now returns the loaded english data
// english.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
