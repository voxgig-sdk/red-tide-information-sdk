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
# @!attribute [rw] remarks
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
  :remarks,
  :species,
  :status,
  keyword_init: true
)

# Request payload for English#list.
#
# @!attribute [rw] format
#   @return [String, nil]
EnglishListMatch = Struct.new(
  :format,
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
# @!attribute [rw] remarks
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
  :remarks,
  :species,
  :status,
  keyword_init: true
)

# Request payload for SimplifiedChinese#list.
#
# @!attribute [rw] format
#   @return [String, nil]
SimplifiedChineseListMatch = Struct.new(
  :format,
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
# @!attribute [rw] remarks
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
  :remarks,
  :species,
  :status,
  keyword_init: true
)

# Request payload for TraditionalChinese#list.
#
# @!attribute [rw] format
#   @return [String, nil]
TraditionalChineseListMatch = Struct.new(
  :format,
  keyword_init: true
)

