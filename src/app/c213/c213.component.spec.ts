import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C213Component } from './c213.component';

describe('C213Component', () => {
  let component: C213Component;
  let fixture: ComponentFixture<C213Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C213Component]
    });
    fixture = TestBed.createComponent(C213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
