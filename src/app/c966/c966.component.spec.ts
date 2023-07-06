import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C966Component } from './c966.component';

describe('C966Component', () => {
  let component: C966Component;
  let fixture: ComponentFixture<C966Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C966Component]
    });
    fixture = TestBed.createComponent(C966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
