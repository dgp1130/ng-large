import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C593Component } from './c593.component';

describe('C593Component', () => {
  let component: C593Component;
  let fixture: ComponentFixture<C593Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C593Component]
    });
    fixture = TestBed.createComponent(C593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
