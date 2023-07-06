import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C780Component } from './c780.component';

describe('C780Component', () => {
  let component: C780Component;
  let fixture: ComponentFixture<C780Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C780Component]
    });
    fixture = TestBed.createComponent(C780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
