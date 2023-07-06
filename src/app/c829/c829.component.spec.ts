import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C829Component } from './c829.component';

describe('C829Component', () => {
  let component: C829Component;
  let fixture: ComponentFixture<C829Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C829Component]
    });
    fixture = TestBed.createComponent(C829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
