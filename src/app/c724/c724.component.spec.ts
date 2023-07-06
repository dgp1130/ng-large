import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C724Component } from './c724.component';

describe('C724Component', () => {
  let component: C724Component;
  let fixture: ComponentFixture<C724Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C724Component]
    });
    fixture = TestBed.createComponent(C724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
