import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C506Component } from './c506.component';

describe('C506Component', () => {
  let component: C506Component;
  let fixture: ComponentFixture<C506Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C506Component]
    });
    fixture = TestBed.createComponent(C506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
