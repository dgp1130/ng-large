import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C900Component } from './c900.component';

describe('C900Component', () => {
  let component: C900Component;
  let fixture: ComponentFixture<C900Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C900Component]
    });
    fixture = TestBed.createComponent(C900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
