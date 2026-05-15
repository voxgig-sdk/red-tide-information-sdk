# RedTideInformation SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RedTideInformationUtility.registrar = ->(u) {
  u.clean = RedTideInformationUtilities::Clean
  u.done = RedTideInformationUtilities::Done
  u.make_error = RedTideInformationUtilities::MakeError
  u.feature_add = RedTideInformationUtilities::FeatureAdd
  u.feature_hook = RedTideInformationUtilities::FeatureHook
  u.feature_init = RedTideInformationUtilities::FeatureInit
  u.fetcher = RedTideInformationUtilities::Fetcher
  u.make_fetch_def = RedTideInformationUtilities::MakeFetchDef
  u.make_context = RedTideInformationUtilities::MakeContext
  u.make_options = RedTideInformationUtilities::MakeOptions
  u.make_request = RedTideInformationUtilities::MakeRequest
  u.make_response = RedTideInformationUtilities::MakeResponse
  u.make_result = RedTideInformationUtilities::MakeResult
  u.make_point = RedTideInformationUtilities::MakePoint
  u.make_spec = RedTideInformationUtilities::MakeSpec
  u.make_url = RedTideInformationUtilities::MakeUrl
  u.param = RedTideInformationUtilities::Param
  u.prepare_auth = RedTideInformationUtilities::PrepareAuth
  u.prepare_body = RedTideInformationUtilities::PrepareBody
  u.prepare_headers = RedTideInformationUtilities::PrepareHeaders
  u.prepare_method = RedTideInformationUtilities::PrepareMethod
  u.prepare_params = RedTideInformationUtilities::PrepareParams
  u.prepare_path = RedTideInformationUtilities::PreparePath
  u.prepare_query = RedTideInformationUtilities::PrepareQuery
  u.result_basic = RedTideInformationUtilities::ResultBasic
  u.result_body = RedTideInformationUtilities::ResultBody
  u.result_headers = RedTideInformationUtilities::ResultHeaders
  u.transform_request = RedTideInformationUtilities::TransformRequest
  u.transform_response = RedTideInformationUtilities::TransformResponse
}
