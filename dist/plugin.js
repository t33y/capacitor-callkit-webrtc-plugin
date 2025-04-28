var capacitorSwiftFlutterCallkitIncomingPlugin = (function (exports, core) {
    'use strict';

    exports.SdpType = void 0;
    (function (SdpType) {
        SdpType["offer"] = "offer";
        SdpType["prAnswer"] = "prAnswer";
        SdpType["answer"] = "answer";
        SdpType["rollback"] = "rollback";
    })(exports.SdpType || (exports.SdpType = {}));

    const FlutterCallkitIncoming = core.registerPlugin('FlutterCallkitIncoming', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.FlutterCallkitIncomingWeb()),
    });

    class FlutterCallkitIncomingWeb extends core.WebPlugin {
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FlutterCallkitIncomingWeb: FlutterCallkitIncomingWeb
    });

    exports.FlutterCallkitIncoming = FlutterCallkitIncoming;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
