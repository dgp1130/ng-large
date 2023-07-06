import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C719Component } from './c719.component';

describe('C719Component', () => {
  let component: C719Component;
  let fixture: ComponentFixture<C719Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C719Component]
    });
    fixture = TestBed.createComponent(C719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
