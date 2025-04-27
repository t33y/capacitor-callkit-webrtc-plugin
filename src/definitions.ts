import type { PermissionState, PluginListenerHandle } from '@capacitor/core';

export declare type PresentationOption = 'badge' | 'sound' | 'alert';

export interface PushNotificationsPlugin {
  /**
   * Register the app to receive push notifications.
   *
   * This method will trigger the `'registration'` event with the push token or
   * `'registrationError'` if there was a problem. It does not prompt the user for
   * notification permissions, use `requestPermissions()` first.
   *
   * @since 1.0.0
   */
  register(): Promise<void>;
  /**
   * Unregister the app from push notifications.
   *
   * This will delete a firebase token on Android, and unregister APNS on iOS.
   *
   * @since 5.0.0
   */
  unregister(): Promise<void>;
  /**
   * Get a list of notifications that are visible on the notifications screen.
   *
   * @since 1.0.0
   */
  getDeliveredNotifications(): Promise<DeliveredNotifications>;
  /**
   * Remove the specified notifications from the notifications screen.
   *
   * @since 1.0.0
   */
  removeDeliveredNotifications(
    delivered: DeliveredNotifications,
  ): Promise<void>;
  /**
   * Remove all the notifications from the notifications screen.
   *
   * @since 1.0.0
   */
  removeAllDeliveredNotifications(): Promise<void>;
  /**
   * Create a notification channel.
   *
   * Only available on Android O or newer (SDK 26+).
   *
   * @since 1.0.0
   */
  createChannel(channel: Channel): Promise<void>;
  /**
   * Delete a notification channel.
   *
   * Only available on Android O or newer (SDK 26+).
   *
   * @since 1.0.0
   */
  deleteChannel(args: { id: string }): Promise<void>;
  /**
   * List the available notification channels.
   *
   * Only available on Android O or newer (SDK 26+).
   *
   * @since 1.0.0
   */
  listChannels(): Promise<ListChannelsResult>;
  /**
   * Check permission to receive push notifications.
   *
   * On Android 12 and below the status is always granted because you can always
   * receive push notifications. If you need to check if the user allows
   * to display notifications, use local-notifications plugin.
   *
   * @since 1.0.0
   */
  checkPermissions(): Promise<PermissionStatus>;
  /**
   * Request permission to receive push notifications.
   *
   * On Android 12 and below it doesn't prompt for permission because you can always
   * receive push notifications.
   *
   * On iOS, the first time you use the function, it will prompt the user
   * for push notification permission and return granted or denied based
   * on the user selection. On following calls it will get the current status of
   * the permission without prompting again.
   *
   * @since 1.0.0
   */
  requestPermissions(): Promise<PermissionStatus>;
  /**
   * Called when the push notification registration finishes without problems.
   *
   * Provides the push notification token.
   *
   * @since 1.0.0
   */
  addListener(
    eventName: 'registration',
    listenerFunc: (token: Token) => void,
  ): Promise<PluginListenerHandle>;
  /**
   * Called when the push notification registration finished with problems.
   *
   * Provides an error with the registration problem.
   *
   * @since 1.0.0
   */
  addListener(
    eventName: 'registrationError',
    listenerFunc: (error: RegistrationError) => void,
  ): Promise<PluginListenerHandle>;
  /**
   * Called when the device receives a push notification.
   *
   * @since 1.0.0
   */
  addListener(
    eventName: 'pushNotificationReceived',
    listenerFunc: (notification: PushNotificationSchema) => void,
  ): Promise<PluginListenerHandle>;
  /**
   * Called when an action is performed on a push notification.
   *
   * @since 1.0.0
   */
  addListener(
    eventName: 'pushNotificationActionPerformed',
    listenerFunc: (notification: ActionPerformed) => void,
  ): Promise<PluginListenerHandle>;
  addListener(
    even: Events,
    cb: (data: CallKitParams) => void,
  ): Promise<PluginListenerHandle>;
  addListener(
    eventName: 'onIceCandidate',
    cb: (data: { iceCandidate: RTCIceCandidate }) => void,
  ): Promise<PluginListenerHandle>;
  addListener(
    eventName: 'onConnectionStateChange',
    cb: (data: { connectionState: RTCIceConnectionState }) => void,
  ): Promise<PluginListenerHandle>;
  addListener(
    eventName: 'onDataReceived',
    cb: (data: { dataReceived: string }) => void,
  ): Promise<PluginListenerHandle>;
  addListener(
    eventName: 'videoIntentConfirm',
    cb: (data: { confirm: string }) => void,
  ): Promise<PluginListenerHandle>;
  addListener(
    eventName: 'videoIntenthandle',
    cb: (data: { contact: string; callCapability: string }) => void,
  ): Promise<PluginListenerHandle>;

