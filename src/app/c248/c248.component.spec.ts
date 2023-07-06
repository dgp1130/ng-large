import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C248Component } from './c248.component';

describe('C248Component', () => {
  let component: C248Component;
  let fixture: ComponentFixture<C248Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C248Component]
    });
    fixture = TestBed.createComponent(C248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
