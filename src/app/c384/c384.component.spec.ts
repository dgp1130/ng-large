import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C384Component } from './c384.component';

describe('C384Component', () => {
  let component: C384Component;
  let fixture: ComponentFixture<C384Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C384Component]
    });
    fixture = TestBed.createComponent(C384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
