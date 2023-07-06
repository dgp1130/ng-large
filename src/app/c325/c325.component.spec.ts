import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C325Component } from './c325.component';

describe('C325Component', () => {
  let component: C325Component;
  let fixture: ComponentFixture<C325Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C325Component]
    });
    fixture = TestBed.createComponent(C325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
