import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C233Component } from './c233.component';

describe('C233Component', () => {
  let component: C233Component;
  let fixture: ComponentFixture<C233Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C233Component]
    });
    fixture = TestBed.createComponent(C233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
