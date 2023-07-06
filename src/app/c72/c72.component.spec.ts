import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C72Component } from './c72.component';

describe('C72Component', () => {
  let component: C72Component;
  let fixture: ComponentFixture<C72Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C72Component]
    });
    fixture = TestBed.createComponent(C72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
