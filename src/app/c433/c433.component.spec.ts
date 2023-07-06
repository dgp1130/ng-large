import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C433Component } from './c433.component';

describe('C433Component', () => {
  let component: C433Component;
  let fixture: ComponentFixture<C433Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C433Component]
    });
    fixture = TestBed.createComponent(C433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
