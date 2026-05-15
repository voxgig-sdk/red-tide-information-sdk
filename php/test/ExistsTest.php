<?php
declare(strict_types=1);

// RedTideInformation SDK exists test

require_once __DIR__ . '/../redtideinformation_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = RedTideInformationSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
