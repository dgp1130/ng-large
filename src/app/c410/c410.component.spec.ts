import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C410Component } from './c410.component';

describe('C410Component', () => {
  let component: C410Component;
  let fixture: ComponentFixture<C410Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C410Component]
    });
    fixture = TestBed.createComponent(C410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
