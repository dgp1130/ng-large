import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C104Component } from './c104.component';

describe('C104Component', () => {
  let component: C104Component;
  let fixture: ComponentFixture<C104Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C104Component]
    });
    fixture = TestBed.createComponent(C104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
