import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C25Component } from './c25.component';

describe('C25Component', () => {
  let component: C25Component;
  let fixture: ComponentFixture<C25Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C25Component]
    });
    fixture = TestBed.createComponent(C25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
