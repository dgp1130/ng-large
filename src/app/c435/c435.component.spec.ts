import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C435Component } from './c435.component';

describe('C435Component', () => {
  let component: C435Component;
  let fixture: ComponentFixture<C435Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C435Component]
    });
    fixture = TestBed.createComponent(C435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
