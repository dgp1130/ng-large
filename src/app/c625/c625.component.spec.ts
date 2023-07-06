import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C625Component } from './c625.component';

describe('C625Component', () => {
  let component: C625Component;
  let fixture: ComponentFixture<C625Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C625Component]
    });
    fixture = TestBed.createComponent(C625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
