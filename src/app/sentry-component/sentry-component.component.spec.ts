import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentryComponentComponent } from './sentry-component.component';

describe('SentryComponentComponent', () => {
  let component: SentryComponentComponent;
  let fixture: ComponentFixture<SentryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
