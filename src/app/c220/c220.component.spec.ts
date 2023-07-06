import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C220Component } from './c220.component';

describe('C220Component', () => {
  let component: C220Component;
  let fixture: ComponentFixture<C220Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C220Component]
    });
    fixture = TestBed.createComponent(C220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
