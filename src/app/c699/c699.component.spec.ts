import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C699Component } from './c699.component';

describe('C699Component', () => {
  let component: C699Component;
  let fixture: ComponentFixture<C699Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C699Component]
    });
    fixture = TestBed.createComponent(C699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
