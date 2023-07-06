import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C614Component } from './c614.component';

describe('C614Component', () => {
  let component: C614Component;
  let fixture: ComponentFixture<C614Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C614Component]
    });
    fixture = TestBed.createComponent(C614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
