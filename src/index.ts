import { registerPlugin } from '@capacitor/core';

import type { SwiftFlutterCallkitIncomingPluginPlugin } from './definitions';

const SwiftFlutterCallkitIncomingPlugin =
  registerPlugin<SwiftFlutterCallkitIncomingPluginPlugin>(
    'SwiftFlutterCallkitIncomingPlugin',
    {
      web: () =>
        import('./web').then(m => new m.SwiftFlutterCallkitIncomingPluginWeb()),
    },
  );

export * from './definitions';
export { SwiftFlutterCallkitIncomingPlugin };
