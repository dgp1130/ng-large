import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C643Component } from './c643.component';

describe('C643Component', () => {
  let component: C643Component;
  let fixture: ComponentFixture<C643Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C643Component]
    });
    fixture = TestBed.createComponent(C643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
