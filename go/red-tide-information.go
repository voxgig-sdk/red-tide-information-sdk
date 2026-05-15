package voxgigredtideinformationsdk

import (
	"github.com/voxgig-sdk/red-tide-information-sdk/core"
	"github.com/voxgig-sdk/red-tide-information-sdk/entity"
	"github.com/voxgig-sdk/red-tide-information-sdk/feature"
	_ "github.com/voxgig-sdk/red-tide-information-sdk/utility"
)

// Type aliases preserve external API.
type RedTideInformationSDK = core.RedTideInformationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RedTideInformationEntity = core.RedTideInformationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RedTideInformationError = core.RedTideInformationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewEnglishEntityFunc = func(client *core.RedTideInformationSDK, entopts map[string]any) core.RedTideInformationEntity {
		return entity.NewEnglishEntity(client, entopts)
	}
	core.NewSimplifiedChineseEntityFunc = func(client *core.RedTideInformationSDK, entopts map[string]any) core.RedTideInformationEntity {
		return entity.NewSimplifiedChineseEntity(client, entopts)
	}
	core.NewTraditionalChineseEntityFunc = func(client *core.RedTideInformationSDK, entopts map[string]any) core.RedTideInformationEntity {
		return entity.NewTraditionalChineseEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRedTideInformationSDK = core.NewRedTideInformationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
