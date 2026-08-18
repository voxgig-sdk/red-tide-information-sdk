package = "voxgig-sdk-red-tide-information"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/red-tide-information-sdk.git",
  tag = "lua/v0.0.1",
  dir = "red-tide-information-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Red Tide Information public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/red-tide-information-sdk",
  issues_url = "https://github.com/voxgig-sdk/red-tide-information-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "red-tide-information" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["red-tide-information_sdk"] = "red-tide-information_sdk.lua",
    ["config"] = "config.lua",
    ["config_shared"] = "config_shared.lua",
    ["features"] = "features.lua",
  }
}
