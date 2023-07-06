import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C198Component } from './c198.component';

describe('C198Component', () => {
  let component: C198Component;
  let fixture: ComponentFixture<C198Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C198Component]
    });
    fixture = TestBed.createComponent(C198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
