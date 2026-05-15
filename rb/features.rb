# RedTideInformation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RedTideInformationFeatures
  def self.make_feature(name)
    case name
    when "base"
      RedTideInformationBaseFeature.new
    when "test"
      RedTideInformationTestFeature.new
    else
      RedTideInformationBaseFeature.new
    end
  end
end
