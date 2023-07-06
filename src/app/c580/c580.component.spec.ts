import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C580Component } from './c580.component';

describe('C580Component', () => {
  let component: C580Component;
  let fixture: ComponentFixture<C580Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C580Component]
    });
    fixture = TestBed.createComponent(C580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
