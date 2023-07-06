import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C949Component } from './c949.component';

describe('C949Component', () => {
  let component: C949Component;
  let fixture: ComponentFixture<C949Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C949Component]
    });
    fixture = TestBed.createComponent(C949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
