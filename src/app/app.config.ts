import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideStoreDevtools} from '@ngrx/store-devtools'
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import * as parkingCalculator from './core/+state/parking-calculator.reducer'
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({parkingCalculator: parkingCalculator.reducer}),
    provideStoreDevtools({maxAge: 25}),
  ]
};
