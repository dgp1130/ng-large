import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C578Component } from './c578.component';

describe('C578Component', () => {
  let component: C578Component;
  let fixture: ComponentFixture<C578Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C578Component]
    });
    fixture = TestBed.createComponent(C578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
