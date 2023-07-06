import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C257Component } from './c257.component';

describe('C257Component', () => {
  let component: C257Component;
  let fixture: ComponentFixture<C257Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C257Component]
    });
    fixture = TestBed.createComponent(C257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
