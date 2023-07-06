import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C692Component } from './c692.component';

describe('C692Component', () => {
  let component: C692Component;
  let fixture: ComponentFixture<C692Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C692Component]
    });
    fixture = TestBed.createComponent(C692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
