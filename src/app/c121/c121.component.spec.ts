import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C121Component } from './c121.component';

describe('C121Component', () => {
  let component: C121Component;
  let fixture: ComponentFixture<C121Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C121Component]
    });
    fixture = TestBed.createComponent(C121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
