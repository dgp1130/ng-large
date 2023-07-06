import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C945Component } from './c945.component';

describe('C945Component', () => {
  let component: C945Component;
  let fixture: ComponentFixture<C945Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C945Component]
    });
    fixture = TestBed.createComponent(C945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
