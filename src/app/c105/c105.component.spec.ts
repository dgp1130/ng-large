import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C105Component } from './c105.component';

describe('C105Component', () => {
  let component: C105Component;
  let fixture: ComponentFixture<C105Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C105Component]
    });
    fixture = TestBed.createComponent(C105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
