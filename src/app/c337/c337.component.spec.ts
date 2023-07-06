import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C337Component } from './c337.component';

describe('C337Component', () => {
  let component: C337Component;
  let fixture: ComponentFixture<C337Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C337Component]
    });
    fixture = TestBed.createComponent(C337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
