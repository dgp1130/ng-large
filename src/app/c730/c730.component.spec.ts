import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C730Component } from './c730.component';

describe('C730Component', () => {
  let component: C730Component;
  let fixture: ComponentFixture<C730Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C730Component]
    });
    fixture = TestBed.createComponent(C730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
