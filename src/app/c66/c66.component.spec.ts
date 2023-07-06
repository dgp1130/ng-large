import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C66Component } from './c66.component';

describe('C66Component', () => {
  let component: C66Component;
  let fixture: ComponentFixture<C66Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C66Component]
    });
    fixture = TestBed.createComponent(C66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
