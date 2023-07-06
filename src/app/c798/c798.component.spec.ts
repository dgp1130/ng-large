import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C798Component } from './c798.component';

describe('C798Component', () => {
  let component: C798Component;
  let fixture: ComponentFixture<C798Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C798Component]
    });
    fixture = TestBed.createComponent(C798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
