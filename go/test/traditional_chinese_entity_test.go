package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/red-tide-information-sdk/go"
	"github.com/voxgig-sdk/red-tide-information-sdk/go/core"

	vs "github.com/voxgig-sdk/red-tide-information-sdk/go/utility/struct"
)

func TestTraditionalChineseEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TraditionalChinese(nil)
		if ent == nil {
			t.Fatal("expected non-nil TraditionalChineseEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := traditional_chineseBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "traditional_chinese." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set REDTIDEINFORMATION_TEST_TRADITIONAL_CHINESE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		traditionalChineseRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.traditional_chinese", setup.data)))
		var traditionalChineseRef01Data map[string]any
		if len(traditionalChineseRef01DataRaw) > 0 {
			traditionalChineseRef01Data = core.ToMapAny(traditionalChineseRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = traditionalChineseRef01Data

		// LIST
		traditionalChineseRef01Ent := client.TraditionalChinese(nil)
		traditionalChineseRef01Match := map[string]any{}

		traditionalChineseRef01ListResult, err := traditionalChineseRef01Ent.List(traditionalChineseRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, traditionalChineseRef01ListOk := traditionalChineseRef01ListResult.([]any)
		if !traditionalChineseRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", traditionalChineseRef01ListResult)
		}

	})
}

func traditional_chineseBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "traditional_chinese", "TraditionalChineseTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read traditional_chinese test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse traditional_chinese test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"traditional_chinese01", "traditional_chinese02", "traditional_chinese03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("REDTIDEINFORMATION_TEST_TRADITIONAL_CHINESE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"REDTIDEINFORMATION_TEST_TRADITIONAL_CHINESE_ENTID": idmap,
		"REDTIDEINFORMATION_TEST_LIVE":      "FALSE",
		"REDTIDEINFORMATION_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["REDTIDEINFORMATION_TEST_TRADITIONAL_CHINESE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["REDTIDEINFORMATION_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewRedTideInformationSDK(core.ToMapAny(mergedOpts))
	}

	live := env["REDTIDEINFORMATION_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["REDTIDEINFORMATION_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
