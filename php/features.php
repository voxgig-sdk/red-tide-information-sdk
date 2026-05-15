<?php
declare(strict_types=1);

// RedTideInformation SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RedTideInformationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RedTideInformationBaseFeature();
            case "test":
                return new RedTideInformationTestFeature();
            default:
                return new RedTideInformationBaseFeature();
        }
    }
}
