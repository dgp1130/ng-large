import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C737Component } from './c737.component';

describe('C737Component', () => {
  let component: C737Component;
  let fixture: ComponentFixture<C737Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C737Component]
    });
    fixture = TestBed.createComponent(C737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
