import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C657Component } from './c657.component';

describe('C657Component', () => {
  let component: C657Component;
  let fixture: ComponentFixture<C657Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C657Component]
    });
    fixture = TestBed.createComponent(C657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
