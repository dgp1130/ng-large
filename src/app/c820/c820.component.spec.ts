import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C820Component } from './c820.component';

describe('C820Component', () => {
  let component: C820Component;
  let fixture: ComponentFixture<C820Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C820Component]
    });
    fixture = TestBed.createComponent(C820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
