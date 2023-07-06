import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C907Component } from './c907.component';

describe('C907Component', () => {
  let component: C907Component;
  let fixture: ComponentFixture<C907Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C907Component]
    });
    fixture = TestBed.createComponent(C907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
