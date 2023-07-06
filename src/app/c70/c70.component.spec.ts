import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C70Component } from './c70.component';

describe('C70Component', () => {
  let component: C70Component;
  let fixture: ComponentFixture<C70Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C70Component]
    });
    fixture = TestBed.createComponent(C70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
