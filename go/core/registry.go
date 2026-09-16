package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewEnglishEntityFunc func(client *RedTideInformationSDK, entopts map[string]any) RedTideInformationEntity

var NewSimplifiedChineseEntityFunc func(client *RedTideInformationSDK, entopts map[string]any) RedTideInformationEntity

var NewTraditionalChineseEntityFunc func(client *RedTideInformationSDK, entopts map[string]any) RedTideInformationEntity

