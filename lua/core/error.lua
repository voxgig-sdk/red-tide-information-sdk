-- RedTideInformation SDK error

local RedTideInformationError = {}
RedTideInformationError.__index = RedTideInformationError


function RedTideInformationError.new(code, msg, ctx)
  local self = setmetatable({}, RedTideInformationError)
  self.is_sdk_error = true
  self.sdk = "RedTideInformation"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RedTideInformationError:error()
  return self.msg
end


function RedTideInformationError:__tostring()
  return self.msg
end


return RedTideInformationError
