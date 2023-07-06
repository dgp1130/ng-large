import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C885Component } from './c885.component';

describe('C885Component', () => {
  let component: C885Component;
  let fixture: ComponentFixture<C885Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C885Component]
    });
    fixture = TestBed.createComponent(C885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
