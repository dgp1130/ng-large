import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C258Component } from './c258.component';

describe('C258Component', () => {
  let component: C258Component;
  let fixture: ComponentFixture<C258Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C258Component]
    });
    fixture = TestBed.createComponent(C258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
