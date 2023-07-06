import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C612Component } from './c612.component';

describe('C612Component', () => {
  let component: C612Component;
  let fixture: ComponentFixture<C612Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C612Component]
    });
    fixture = TestBed.createComponent(C612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
