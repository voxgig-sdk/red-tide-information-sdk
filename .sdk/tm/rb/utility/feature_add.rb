# RedTideInformation SDK utility: feature_add
module RedTideInformationUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
