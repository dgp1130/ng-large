import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C239Component } from './c239.component';

describe('C239Component', () => {
  let component: C239Component;
  let fixture: ComponentFixture<C239Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C239Component]
    });
    fixture = TestBed.createComponent(C239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
