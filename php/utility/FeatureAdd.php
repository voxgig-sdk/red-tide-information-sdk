<?php
declare(strict_types=1);

// RedTideInformation SDK utility: feature_add

class RedTideInformationFeatureAdd
{
    public static function call(RedTideInformationContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
