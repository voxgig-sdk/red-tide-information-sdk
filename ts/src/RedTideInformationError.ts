
import { Context } from './Context'


class RedTideInformationError extends Error {

  isRedTideInformationError = true

  sdk = 'RedTideInformation'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RedTideInformationError
}

