import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C33Component } from './c33.component';

describe('C33Component', () => {
  let component: C33Component;
  let fixture: ComponentFixture<C33Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C33Component]
    });
    fixture = TestBed.createComponent(C33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
