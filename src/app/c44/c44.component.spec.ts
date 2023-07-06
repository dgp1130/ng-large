import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C44Component } from './c44.component';

describe('C44Component', () => {
  let component: C44Component;
  let fixture: ComponentFixture<C44Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C44Component]
    });
    fixture = TestBed.createComponent(C44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
