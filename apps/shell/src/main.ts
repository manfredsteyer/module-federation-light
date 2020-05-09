import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initExternals } from './app/externals-utils';

if (environment.production) {
  enableProdMode();
}

initExternals(environment.production);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
