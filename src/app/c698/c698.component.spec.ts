import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C698Component } from './c698.component';

describe('C698Component', () => {
  let component: C698Component;
  let fixture: ComponentFixture<C698Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C698Component]
    });
    fixture = TestBed.createComponent(C698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
