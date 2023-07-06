import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C980Component } from './c980.component';

describe('C980Component', () => {
  let component: C980Component;
  let fixture: ComponentFixture<C980Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C980Component]
    });
    fixture = TestBed.createComponent(C980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
