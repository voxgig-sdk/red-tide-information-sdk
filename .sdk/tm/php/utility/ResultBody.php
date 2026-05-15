<?php
declare(strict_types=1);

// RedTideInformation SDK utility: result_body

class RedTideInformationResultBody
{
    public static function call(RedTideInformationContext $ctx): ?RedTideInformationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
