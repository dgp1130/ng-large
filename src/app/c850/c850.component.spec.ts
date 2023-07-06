import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C850Component } from './c850.component';

describe('C850Component', () => {
  let component: C850Component;
  let fixture: ComponentFixture<C850Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C850Component]
    });
    fixture = TestBed.createComponent(C850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
