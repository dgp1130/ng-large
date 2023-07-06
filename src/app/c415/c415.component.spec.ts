import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C415Component } from './c415.component';

describe('C415Component', () => {
  let component: C415Component;
  let fixture: ComponentFixture<C415Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C415Component]
    });
    fixture = TestBed.createComponent(C415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
