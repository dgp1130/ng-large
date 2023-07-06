import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C791Component } from './c791.component';

describe('C791Component', () => {
  let component: C791Component;
  let fixture: ComponentFixture<C791Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C791Component]
    });
    fixture = TestBed.createComponent(C791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
