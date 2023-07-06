import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C765Component } from './c765.component';

describe('C765Component', () => {
  let component: C765Component;
  let fixture: ComponentFixture<C765Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C765Component]
    });
    fixture = TestBed.createComponent(C765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
