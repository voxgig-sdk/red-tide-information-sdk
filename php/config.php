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
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
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
              'short' => 'Date when the red tide was sighted',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'short' => 'Location in Hong Kong waters where the red tide was observed',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'remarks',
              'short' => 'Additional remarks or observations',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'species',
              'short' => 'Species causing the red tide',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Current status of the red tide event',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'english',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/english',
                  'parts' => [
                    'en-data',
                    'dataset',
                    'hk-afcd-afcdlist-red-tide-location',
                    'resource',
                    'english',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'Date when the red tide was sighted',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'short' => 'Location in Hong Kong waters where the red tide was observed',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'remarks',
              'short' => 'Additional remarks or observations',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'species',
              'short' => 'Species causing the red tide',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Current status of the red tide event',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'simplified_chinese',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/simplified-chinese',
                  'parts' => [
                    'en-data',
                    'dataset',
                    'hk-afcd-afcdlist-red-tide-location',
                    'resource',
                    'simplified-chinese',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'Date when the red tide was sighted',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'short' => 'Location in Hong Kong waters where the red tide was observed',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'remarks',
              'short' => 'Additional remarks or observations',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'species',
              'short' => 'Species causing the red tide',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Current status of the red tide event',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'traditional_chinese',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/en-data/dataset/hk-afcd-afcdlist-red-tide-location/resource/traditional-chinese',
                  'parts' => [
                    'en-data',
                    'dataset',
                    'hk-afcd-afcdlist-red-tide-location',
                    'resource',
                    'traditional-chinese',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
