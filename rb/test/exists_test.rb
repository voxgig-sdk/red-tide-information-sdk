# RedTideInformation SDK exists test

require "minitest/autorun"
require_relative "../RedTideInformation_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RedTideInformationSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
