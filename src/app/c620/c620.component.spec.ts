import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C620Component } from './c620.component';

describe('C620Component', () => {
  let component: C620Component;
  let fixture: ComponentFixture<C620Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C620Component]
    });
    fixture = TestBed.createComponent(C620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
