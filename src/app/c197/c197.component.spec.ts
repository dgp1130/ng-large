import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C197Component } from './c197.component';

describe('C197Component', () => {
  let component: C197Component;
  let fixture: ComponentFixture<C197Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C197Component]
    });
    fixture = TestBed.createComponent(C197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