  /**
   * Remove all native listeners for this plugin.
   *
   * @since 1.0.0
   */
  removeAllListeners(): Promise<void>;
}
export interface PushNotificationSchema {
  /**
   * The notification title.
   *
   * @since 1.0.0
   */
  title?: string;
  /**
   * The notification subtitle.
   *
   * @since 1.0.0
   */
  subtitle?: string;
  /**
   * The main text payload for the notification.
   *
   * @since 1.0.0
   */
  body?: string;
  /**
   * The notification identifier.
   *
   * @since 1.0.0
   */
  id: string;
  /**
   * The notification tag.
   *
   * Only available on Android (from push notifications).
   *
   * @since 4.0.0
   */
  tag?: string;
  /**
   * The number to display for the app icon badge.
   *
   * @since 1.0.0
   */
  badge?: number;
  /**
   * It's not being returned.
   *
   * @deprecated will be removed in next major version.
   * @since 1.0.0
   */
  notification?: any;
  /**
   * Any additional data that was included in the
   * push notification payload.
   *
   * @since 1.0.0
   */
  data: any;
  /**
   * The action to be performed on the user opening the notification.
   *
   * Only available on Android.
   *
   * @since 1.0.0
   */
  click_action?: string;
  /**
   * Deep link from the notification.
   *
   * Only available on Android.
   *
   * @since 1.0.0
   */
  link?: string;
  /**
   * Set the group identifier for notification grouping.
   *
   * Only available on Android. Works like `threadIdentifier` on iOS.
   *
   * @since 1.0.0
   */
  group?: string;
  /**
   * Designate this notification as the summary for an associated `group`.
   *
   * Only available on Android.
   *
   * @since 1.0.0
   */
  groupSummary?: boolean;
}
export interface ActionPerformed {
  /**
   * The action performed on the notification.
   *
   * @since 1.0.0
   */
  actionId: string;
  /**
   * Text entered on the notification action.
   *
   * Only available on iOS.
   *
   * @since 1.0.0
   */
  inputValue?: string;
  /**
   * The notification in which the action was performed.
   *
   * @since 1.0.0
   */
  notification: PushNotificationSchema;
}
export interface Token {
  /**
   * On iOS it contains the APNS token.
   * On Android it contains the FCM token.
   *
   * @since 1.0.0
   */
  value: string;
}
export interface RegistrationError {
  /**
   * Error message describing the registration failure.
   *
   * @since 4.0.0
   */
  error: string;
}
export interface DeliveredNotifications {
  /**
   * List of notifications that are visible on the
   * notifications screen.
   *
   * @since 1.0.0
   */
  notifications: PushNotificationSchema[];
}
export interface Channel {
  /**
   * The channel identifier.
   *
   * @since 1.0.0
   */
  id: string;
  /**
   * The human-friendly name of this channel (presented to the user).
   *
   * @since 1.0.0
   */
  name: string;
  /**
   * The description of this channel (presented to the user).
   *
   * @since 1.0.0
   */
  description?: string;
  /**
   * The sound that should be played for notifications posted to this channel.
   *
   * Notification channels with an importance of at least `3` should have a
   * sound.
   *
   * The file name of a sound file should be specified relative to the android
   * app `res/raw` directory.
   *
   * @since 1.0.0
   * @example "jingle.wav"
   */
  sound?: string;
  /**
   * The level of interruption for notifications posted to this channel.
   *
   * @default `3`
   * @since 1.0.0
   */
  importance?: Importance;
  /**
   * The visibility of notifications posted to this channel.
   *
   * This setting is for whether notifications posted to this channel appear on
   * the lockscreen or not, and if so, whether they appear in a redacted form.
   *
   * @since 1.0.0
   */
  visibility?: Visibility;
  /**
   * Whether notifications posted to this channel should display notification
   * lights, on devices that support it.
   *
   * @since 1.0.0
   */
  lights?: boolean;
  /**
   * The light color for notifications posted to this channel.
   *
   * Only supported if lights are enabled on this channel and the device
   * supports it.
   *
   * Supported color formats are `#RRGGBB` and `#RRGGBBAA`.
   *
   * @since 1.0.0
   */
  lightColor?: string;
  /**
   * Whether notifications posted to this channel should vibrate.
   *
   * @since 1.0.0
   */
  vibration?: boolean;
}
/**
 * The importance level. For more details, see the [Android Developer Docs](https://developer.android.com/reference/android/app/NotificationManager#IMPORTANCE_DEFAULT)
 * @since 1.0.0
 */
