import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C242Component } from './c242.component';

describe('C242Component', () => {
  let component: C242Component;
  let fixture: ComponentFixture<C242Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C242Component]
    });
    fixture = TestBed.createComponent(C242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
