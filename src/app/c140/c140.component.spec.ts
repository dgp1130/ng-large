import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C140Component } from './c140.component';

describe('C140Component', () => {
  let component: C140Component;
  let fixture: ComponentFixture<C140Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C140Component]
    });
    fixture = TestBed.createComponent(C140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
