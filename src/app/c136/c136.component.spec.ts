import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C136Component } from './c136.component';

describe('C136Component', () => {
  let component: C136Component;
  let fixture: ComponentFixture<C136Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C136Component]
    });
    fixture = TestBed.createComponent(C136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
