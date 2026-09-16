package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "RedTideInformation",
			"slug": "red-tide-information",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://data.gov.hk",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"english": map[string]any{},
				"simplified_chinese": map[string]any{},
				"traditional_chinese": map[string]any{},
			},
		},
		"entity": map[string]any{
			"english": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date",
						"name": "date",
						"short": "Date when the red tide was sighted",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"short": "Location in Hong Kong waters where the red tide was observed",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remarks",
						"short": "Additional remarks or observations",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "species",
						"short": "Species causing the red tide",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Current status of the red tide event",
						"type": "`$STRING`",
					},
				},
				"name": "english",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english",
								"segments": []any{
									map[string]any{
										"lit": "en-data",
									},
									map[string]any{
										"lit": "dataset",
									},
									map[string]any{
										"lit": "hk-afcd-afcdlist-red-tide-location",
									},
									map[string]any{
										"lit": "resource",
									},
									map[string]any{
										"lit": "english",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"en-data",
									"dataset",
									"hk-afcd-afcdlist-red-tide-location",
									"resource",
									"english",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"simplified_chinese": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date",
						"name": "date",
						"short": "Date when the red tide was sighted",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"short": "Location in Hong Kong waters where the red tide was observed",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remarks",
						"short": "Additional remarks or observations",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "species",
						"short": "Species causing the red tide",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Current status of the red tide event",
						"type": "`$STRING`",
					},
				},
				"name": "simplified_chinese",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/simplified-chinese",
								"segments": []any{
									map[string]any{
										"lit": "en-data",
									},
									map[string]any{
										"lit": "dataset",
									},
									map[string]any{
										"lit": "hk-afcd-afcdlist-red-tide-location",
									},
									map[string]any{
										"lit": "resource",
									},
									map[string]any{
										"lit": "simplified-chinese",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"en-data",
									"dataset",
									"hk-afcd-afcdlist-red-tide-location",
									"resource",
									"simplified-chinese",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"traditional_chinese": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date",
						"name": "date",
						"short": "Date when the red tide was sighted",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"short": "Location in Hong Kong waters where the red tide was observed",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remarks",
						"short": "Additional remarks or observations",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "species",
						"short": "Species causing the red tide",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Current status of the red tide event",
						"type": "`$STRING`",
					},
				},
				"name": "traditional_chinese",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese",
								"segments": []any{
									map[string]any{
										"lit": "en-data",
									},
									map[string]any{
										"lit": "dataset",
									},
									map[string]any{
										"lit": "hk-afcd-afcdlist-red-tide-location",
									},
									map[string]any{
										"lit": "resource",
									},
									map[string]any{
										"lit": "traditional-chinese",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"en-data",
									"dataset",
									"hk-afcd-afcdlist-red-tide-location",
									"resource",
									"traditional-chinese",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
