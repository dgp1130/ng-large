import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C826Component } from './c826.component';

describe('C826Component', () => {
  let component: C826Component;
  let fixture: ComponentFixture<C826Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C826Component]
    });
    fixture = TestBed.createComponent(C826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
