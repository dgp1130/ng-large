import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C486Component } from './c486.component';

describe('C486Component', () => {
  let component: C486Component;
  let fixture: ComponentFixture<C486Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C486Component]
    });
    fixture = TestBed.createComponent(C486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
