import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C443Component } from './c443.component';

describe('C443Component', () => {
  let component: C443Component;
  let fixture: ComponentFixture<C443Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C443Component]
    });
    fixture = TestBed.createComponent(C443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
