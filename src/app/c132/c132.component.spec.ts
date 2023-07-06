import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C132Component } from './c132.component';

describe('C132Component', () => {
  let component: C132Component;
  let fixture: ComponentFixture<C132Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C132Component]
    });
    fixture = TestBed.createComponent(C132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
