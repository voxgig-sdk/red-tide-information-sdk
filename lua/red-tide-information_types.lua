-- Typed models for the RedTideInformation SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class English
---@field date? string
---@field location? string
---@field remark? string
---@field species? string
---@field status? string

---@class EnglishListMatch

---@class SimplifiedChinese
---@field date? string
---@field location? string
---@field remark? string
---@field species? string
---@field status? string

---@class SimplifiedChineseListMatch

---@class TraditionalChinese
---@field date? string
---@field location? string
---@field remark? string
---@field species? string
---@field status? string

---@class TraditionalChineseListMatch

local M = {}

return M
