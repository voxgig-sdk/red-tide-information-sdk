<?php
declare(strict_types=1);

// RedTideInformation SDK utility: prepare_body

class RedTideInformationPrepareBody
{
    public static function call(RedTideInformationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
