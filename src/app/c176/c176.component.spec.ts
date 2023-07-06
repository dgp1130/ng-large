import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C176Component } from './c176.component';

describe('C176Component', () => {
  let component: C176Component;
  let fixture: ComponentFixture<C176Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C176Component]
    });
    fixture = TestBed.createComponent(C176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
