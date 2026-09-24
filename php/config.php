<?php
declare(strict_types=1);

// RedTideInformation SDK configuration

class RedTideInformationConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "RedTideInformation",
                "slug" => "red-tide-information",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://data.gov.hk",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "english" => [],
                    "simplified_chinese" => [],
                    "traditional_chinese" => [],
                ],
            ],
            "entity" => [
        'english' => [
          'fields' => [
            [
              'name' => 'date',
              'title' => 'Date',
              'type' => '`$STRING`',
              'short' => 'Date when the red tide was sighted',
              'format' => 'date',
            ],
            [
              'name' => 'location',
              'title' => 'Location',
              'type' => '`$STRING`',
              'short' => 'Location in Hong Kong waters where the red tide was observed',
            ],
            [
              'name' => 'remarks',
              'title' => 'Remarks',
              'type' => '`$STRING`',
              'short' => 'Additional remarks or observations',
            ],
            [
              'name' => 'species',
              'title' => 'Species',
              'type' => '`$STRING`',
              'short' => 'Species causing the red tide',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'Current status of the red tide event',
            ],
          ],
          'name' => 'english',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english',
                  'segments' => [
                    [
                      'lit' => 'en-data',
                    ],
                    [
                      'lit' => 'dataset',
                    ],
                    [
                      'lit' => 'hk-afcd-afcdlist-red-tide-location',
                    ],
                    [
                      'lit' => 'resource',
                    ],
                    [
                      'lit' => 'english',
                    ],
                  ],
                  'parts' => [
                    'en-data',
                    'dataset',
                    'hk-afcd-afcdlist-red-tide-location',
                    'resource',
                    'english',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'simplified_chinese' => [
          'fields' => [
            [
              'name' => 'date',
              'title' => 'Date',
              'type' => '`$STRING`',
              'short' => 'Date when the red tide was sighted',
              'format' => 'date',
            ],
            [
              'name' => 'location',
              'title' => 'Location',
              'type' => '`$STRING`',
              'short' => 'Location in Hong Kong waters where the red tide was observed',
            ],
            [
              'name' => 'remarks',
              'title' => 'Remarks',
              'type' => '`$STRING`',
              'short' => 'Additional remarks or observations',
            ],
            [
              'name' => 'species',
              'title' => 'Species',
              'type' => '`$STRING`',
              'short' => 'Species causing the red tide',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'Current status of the red tide event',
            ],
          ],
          'name' => 'simplified_chinese',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/simplified-chinese',
                  'segments' => [
                    [
                      'lit' => 'en-data',
                    ],
                    [
                      'lit' => 'dataset',
                    ],
                    [
                      'lit' => 'hk-afcd-afcdlist-red-tide-location',
                    ],
                    [
                      'lit' => 'resource',
                    ],
                    [
                      'lit' => 'simplified-chinese',
                    ],
                  ],
                  'parts' => [
                    'en-data',
                    'dataset',
                    'hk-afcd-afcdlist-red-tide-location',
                    'resource',
                    'simplified-chinese',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'traditional_chinese' => [
          'fields' => [
            [
              'name' => 'date',
              'title' => 'Date',
              'type' => '`$STRING`',
              'short' => 'Date when the red tide was sighted',
              'format' => 'date',
            ],
            [
              'name' => 'location',
              'title' => 'Location',
              'type' => '`$STRING`',
              'short' => 'Location in Hong Kong waters where the red tide was observed',
            ],
            [
              'name' => 'remarks',
              'title' => 'Remarks',
              'type' => '`$STRING`',
              'short' => 'Additional remarks or observations',
            ],
            [
              'name' => 'species',
              'title' => 'Species',
              'type' => '`$STRING`',
              'short' => 'Species causing the red tide',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'Current status of the red tide event',
            ],
          ],
          'name' => 'traditional_chinese',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese',
                  'segments' => [
                    [
                      'lit' => 'en-data',
                    ],
                    [
                      'lit' => 'dataset',
                    ],
                    [
                      'lit' => 'hk-afcd-afcdlist-red-tide-location',
                    ],
                    [
                      'lit' => 'resource',
                    ],
                    [
                      'lit' => 'traditional-chinese',
                    ],
                  ],
                  'parts' => [
                    'en-data',
                    'dataset',
                    'hk-afcd-afcdlist-red-tide-location',
                    'resource',
                    'traditional-chinese',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RedTideInformationFeatures::make_feature($name);
    }
}
