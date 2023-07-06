import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C43Component } from './c43.component';

describe('C43Component', () => {
  let component: C43Component;
  let fixture: ComponentFixture<C43Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C43Component]
    });
    fixture = TestBed.createComponent(C43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
