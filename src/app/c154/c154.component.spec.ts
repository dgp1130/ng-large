import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C154Component } from './c154.component';

describe('C154Component', () => {
  let component: C154Component;
  let fixture: ComponentFixture<C154Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C154Component]
    });
    fixture = TestBed.createComponent(C154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
