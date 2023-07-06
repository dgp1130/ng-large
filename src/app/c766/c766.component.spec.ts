import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C766Component } from './c766.component';

describe('C766Component', () => {
  let component: C766Component;
  let fixture: ComponentFixture<C766Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C766Component]
    });
    fixture = TestBed.createComponent(C766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
