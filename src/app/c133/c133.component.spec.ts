import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C133Component } from './c133.component';

describe('C133Component', () => {
  let component: C133Component;
  let fixture: ComponentFixture<C133Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C133Component]
    });
    fixture = TestBed.createComponent(C133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
