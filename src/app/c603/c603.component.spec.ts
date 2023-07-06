import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C603Component } from './c603.component';

describe('C603Component', () => {
  let component: C603Component;
  let fixture: ComponentFixture<C603Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C603Component]
    });
    fixture = TestBed.createComponent(C603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
