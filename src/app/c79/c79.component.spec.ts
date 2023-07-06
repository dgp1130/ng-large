import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C79Component } from './c79.component';

describe('C79Component', () => {
  let component: C79Component;
  let fixture: ComponentFixture<C79Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C79Component]
    });
    fixture = TestBed.createComponent(C79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
