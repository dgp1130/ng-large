import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C236Component } from './c236.component';

describe('C236Component', () => {
  let component: C236Component;
  let fixture: ComponentFixture<C236Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C236Component]
    });
    fixture = TestBed.createComponent(C236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
