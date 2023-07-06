import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C723Component } from './c723.component';

describe('C723Component', () => {
  let component: C723Component;
  let fixture: ComponentFixture<C723Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C723Component]
    });
    fixture = TestBed.createComponent(C723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
