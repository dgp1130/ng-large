import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C111Component } from './c111.component';

describe('C111Component', () => {
  let component: C111Component;
  let fixture: ComponentFixture<C111Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C111Component]
    });
    fixture = TestBed.createComponent(C111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
