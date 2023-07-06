import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C406Component } from './c406.component';

describe('C406Component', () => {
  let component: C406Component;
  let fixture: ComponentFixture<C406Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C406Component]
    });
    fixture = TestBed.createComponent(C406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
