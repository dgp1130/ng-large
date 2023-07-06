import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C360Component } from './c360.component';

describe('C360Component', () => {
  let component: C360Component;
  let fixture: ComponentFixture<C360Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C360Component]
    });
    fixture = TestBed.createComponent(C360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
