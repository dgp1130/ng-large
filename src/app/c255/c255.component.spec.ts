import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C255Component } from './c255.component';

describe('C255Component', () => {
  let component: C255Component;
  let fixture: ComponentFixture<C255Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C255Component]
    });
    fixture = TestBed.createComponent(C255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
