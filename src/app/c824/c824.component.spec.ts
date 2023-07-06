import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C824Component } from './c824.component';

describe('C824Component', () => {
  let component: C824Component;
  let fixture: ComponentFixture<C824Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C824Component]
    });
    fixture = TestBed.createComponent(C824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
