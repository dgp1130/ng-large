import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C442Component } from './c442.component';

describe('C442Component', () => {
  let component: C442Component;
  let fixture: ComponentFixture<C442Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C442Component]
    });
    fixture = TestBed.createComponent(C442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
