import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C28Component } from './c28.component';

describe('C28Component', () => {
  let component: C28Component;
  let fixture: ComponentFixture<C28Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C28Component]
    });
    fixture = TestBed.createComponent(C28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
