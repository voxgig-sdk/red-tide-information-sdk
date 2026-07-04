# frozen_string_literal: true

# Typed models for the RedTideInformation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# English entity data model.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] remark
#   @return [String, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
English = Struct.new(
  :date,
  :location,
  :remark,
  :species,
  :status,
  keyword_init: true
)

# Match filter for English#list (any subset of English fields).
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] remark
#   @return [String, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
EnglishListMatch = Struct.new(
  :date,
  :location,
  :remark,
  :species,
  :status,
  keyword_init: true
)

# SimplifiedChinese entity data model.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] remark
#   @return [String, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
SimplifiedChinese = Struct.new(
  :date,
  :location,
  :remark,
  :species,
  :status,
  keyword_init: true
)

# Match filter for SimplifiedChinese#list (any subset of SimplifiedChinese fields).
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] remark
#   @return [String, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
SimplifiedChineseListMatch = Struct.new(
  :date,
  :location,
  :remark,
  :species,
  :status,
  keyword_init: true
)

# TraditionalChinese entity data model.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] remark
#   @return [String, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
TraditionalChinese = Struct.new(
  :date,
  :location,
  :remark,
  :species,
  :status,
  keyword_init: true
)

# Match filter for TraditionalChinese#list (any subset of TraditionalChinese fields).
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] remark
#   @return [String, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
TraditionalChineseListMatch = Struct.new(
  :date,
  :location,
  :remark,
  :species,
  :status,
  keyword_init: true
)

