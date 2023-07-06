import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C702Component } from './c702.component';

describe('C702Component', () => {
  let component: C702Component;
  let fixture: ComponentFixture<C702Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C702Component]
    });
    fixture = TestBed.createComponent(C702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
