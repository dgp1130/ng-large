import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C910Component } from './c910.component';

describe('C910Component', () => {
  let component: C910Component;
  let fixture: ComponentFixture<C910Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C910Component]
    });
    fixture = TestBed.createComponent(C910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
