import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C244Component } from './c244.component';

describe('C244Component', () => {
  let component: C244Component;
  let fixture: ComponentFixture<C244Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C244Component]
    });
    fixture = TestBed.createComponent(C244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
