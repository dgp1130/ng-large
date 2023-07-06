import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C984Component } from './c984.component';

describe('C984Component', () => {
  let component: C984Component;
  let fixture: ComponentFixture<C984Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C984Component]
    });
    fixture = TestBed.createComponent(C984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
