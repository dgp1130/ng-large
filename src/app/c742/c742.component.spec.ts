import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C742Component } from './c742.component';

describe('C742Component', () => {
  let component: C742Component;
  let fixture: ComponentFixture<C742Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C742Component]
    });
    fixture = TestBed.createComponent(C742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
