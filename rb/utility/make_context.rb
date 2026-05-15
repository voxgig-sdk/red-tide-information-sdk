# RedTideInformation SDK utility: make_context
require_relative '../core/context'
module RedTideInformationUtilities
  MakeContext = ->(ctxmap, basectx) {
    RedTideInformationContext.new(ctxmap, basectx)
  }
end
