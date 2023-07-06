import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C326Component } from './c326.component';

describe('C326Component', () => {
  let component: C326Component;
  let fixture: ComponentFixture<C326Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C326Component]
    });
    fixture = TestBed.createComponent(C326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
