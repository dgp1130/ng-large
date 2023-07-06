import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C690Component } from './c690.component';

describe('C690Component', () => {
  let component: C690Component;
  let fixture: ComponentFixture<C690Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C690Component]
    });
    fixture = TestBed.createComponent(C690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
