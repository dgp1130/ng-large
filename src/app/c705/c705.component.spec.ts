import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C705Component } from './c705.component';

describe('C705Component', () => {
  let component: C705Component;
  let fixture: ComponentFixture<C705Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C705Component]
    });
    fixture = TestBed.createComponent(C705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