export declare type Importance = 1 | 2 | 3 | 4 | 5;
/**
 * The notification visibility. For more details, see the [Android Developer Docs](https://developer.android.com/reference/androidx/core/app/NotificationCompat#VISIBILITY_PRIVATE)
 * @since 1.0.0
 */
export declare type Visibility = -1 | 0 | 1;
export interface ListChannelsResult {
  /**
   * List of all the Channels created by your app.
   *
   * @since 1.0.0
   */
  channels: Channel[];
}
export interface PermissionStatus {
  /**
   * Permission state of receiving notifications.
   *
   * @since 1.0.0
   */
  receive: PermissionState;
}
/**
 * @deprecated Use 'Channel`.
 * @since 1.0.0
 */
export declare type NotificationChannel = Channel;
/**
 * @deprecated Use `ListChannelsResult`.
 * @since 1.0.0
 */
export declare type NotificationChannelList = ListChannelsResult;
/**
 * @deprecated Use `PushNotificationSchema`.
 * @since 1.0.0
 */
export declare type PushNotification = PushNotificationSchema;
/**
 * @deprecated Use `ActionPerformed`.
 * @since 1.0.0
 */
export declare type PushNotificationActionPerformed = ActionPerformed;
/**
 * @deprecated Use `DeliveredNotifications`.
 * @since 1.0.0
 */
export declare type PushNotificationDeliveredList = DeliveredNotifications;
/**
 * @deprecated Use `Token`.
 * @since 1.0.0
 */
export declare type PushNotificationToken = Token;

export type MethodNames =
  | 'showCallkitIncoming'
  | 'checkIsVersionOk'
  | 'sendPendingAcceptEvent'
  | 'showCallkitIncomingSilently'
  | 'showMissCallNotification'
  | 'startCall'
  | 'muteCall'
  | 'holdCall'
  | 'isMuted'
  | 'endCall'
  | 'callConnected'
  | 'endAllCalls'
  | 'activeCalls'
  | 'getDevicePushTokenVoIP'
  | 'silenceEvents'
  | 'requestNotificationPermission'
  | 'requestFullIntentPermission'
  | 'hideCallkitIncoming'
  | 'endNativeSubsystemOnly'
  | 'setAudioRoute';

export type Events =
  | 'com.hiennv.flutter_callkit_incoming.DID_UPDATE_DEVICE_PUSH_TOKEN_VOIP'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_INCOMING'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_START'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_ACCEPT'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_DECLINE'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_ENDED'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TIMEOUT'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_CALLBACK'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TOGGLE_HOLD'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TOGGLE_MUTE'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TOGGLE_DMTF'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TOGGLE_GROUP'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TOGGLE_AUDIO_SESSION'
  | 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_CUSTOM';

// export enum Events {
//   actionDidUpdateDevicePushTokenVoip = 'com.hiennv.flutter_callkit_incoming.DID_UPDATE_DEVICE_PUSH_TOKEN_VOIP',
//   actionCallIncoming = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_INCOMING',
//   actionCallStart = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_START',
//   actionCallAccept = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_ACCEPT',
//   actionCallDecline = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_DECLINE',
//   actionCallEnded = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_ENDED',
//   actionCallTimeout = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TIMEOUT',
//   actionCallCallback = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_CALLBACK',
//   actionCallToggleHold = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TOGGLE_HOLD',
//   actionCallToggleMute = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TOGGLE_MUTE',
//   actionCallToggleDmtf = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TOGGLE_DMTF',
//   actionCallToggleGroup = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TOGGLE_GROUP',
//   actionCallToggleAudioSession = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_TOGGLE_AUDIO_SESSION',
//   actionCallCustom = 'com.hiennv.flutter_callkit_incoming.ACTION_CALL_CUSTOM',
// }

export interface NotificationParams {
  id?: number;
  showNotification?: boolean;
  subtitle?: string;
  callbackText?: string;
  isShowCallback: boolean;
  int?: number;
}

export interface IOSParams {
  /// App's Icon. using for display inside Callkit(iOS)
  iconName?: string;

  /// Type handle call `generic`, `number`, `email`
  handleType?: string;
  supportsVideo?: boolean;
  maximumCallGroups?: number;
  maximumCallsPerCallGroup?: number;
  audioSessionMode?: string;
  audioSessionActive?: boolean;
  audioSessionPreferredSampleRate?: number; // Float value
  audioSessionPreferredIOBufferDuration?: number; // Float value
  configureAudioSession?: boolean;
  supportsDTMF?: boolean;
  supportsHolding?: boolean;
  supportsGrouping?: boolean;
  supportsUngrouping?: boolean;

