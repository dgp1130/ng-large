import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C192Component } from './c192.component';

describe('C192Component', () => {
  let component: C192Component;
  let fixture: ComponentFixture<C192Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C192Component]
    });
    fixture = TestBed.createComponent(C192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
