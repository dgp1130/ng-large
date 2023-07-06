import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C655Component } from './c655.component';

describe('C655Component', () => {
  let component: C655Component;
  let fixture: ComponentFixture<C655Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C655Component]
    });
    fixture = TestBed.createComponent(C655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
