import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C974Component } from './c974.component';

describe('C974Component', () => {
  let component: C974Component;
  let fixture: ComponentFixture<C974Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C974Component]
    });
    fixture = TestBed.createComponent(C974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
