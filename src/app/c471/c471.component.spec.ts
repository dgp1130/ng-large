import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C471Component } from './c471.component';

describe('C471Component', () => {
  let component: C471Component;
  let fixture: ComponentFixture<C471Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C471Component]
    });
    fixture = TestBed.createComponent(C471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
