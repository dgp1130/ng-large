import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C710Component } from './c710.component';

describe('C710Component', () => {
  let component: C710Component;
  let fixture: ComponentFixture<C710Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C710Component]
    });
    fixture = TestBed.createComponent(C710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
