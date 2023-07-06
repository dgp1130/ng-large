import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C520Component } from './c520.component';

describe('C520Component', () => {
  let component: C520Component;
  let fixture: ComponentFixture<C520Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C520Component]
    });
    fixture = TestBed.createComponent(C520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
