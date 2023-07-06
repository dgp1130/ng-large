import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C995Component } from './c995.component';

describe('C995Component', () => {
  let component: C995Component;
  let fixture: ComponentFixture<C995Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C995Component]
    });
    fixture = TestBed.createComponent(C995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
