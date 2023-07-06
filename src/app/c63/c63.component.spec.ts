import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C63Component } from './c63.component';

describe('C63Component', () => {
  let component: C63Component;
  let fixture: ComponentFixture<C63Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C63Component]
    });
    fixture = TestBed.createComponent(C63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
