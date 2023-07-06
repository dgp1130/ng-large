import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C970Component } from './c970.component';

describe('C970Component', () => {
  let component: C970Component;
  let fixture: ComponentFixture<C970Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C970Component]
    });
    fixture = TestBed.createComponent(C970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
