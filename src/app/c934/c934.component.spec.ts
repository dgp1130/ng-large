import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C934Component } from './c934.component';

describe('C934Component', () => {
  let component: C934Component;
  let fixture: ComponentFixture<C934Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C934Component]
    });
    fixture = TestBed.createComponent(C934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
