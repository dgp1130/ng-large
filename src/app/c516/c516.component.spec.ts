import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C516Component } from './c516.component';

describe('C516Component', () => {
  let component: C516Component;
  let fixture: ComponentFixture<C516Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C516Component]
    });
    fixture = TestBed.createComponent(C516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
