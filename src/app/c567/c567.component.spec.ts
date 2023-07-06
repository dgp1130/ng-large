import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C567Component } from './c567.component';

describe('C567Component', () => {
  let component: C567Component;
  let fixture: ComponentFixture<C567Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C567Component]
    });
    fixture = TestBed.createComponent(C567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
