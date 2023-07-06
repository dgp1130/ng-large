import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C99Component } from './c99.component';

describe('C99Component', () => {
  let component: C99Component;
  let fixture: ComponentFixture<C99Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C99Component]
    });
    fixture = TestBed.createComponent(C99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
