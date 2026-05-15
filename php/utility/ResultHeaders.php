<?php
declare(strict_types=1);

// RedTideInformation SDK utility: result_headers

class RedTideInformationResultHeaders
{
    public static function call(RedTideInformationContext $ctx): ?RedTideInformationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
