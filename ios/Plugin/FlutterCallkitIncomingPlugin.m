#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(SwiftFlutterCallkitIncomingPluginPlugin, "FlutterCallkitIncoming",
        CAP_PLUGIN_METHOD(createPeer, CAPPluginReturnPromise );
        CAP_PLUGIN_METHOD(getRemoteDescriptionStatus, CAPPluginReturnPromise );
        CAP_PLUGIN_METHOD(toggleSpeaker, CAPPluginReturnPromise );
        CAP_PLUGIN_METHOD(isSpeakerOn, CAPPluginReturnPromise );
        CAP_PLUGIN_METHOD(toggleMicrophone, CAPPluginReturnPromise );
        CAP_PLUGIN_METHOD(isMicrophoneMuted, CAPPluginReturnPromise );
        CAP_PLUGIN_METHOD(setRemoteSdp, CAPPluginReturnPromise );
        CAP_PLUGIN_METHOD(setRemoteIceCandidate, CAPPluginReturnPromise );
        CAP_PLUGIN_METHOD( createAnswer, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( createOffer, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( closePeerConnection, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( getPeerConnectionStatus, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( doMethod, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( register, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( unregister, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( checkPermissions, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( requestPermissions, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( getDeliveredNotifications, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( removeAllDeliveredNotifications, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( removeDeliveredNotifications, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( createChannel, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( listChannels, CAPPluginReturnPromise);
        CAP_PLUGIN_METHOD( deleteChannel, CAPPluginReturnPromise);
)
