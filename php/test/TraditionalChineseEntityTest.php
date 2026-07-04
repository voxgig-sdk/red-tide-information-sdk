<?php
declare(strict_types=1);

// TraditionalChinese entity test

require_once __DIR__ . '/../redtideinformation_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class TraditionalChineseEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = RedTideInformationSDK::test(null, null);
        $ent = $testsdk->TraditionalChinese(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = traditional_chinese_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "traditional_chinese." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set REDTIDEINFORMATION_TEST_TRADITIONAL_CHINESE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $traditional_chinese_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.traditional_chinese")));
        $traditional_chinese_ref01_data = null;
        if (count($traditional_chinese_ref01_data_raw) > 0) {
            $traditional_chinese_ref01_data = Helpers::to_map($traditional_chinese_ref01_data_raw[0][1]);
        }

        // LIST
        $traditional_chinese_ref01_ent = $client->TraditionalChinese(null);
        $traditional_chinese_ref01_match = [];

        $traditional_chinese_ref01_list_result = $traditional_chinese_ref01_ent->list($traditional_chinese_ref01_match, null);
        $this->assertIsArray($traditional_chinese_ref01_list_result);

    }
}

function traditional_chinese_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/traditional_chinese/TraditionalChineseTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = RedTideInformationSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["traditional_chinese01", "traditional_chinese02", "traditional_chinese03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("REDTIDEINFORMATION_TEST_TRADITIONAL_CHINESE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "REDTIDEINFORMATION_TEST_TRADITIONAL_CHINESE_ENTID" => $idmap,
        "REDTIDEINFORMATION_TEST_LIVE" => "FALSE",
        "REDTIDEINFORMATION_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["REDTIDEINFORMATION_TEST_TRADITIONAL_CHINESE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["REDTIDEINFORMATION_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new RedTideInformationSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["REDTIDEINFORMATION_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["REDTIDEINFORMATION_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
