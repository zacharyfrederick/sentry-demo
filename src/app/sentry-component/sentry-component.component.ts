import { Component, OnInit } from '@angular/core';

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


@Component({
  selector: 'app-sentry-component',
  templateUrl: './sentry-component.component.html',
  styleUrls: ['./sentry-component.component.css']
})
export class SentryComponentComponent implements OnInit {
  clicks = 0;
  clickMessage = "I have not been clicked yet";

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(): void {
    this.clicks += 1;
    
    if (this.clicks >= 3) {
      this.throws_exception();
    }
    this.clickMessage = "I have been clicked " + this.clicks  + " times";
  }

  throws_exception(): void {
    throw ReferenceError("This is a different error");
  }

}
