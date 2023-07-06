import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C461Component } from './c461.component';

describe('C461Component', () => {
  let component: C461Component;
  let fixture: ComponentFixture<C461Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C461Component]
    });
    fixture = TestBed.createComponent(C461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
