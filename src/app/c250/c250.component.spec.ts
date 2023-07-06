import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C250Component } from './c250.component';

describe('C250Component', () => {
  let component: C250Component;
  let fixture: ComponentFixture<C250Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C250Component]
    });
    fixture = TestBed.createComponent(C250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
