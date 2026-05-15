<?php
declare(strict_types=1);

// RedTideInformation SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RedTideInformationMakeContext
{
    public static function call(array $ctxmap, ?RedTideInformationContext $basectx): RedTideInformationContext
    {
        return new RedTideInformationContext($ctxmap, $basectx);
    }
}
