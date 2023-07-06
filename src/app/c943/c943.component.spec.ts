import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C943Component } from './c943.component';

describe('C943Component', () => {
  let component: C943Component;
  let fixture: ComponentFixture<C943Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C943Component]
    });
    fixture = TestBed.createComponent(C943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
