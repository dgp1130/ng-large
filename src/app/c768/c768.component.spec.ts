import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C768Component } from './c768.component';

describe('C768Component', () => {
  let component: C768Component;
  let fixture: ComponentFixture<C768Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C768Component]
    });
    fixture = TestBed.createComponent(C768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
