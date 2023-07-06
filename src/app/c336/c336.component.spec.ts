import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C336Component } from './c336.component';

describe('C336Component', () => {
  let component: C336Component;
  let fixture: ComponentFixture<C336Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C336Component]
    });
    fixture = TestBed.createComponent(C336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
