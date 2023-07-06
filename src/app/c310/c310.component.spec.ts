import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C310Component } from './c310.component';

describe('C310Component', () => {
  let component: C310Component;
  let fixture: ComponentFixture<C310Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C310Component]
    });
    fixture = TestBed.createComponent(C310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
