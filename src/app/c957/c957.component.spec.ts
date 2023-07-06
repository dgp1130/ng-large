import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C957Component } from './c957.component';

describe('C957Component', () => {
  let component: C957Component;
  let fixture: ComponentFixture<C957Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C957Component]
    });
    fixture = TestBed.createComponent(C957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
