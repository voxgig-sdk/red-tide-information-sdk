-- ProjectName SDK exists test

local sdk = require("red-tide-information_sdk")

describe("RedTideInformationSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
