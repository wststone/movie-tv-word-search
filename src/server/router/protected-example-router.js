import { createProtectedRouter } from "./context";
// Example router with queries that can only be hit if the user requesting is signed in
export var protectedExampleRouter = createProtectedRouter()
    .query("getSession", {
    resolve: function (_a) {
        var ctx = _a.ctx;
        return ctx.session;
    },
})
    .query("getSecretMessage", {
    resolve: function (_a) {
        var ctx = _a.ctx;
        return "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.";
    },
});
