import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C790Component } from './c790.component';

describe('C790Component', () => {
  let component: C790Component;
  let fixture: ComponentFixture<C790Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C790Component]
    });
    fixture = TestBed.createComponent(C790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
