import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import localeFr from '@angular/common/locales/fr'
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeFr);
registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    {provide: LOCALE_ID, useValue: 'fr-FR'}, // locale par défaut
    provideHttpClient(), // NB: add interceptors here
  ]
};
