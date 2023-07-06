import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C295Component } from './c295.component';

describe('C295Component', () => {
  let component: C295Component;
  let fixture: ComponentFixture<C295Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C295Component]
    });
    fixture = TestBed.createComponent(C295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
