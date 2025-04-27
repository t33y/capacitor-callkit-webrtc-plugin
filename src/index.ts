import { registerPlugin } from '@capacitor/core';

import type { FlutterCallkitIncomingPlugin } from './definitions';

const FlutterCallkitIncoming = registerPlugin<FlutterCallkitIncomingPlugin>(
  'FlutterCallkitIncomingWebrtc',
  {
    web: () => import('./web').then(m => new m.FlutterCallkitIncomingWeb()),
  },
);

export * from './definitions';
export { FlutterCallkitIncoming };
