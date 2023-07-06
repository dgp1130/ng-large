import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C35Component } from './c35.component';

describe('C35Component', () => {
  let component: C35Component;
  let fixture: ComponentFixture<C35Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C35Component]
    });
    fixture = TestBed.createComponent(C35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
