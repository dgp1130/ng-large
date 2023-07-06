import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C245Component } from './c245.component';

describe('C245Component', () => {
  let component: C245Component;
  let fixture: ComponentFixture<C245Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C245Component]
    });
    fixture = TestBed.createComponent(C245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
