import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C831Component } from './c831.component';

describe('C831Component', () => {
  let component: C831Component;
  let fixture: ComponentFixture<C831Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C831Component]
    });
    fixture = TestBed.createComponent(C831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
