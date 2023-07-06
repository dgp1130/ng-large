import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C256Component } from './c256.component';

describe('C256Component', () => {
  let component: C256Component;
  let fixture: ComponentFixture<C256Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C256Component]
    });
    fixture = TestBed.createComponent(C256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
