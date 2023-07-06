import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C278Component } from './c278.component';

describe('C278Component', () => {
  let component: C278Component;
  let fixture: ComponentFixture<C278Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C278Component]
    });
    fixture = TestBed.createComponent(C278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
