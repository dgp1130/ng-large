import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C810Component } from './c810.component';

describe('C810Component', () => {
  let component: C810Component;
  let fixture: ComponentFixture<C810Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C810Component]
    });
    fixture = TestBed.createComponent(C810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
