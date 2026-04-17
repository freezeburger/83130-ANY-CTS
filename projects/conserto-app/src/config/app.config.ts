import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '../routes/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { crudInterceptor } from '../app/core/interceptors/crud-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([crudInterceptor])),
    // { provide: HTTP_INTERCEPTORS, useValue: crudInterceptor, multi: true },
    provideRouter(routes),
    provideZoneChangeDetection(),
  ]
};