  /// Add file to root project xcode /ios/Runner/Ringtone.caf and Copy Bundle Resources(Build Phases) -> value: "Ringtone.caf"
  ringtonePath?: string;
}

export interface AndroidParams {
  /// Using custom notifications.
  isCustomNotification?: boolean;

  /// Using custom notification small on some devices clipped out in android.
  isCustomSmallExNotification?: boolean;

  /// Show logo app inside full screen.
  isShowLogo?: boolean;

  /// Show call id app inside full screen.
  isShowCallID?: boolean;

  /// File name ringtone, put file into /android/app/src/main/res/raw/ringtone_default.pm3 -> value: `ringtone_default.pm3`
  ringtonePath?: string;

  /// Incoming call screen background color.
  backgroundColor?: string;

  /// Using image background for Incoming call screen. example: http://... https://... or "assets/abc.png"
  backgroundUrl?: string;

  /// Color used in button/text on notification.
  actionColor?: string;

  /// Color used for the text in the full screen notification
  textColor?: string;

  /// Notification channel name of incoming call.
  incomingCallNotificationChannelName?: string;

  /// Notification channel name of missed call.
  missedCallNotificationChannelName?: string;

  /// Show full locked screen.
  isShowFullLockedScreen?: boolean;

  /// Caller is important to the user of this device with regards to how frequently they interact.
  /// https://developer.android.com/reference/androidx/core/app/Person#isImportant()
  isImportant?: boolean;

  /// Used primarily to identify automated tooling.
  /// https://developer.android.com/reference/androidx/core/app/Person#isBot()
  isBot?: boolean;
}

export interface CallKitParams {
  id?: string;
  nameCaller?: string;
  appName?: string;
  avatar?: string;
  handle?: string;
  type?: number;
  isOnHold?: boolean;
  isMuted?: boolean;
  normalHandle?: number;
  duration?: number;
  textAccept?: string;
  textDecline?: string;
  textMissedCall?: string;
  textCallback?: string;
  rationaleMessagePermission?: string;
  postNotificationMessageRequired?: string;
  missedCallNotification?: NotificationParams;
  extra?: { [key: string]: any };
  headers?: { [key: string]: any };
  android?: AndroidParams;
  ios?: IOSParams;
}

export type Responses =
  | void
  | { isMuted: boolean }
  | { calls: CallKitParams[] }
  | { isVersionOk: boolean }
  | { devicePushTokenVoIP: string };

export enum SdpType {
  offer = 'offer',
  prAnswer = 'prAnswer',
  answer = 'answer',
  rollback = 'rollback',
}

export interface SessionDescription {
  type: SdpType;
  sdp: string;
}

export interface FlutterCallkitIncomingPlugin extends PushNotificationsPlugin {
  unregisterProximityListener(): Promise<{ status: string }>;
  toggleSpeaker({
    useSpeaker,
  }: {
    useSpeaker: boolean;
  }): Promise<{ isSpeakerOn: boolean }>;
  isSpeakerOn(): Promise<{ isSpeakerOn: boolean }>;
  toggleMicrophone({
    mute,
  }: {
    mute: boolean;
  }): Promise<{ isMicrophoneMuted: boolean }>;
  isMicrophoneMuted(): Promise<{ isMicrophoneMuted: boolean }>;
  createAnswer(): Promise<SessionDescription>;
  createPeer({
    iceServers,
  }: {
    iceServers: [
      {
        urls: string[];
        username: string;
        credential: string;
      },
    ];
  }): Promise<{ status: string }>;
  createOffer({
    iceServers,
  }: {
    iceServers: [
      {
        urls: string[];
        username: string;
        credential: string;
      },
    ];
  }): Promise<SessionDescription>;
  setRemoteSdp({
    sdp,
    type,
    iceServers,
  }: {
    sdp: string;
    type: string;
    iceServers?: [
      {
        urls: string[];
        username: string;
        credential: string;
      },
    ];
  }): Promise<{ status: string }>;
  setRemoteIceCandidate({
    sdpMLineIndex,
    sdpMid,
    candidate,
  }: RTCIceCandidateInit): Promise<{ status: string }>;
  closePeerConnection(): Promise<{ status: string }>;
  getPeerConnectionStatus(): Promise<{ status: string }>;
  getRemoteDescriptionStatus(): Promise<{ status: string }>;
  doMethod(options: {
    options: string;
    methodName: MethodNames;
    parsedOptions: CallKitParams;
  }): Promise<Responses>;
}
