import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C280Component } from './c280.component';

describe('C280Component', () => {
  let component: C280Component;
  let fixture: ComponentFixture<C280Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C280Component]
    });
    fixture = TestBed.createComponent(C280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
