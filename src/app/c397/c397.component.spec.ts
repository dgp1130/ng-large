import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C397Component } from './c397.component';

describe('C397Component', () => {
  let component: C397Component;
  let fixture: ComponentFixture<C397Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C397Component]
    });
    fixture = TestBed.createComponent(C397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
