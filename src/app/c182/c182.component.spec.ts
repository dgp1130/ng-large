import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C182Component } from './c182.component';

describe('C182Component', () => {
  let component: C182Component;
  let fixture: ComponentFixture<C182Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C182Component]
    });
    fixture = TestBed.createComponent(C182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
