import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C965Component } from './c965.component';

describe('C965Component', () => {
  let component: C965Component;
  let fixture: ComponentFixture<C965Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C965Component]
    });
    fixture = TestBed.createComponent(C965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
