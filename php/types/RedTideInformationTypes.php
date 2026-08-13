<?php
declare(strict_types=1);

// Typed models for the RedTideInformation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** English entity data model. */
class English
{
    public ?string $date = null;
    public ?string $location = null;
    public ?string $remarks = null;
    public ?string $species = null;
    public ?string $status = null;
}

/** Request payload for English#list. */
class EnglishListMatch
{
    public ?string $date = null;
    public ?string $location = null;
    public ?string $remarks = null;
    public ?string $species = null;
    public ?string $status = null;
}

/** SimplifiedChinese entity data model. */
class SimplifiedChinese
{
    public ?string $date = null;
    public ?string $location = null;
    public ?string $remarks = null;
    public ?string $species = null;
    public ?string $status = null;
}

/** Request payload for SimplifiedChinese#list. */
class SimplifiedChineseListMatch
{
    public ?string $date = null;
    public ?string $location = null;
    public ?string $remarks = null;
    public ?string $species = null;
    public ?string $status = null;
}

/** TraditionalChinese entity data model. */
class TraditionalChinese
{
    public ?string $date = null;
    public ?string $location = null;
    public ?string $remarks = null;
    public ?string $species = null;
    public ?string $status = null;
}

/** Request payload for TraditionalChinese#list. */
class TraditionalChineseListMatch
{
    public ?string $date = null;
    public ?string $location = null;
    public ?string $remarks = null;
    public ?string $species = null;
    public ?string $status = null;
}

