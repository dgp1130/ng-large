import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C812Component } from './c812.component';

describe('C812Component', () => {
  let component: C812Component;
  let fixture: ComponentFixture<C812Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C812Component]
    });
    fixture = TestBed.createComponent(C812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
