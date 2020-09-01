import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentryComponentComponent } from './sentry-component/sentry-component.component';

import * as Sentry from "@sentry/angular";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Integrations } from "@sentry/tracing";

Sentry.init({
  //Specify your own project specific DSN to hook it up to your sentry account
  dsn: 'https://fd33dc53a08944a7bd116921b6df5d64@o442271.ingest.sentry.io/5413973',
});

@NgModule({
  declarations: [
    AppComponent,
    SentryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
