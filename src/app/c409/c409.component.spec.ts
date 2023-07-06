import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C409Component } from './c409.component';

describe('C409Component', () => {
  let component: C409Component;
  let fixture: ComponentFixture<C409Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C409Component]
    });
    fixture = TestBed.createComponent(C409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
