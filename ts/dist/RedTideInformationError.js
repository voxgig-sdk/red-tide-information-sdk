"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedTideInformationError = void 0;
class RedTideInformationError extends Error {
    isRedTideInformationError = true;
    sdk = 'RedTideInformation';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.RedTideInformationError = RedTideInformationError;
//# sourceMappingURL=RedTideInformationError.js.map