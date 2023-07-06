import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C852Component } from './c852.component';

describe('C852Component', () => {
  let component: C852Component;
  let fixture: ComponentFixture<C852Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C852Component]
    });
    fixture = TestBed.createComponent(C852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
