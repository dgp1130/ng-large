import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C566Component } from './c566.component';

describe('C566Component', () => {
  let component: C566Component;
  let fixture: ComponentFixture<C566Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C566Component]
    });
    fixture = TestBed.createComponent(C566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
