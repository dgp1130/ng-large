import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C874Component } from './c874.component';

describe('C874Component', () => {
  let component: C874Component;
  let fixture: ComponentFixture<C874Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C874Component]
    });
    fixture = TestBed.createComponent(C874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
