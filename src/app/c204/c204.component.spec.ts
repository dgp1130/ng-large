import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C204Component } from './c204.component';

describe('C204Component', () => {
  let component: C204Component;
  let fixture: ComponentFixture<C204Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C204Component]
    });
    fixture = TestBed.createComponent(C204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
