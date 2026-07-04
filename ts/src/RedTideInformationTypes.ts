// Typed models for the RedTideInformation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface English {
  date?: string
  location?: string
  remark?: string
  species?: string
  status?: string
}

export type EnglishListMatch = Partial<English>

export interface SimplifiedChinese {
  date?: string
  location?: string
  remark?: string
  species?: string
  status?: string
}

export type SimplifiedChineseListMatch = Partial<SimplifiedChinese>

export interface TraditionalChinese {
  date?: string
  location?: string
  remark?: string
  species?: string
  status?: string
}

export type TraditionalChineseListMatch = Partial<TraditionalChinese>

