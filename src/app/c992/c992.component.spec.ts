import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C992Component } from './c992.component';

describe('C992Component', () => {
  let component: C992Component;
  let fixture: ComponentFixture<C992Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C992Component]
    });
    fixture = TestBed.createComponent(C992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
