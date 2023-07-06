import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C993Component } from './c993.component';

describe('C993Component', () => {
  let component: C993Component;
  let fixture: ComponentFixture<C993Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C993Component]
    });
    fixture = TestBed.createComponent(C993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
