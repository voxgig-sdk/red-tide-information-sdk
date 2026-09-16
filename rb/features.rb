# RedTideInformation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RedTideInformationFeatures
  def self.make_feature(name)
    case name
    when "base"
      RedTideInformationBaseFeature.new
    when "ratelimit"
      RedTideInformationRatelimitFeature.new
    when "retry"
      RedTideInformationRetryFeature.new
    when "test"
      RedTideInformationTestFeature.new
    when "timeout"
      RedTideInformationTimeoutFeature.new
    else
      RedTideInformationBaseFeature.new
    end
  end
end
