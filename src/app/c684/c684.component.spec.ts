import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C684Component } from './c684.component';

describe('C684Component', () => {
  let component: C684Component;
  let fixture: ComponentFixture<C684Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C684Component]
    });
    fixture = TestBed.createComponent(C684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
