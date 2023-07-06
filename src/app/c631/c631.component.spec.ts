import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C631Component } from './c631.component';

describe('C631Component', () => {
  let component: C631Component;
  let fixture: ComponentFixture<C631Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C631Component]
    });
    fixture = TestBed.createComponent(C631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
