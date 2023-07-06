import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C376Component } from './c376.component';

describe('C376Component', () => {
  let component: C376Component;
  let fixture: ComponentFixture<C376Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C376Component]
    });
    fixture = TestBed.createComponent(C376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
