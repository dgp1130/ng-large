import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C164Component } from './c164.component';

describe('C164Component', () => {
  let component: C164Component;
  let fixture: ComponentFixture<C164Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C164Component]
    });
    fixture = TestBed.createComponent(C164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
