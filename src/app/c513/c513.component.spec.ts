import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C513Component } from './c513.component';

describe('C513Component', () => {
  let component: C513Component;
  let fixture: ComponentFixture<C513Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C513Component]
    });
    fixture = TestBed.createComponent(C513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
