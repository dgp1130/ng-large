import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C47Component } from './c47.component';

describe('C47Component', () => {
  let component: C47Component;
  let fixture: ComponentFixture<C47Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C47Component]
    });
    fixture = TestBed.createComponent(C47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
