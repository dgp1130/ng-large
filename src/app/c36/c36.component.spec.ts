import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C36Component } from './c36.component';

describe('C36Component', () => {
  let component: C36Component;
  let fixture: ComponentFixture<C36Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C36Component]
    });
    fixture = TestBed.createComponent(C36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
