import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C806Component } from './c806.component';

describe('C806Component', () => {
  let component: C806Component;
  let fixture: ComponentFixture<C806Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C806Component]
    });
    fixture = TestBed.createComponent(C806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
