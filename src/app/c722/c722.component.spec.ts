import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C722Component } from './c722.component';

describe('C722Component', () => {
  let component: C722Component;
  let fixture: ComponentFixture<C722Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C722Component]
    });
    fixture = TestBed.createComponent(C722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
