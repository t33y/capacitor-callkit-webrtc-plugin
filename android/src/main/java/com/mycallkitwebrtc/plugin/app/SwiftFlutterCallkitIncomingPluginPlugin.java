package com.mycallkitwebrtc.plugin.app;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SwiftFlutterCallkitIncomingPlugin")
public class SwiftFlutterCallkitIncomingPluginPlugin extends Plugin {

    private SwiftFlutterCallkitIncomingPlugin implementation = new SwiftFlutterCallkitIncomingPlugin();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}
