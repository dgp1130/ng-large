import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C327Component } from './c327.component';

describe('C327Component', () => {
  let component: C327Component;
  let fixture: ComponentFixture<C327Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C327Component]
    });
    fixture = TestBed.createComponent(C327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
