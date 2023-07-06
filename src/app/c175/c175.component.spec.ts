import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C175Component } from './c175.component';

describe('C175Component', () => {
  let component: C175Component;
  let fixture: ComponentFixture<C175Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C175Component]
    });
    fixture = TestBed.createComponent(C175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
