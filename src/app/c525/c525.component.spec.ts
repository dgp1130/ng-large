import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C525Component } from './c525.component';

describe('C525Component', () => {
  let component: C525Component;
  let fixture: ComponentFixture<C525Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C525Component]
    });
    fixture = TestBed.createComponent(C525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
