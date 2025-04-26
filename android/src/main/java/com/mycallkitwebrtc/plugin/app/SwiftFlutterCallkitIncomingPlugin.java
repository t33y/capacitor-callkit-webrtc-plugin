package com.mycallkitwebrtc.plugin.app;

import android.util.Log;

public class SwiftFlutterCallkitIncomingPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
