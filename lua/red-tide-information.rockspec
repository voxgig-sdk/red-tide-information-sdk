package = "voxgig-sdk-red-tide-information"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/red-tide-information-sdk.git"
}
description = {
  summary = "RedTideInformation SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["red-tide-information_sdk"] = "red-tide-information_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
