import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C347Component } from './c347.component';

describe('C347Component', () => {
  let component: C347Component;
  let fixture: ComponentFixture<C347Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C347Component]
    });
    fixture = TestBed.createComponent(C347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
