import { WebPlugin } from '@capacitor/core';

import type { SwiftFlutterCallkitIncomingPluginPlugin } from './definitions';

export class SwiftFlutterCallkitIncomingPluginWeb
  extends WebPlugin
  implements SwiftFlutterCallkitIncomingPluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
