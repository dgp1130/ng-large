import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C300Component } from './c300.component';

describe('C300Component', () => {
  let component: C300Component;
  let fixture: ComponentFixture<C300Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C300Component]
    });
    fixture = TestBed.createComponent(C300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
