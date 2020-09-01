import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ErrorHandler} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentryComponentComponent } from './sentry-component/sentry-component.component';

import * as Sentry from "@sentry/browser";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Integrations } from "@sentry/tracing";

Sentry.init({
  //Specify your own project specific DSN to hook it up to your sentry account
  dsn: 'https://fd33dc53a08944a7bd116921b6df5d64@o442271.ingest.sentry.io/5413973',
});


@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    console.error(error);
    window.location.reload();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SentryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
