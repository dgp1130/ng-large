import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C908Component } from './c908.component';

describe('C908Component', () => {
  let component: C908Component;
  let fixture: ComponentFixture<C908Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C908Component]
    });
    fixture = TestBed.createComponent(C908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
