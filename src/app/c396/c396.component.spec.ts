import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C396Component } from './c396.component';

describe('C396Component', () => {
  let component: C396Component;
  let fixture: ComponentFixture<C396Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C396Component]
    });
    fixture = TestBed.createComponent(C396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
