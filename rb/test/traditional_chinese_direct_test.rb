# TraditionalChinese direct test

require "minitest/autorun"
require "json"
require_relative "../RedTideInformation_sdk"
require_relative "runner"

class TraditionalChineseDirectTest < Minitest::Test
  def test_direct_list_traditional_chinese
    setup = traditional_chinese_direct_setup([
      { "id" => "direct01" },
      { "id" => "direct02" },
    ])
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-list-traditional_chinese", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    client = setup[:client]


    result, err = client.direct({
      "path" => "en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese",
      "method" => "GET",
      "params" => {},
    })
    if setup[:live]
      # Live mode is lenient: synthetic IDs frequently 4xx and the list-
      # response shape varies wildly across public APIs. Skip rather than
      # fail when the call doesn't return a usable list.
      if !err.nil?
        skip("list call failed (likely synthetic IDs against live API): #{err}")
        return
      end
      unless result["ok"]
        skip("list call not ok (likely synthetic IDs against live API)")
        return
      end
      status = Helpers.to_int(result["status"])
      if status < 200 || status >= 300
        skip("expected 2xx status, got #{status}")
        return
      end
    else
      assert_nil err
      assert result["ok"]
      assert_equal 200, Helpers.to_int(result["status"])
      assert result["data"].is_a?(Array)
      assert_equal 2, result["data"].length
      assert_equal 1, setup[:calls].length
    end
  end

end


def traditional_chinese_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "REDTIDEINFORMATION_TEST_TRADITIONAL_CHINESE_ENTID" => {},
    "REDTIDEINFORMATION_TEST_LIVE" => "FALSE",
    "REDTIDEINFORMATION_APIKEY" => "NONE",
  })

  live = env["REDTIDEINFORMATION_TEST_LIVE"] == "TRUE"

  if live
    merged_opts = {
      "apikey" => env["REDTIDEINFORMATION_APIKEY"],
    }
    client = RedTideInformationSDK.new(merged_opts)
    return {
      client: client,
      calls: calls,
      live: true,
      idmap: {},
    }
  end

  mock_fetch = ->(url, init) {
    calls.push({ "url" => url, "init" => init })
    return {
      "status" => 200,
      "statusText" => "OK",
      "headers" => {},
      "json" => ->() {
        if !mockres.nil?
          return mockres
        end
        return { "id" => "direct01" }
      },
      "body" => "mock",
    }, nil
  }

  client = RedTideInformationSDK.new({
    "base" => "http://localhost:8080",
    "system" => {
      "fetch" => mock_fetch,
    },
  })

  {
    client: client,
    calls: calls,
    live: false,
    idmap: {},
  }
end
