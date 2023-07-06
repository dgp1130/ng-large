import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C504Component } from './c504.component';

describe('C504Component', () => {
  let component: C504Component;
  let fixture: ComponentFixture<C504Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C504Component]
    });
    fixture = TestBed.createComponent(C504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
