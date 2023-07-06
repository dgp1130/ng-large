import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C613Component } from './c613.component';

describe('C613Component', () => {
  let component: C613Component;
  let fixture: ComponentFixture<C613Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C613Component]
    });
    fixture = TestBed.createComponent(C613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
