import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C251Component } from './c251.component';

describe('C251Component', () => {
  let component: C251Component;
  let fixture: ComponentFixture<C251Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C251Component]
    });
    fixture = TestBed.createComponent(C251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
