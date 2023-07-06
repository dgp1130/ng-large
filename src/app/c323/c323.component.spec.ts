import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C323Component } from './c323.component';

describe('C323Component', () => {
  let component: C323Component;
  let fixture: ComponentFixture<C323Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C323Component]
    });
    fixture = TestBed.createComponent(C323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
