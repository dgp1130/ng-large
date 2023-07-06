import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C917Component } from './c917.component';

describe('C917Component', () => {
  let component: C917Component;
  let fixture: ComponentFixture<C917Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C917Component]
    });
    fixture = TestBed.createComponent(C917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
