import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C634Component } from './c634.component';

describe('C634Component', () => {
  let component: C634Component;
  let fixture: ComponentFixture<C634Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C634Component]
    });
    fixture = TestBed.createComponent(C634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
