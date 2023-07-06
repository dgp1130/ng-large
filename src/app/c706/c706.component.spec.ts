import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C706Component } from './c706.component';

describe('C706Component', () => {
  let component: C706Component;
  let fixture: ComponentFixture<C706Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C706Component]
    });
    fixture = TestBed.createComponent(C706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
