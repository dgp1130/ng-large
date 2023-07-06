import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C720Component } from './c720.component';

describe('C720Component', () => {
  let component: C720Component;
  let fixture: ComponentFixture<C720Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C720Component]
    });
    fixture = TestBed.createComponent(C720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
