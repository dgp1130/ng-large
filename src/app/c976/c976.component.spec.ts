import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C976Component } from './c976.component';

describe('C976Component', () => {
  let component: C976Component;
  let fixture: ComponentFixture<C976Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C976Component]
    });
    fixture = TestBed.createComponent(C976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
