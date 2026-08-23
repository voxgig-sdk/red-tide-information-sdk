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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
								"parts": []any{
									"en-data",
									"dataset",
									"hk-afcd-afcdlist-red-tide-location",
									"resource",
									"english",
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
								"parts": []any{
									"en-data",
									"dataset",
									"hk-afcd-afcdlist-red-tide-location",
									"resource",
									"simplified-chinese",
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
								"parts": []any{
									"en-data",
									"dataset",
									"hk-afcd-afcdlist-red-tide-location",
									"resource",
									"traditional-chinese",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
