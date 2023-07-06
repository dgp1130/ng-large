import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C813Component } from './c813.component';

describe('C813Component', () => {
  let component: C813Component;
  let fixture: ComponentFixture<C813Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C813Component]
    });
    fixture = TestBed.createComponent(C813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
