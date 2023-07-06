import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C558Component } from './c558.component';

describe('C558Component', () => {
  let component: C558Component;
  let fixture: ComponentFixture<C558Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C558Component]
    });
    fixture = TestBed.createComponent(C558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
