import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C61Component } from './c61.component';

describe('C61Component', () => {
  let component: C61Component;
  let fixture: ComponentFixture<C61Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C61Component]
    });
    fixture = TestBed.createComponent(C61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
