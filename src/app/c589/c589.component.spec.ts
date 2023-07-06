import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C589Component } from './c589.component';

describe('C589Component', () => {
  let component: C589Component;
  let fixture: ComponentFixture<C589Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C589Component]
    });
    fixture = TestBed.createComponent(C589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
