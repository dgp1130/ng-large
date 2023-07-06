import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C208Component } from './c208.component';

describe('C208Component', () => {
  let component: C208Component;
  let fixture: ComponentFixture<C208Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C208Component]
    });
    fixture = TestBed.createComponent(C208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
