import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C49Component } from './c49.component';

describe('C49Component', () => {
  let component: C49Component;
  let fixture: ComponentFixture<C49Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C49Component]
    });
    fixture = TestBed.createComponent(C49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
