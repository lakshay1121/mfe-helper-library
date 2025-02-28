import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModuleFederationHelper {
  static async loadRemoteModule(options: {
    remoteEntry: string;
    remoteName: string;
    exposedModule: string;
    fallback: Type<any>;
  }) {
    try {
      const isAvailable = await fetch(options.remoteEntry, { method: 'HEAD' })
        .then(() => true)
        .catch(() => false);

      if (!isAvailable) {
        console.warn(`Remote ${options.remoteName} is unavailable. Using fallback.`);
        return options.fallback;
      }

      await __webpack_init_sharing__('default');
      // @ts-ignore
      const container = window[options.remoteName];
      await container.init(__webpack_share_scopes__.default);
      // @ts-ignore
      const module = await container.get(options.exposedModule)();
      return module;
    } catch (error) {
      console.error(`Error loading ${options.remoteName}:`, error);
      return options.fallback;
    }
  }
}
