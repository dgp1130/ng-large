import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C344Component } from './c344.component';

describe('C344Component', () => {
  let component: C344Component;
  let fixture: ComponentFixture<C344Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C344Component]
    });
    fixture = TestBed.createComponent(C344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
