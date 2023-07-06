import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C279Component } from './c279.component';

describe('C279Component', () => {
  let component: C279Component;
  let fixture: ComponentFixture<C279Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C279Component]
    });
    fixture = TestBed.createComponent(C279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
