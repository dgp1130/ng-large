import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C469Component } from './c469.component';

describe('C469Component', () => {
  let component: C469Component;
  let fixture: ComponentFixture<C469Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C469Component]
    });
    fixture = TestBed.createComponent(C469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
