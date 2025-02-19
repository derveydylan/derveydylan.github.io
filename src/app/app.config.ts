import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { PageTitleStrategy } from './core/page-title.strategy';

export const appConfig: ApplicationConfig =
{
    providers:
    [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withViewTransitions()),
        provideClientHydration(),
        { provide: TitleStrategy, useClass: PageTitleStrategy }
    ]
};
