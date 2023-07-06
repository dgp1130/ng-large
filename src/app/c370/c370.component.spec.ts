import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C370Component } from './c370.component';

describe('C370Component', () => {
  let component: C370Component;
  let fixture: ComponentFixture<C370Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C370Component]
    });
    fixture = TestBed.createComponent(C370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
