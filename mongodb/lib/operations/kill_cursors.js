"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KillCursorsOperation = void 0;
const error_1 = require("../error");
const operation_1 = require("./operation");
class KillCursorsOperation extends operation_1.AbstractOperation {
    constructor(cursorId, ns, server, options) {
        super(options);
        this.ns = ns;
        this.cursorId = cursorId;
        this.server = server;
    }
    async execute(server, session) {
        if (server !== this.server) {
            throw new error_1.MongoRuntimeError('Killcursor must run on the same server operation began on');
        }
        const killCursors = this.ns.collection;
        if (killCursors == null) {
            // Cursors should have adopted the namespace returned by MongoDB
            // which should always defined a collection name (even a pseudo one, ex. db.aggregate())
            throw new error_1.MongoRuntimeError('A collection name must be determined before killCursors');
        }
        const killCursorsCommand = {
            killCursors,
            cursors: [this.cursorId]
        };
        try {
            await server.commandAsync(this.ns, killCursorsCommand, { session });
        }
        catch {
            // The driver should never emit errors from killCursors, this is spec-ed behavior
        }
    }
}
exports.KillCursorsOperation = KillCursorsOperation;
(0, operation_1.defineAspects)(KillCursorsOperation, [operation_1.Aspect.MUST_SELECT_SAME_SERVER]);
//# sourceMappingURL=kill_cursors.js.map