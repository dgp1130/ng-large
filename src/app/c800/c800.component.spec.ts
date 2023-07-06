import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C800Component } from './c800.component';

describe('C800Component', () => {
  let component: C800Component;
  let fixture: ComponentFixture<C800Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C800Component]
    });
    fixture = TestBed.createComponent(C800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
