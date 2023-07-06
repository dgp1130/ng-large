import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C553Component } from './c553.component';

describe('C553Component', () => {
  let component: C553Component;
  let fixture: ComponentFixture<C553Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C553Component]
    });
    fixture = TestBed.createComponent(C553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
