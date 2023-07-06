import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C734Component } from './c734.component';

describe('C734Component', () => {
  let component: C734Component;
  let fixture: ComponentFixture<C734Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C734Component]
    });
    fixture = TestBed.createComponent(C734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
