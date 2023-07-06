import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C266Component } from './c266.component';

describe('C266Component', () => {
  let component: C266Component;
  let fixture: ComponentFixture<C266Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C266Component]
    });
    fixture = TestBed.createComponent(C266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
