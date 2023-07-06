import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C986Component } from './c986.component';

describe('C986Component', () => {
  let component: C986Component;
  let fixture: ComponentFixture<C986Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C986Component]
    });
    fixture = TestBed.createComponent(C986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
