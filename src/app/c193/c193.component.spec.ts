import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C193Component } from './c193.component';

describe('C193Component', () => {
  let component: C193Component;
  let fixture: ComponentFixture<C193Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C193Component]
    });
    fixture = TestBed.createComponent(C193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
