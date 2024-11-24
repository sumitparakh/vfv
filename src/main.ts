import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/app-routing.module';
import { importProvidersFrom } from '@angular/core';

declare global {
  interface Window {
    YT: typeof YT | undefined;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([RouterModule.forRoot(routes)]),
  ]
}).catch(err => console.error(err));
