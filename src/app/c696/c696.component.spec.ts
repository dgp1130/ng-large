import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C696Component } from './c696.component';

describe('C696Component', () => {
  let component: C696Component;
  let fixture: ComponentFixture<C696Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C696Component]
    });
    fixture = TestBed.createComponent(C696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
