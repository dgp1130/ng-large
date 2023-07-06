import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C568Component } from './c568.component';

describe('C568Component', () => {
  let component: C568Component;
  let fixture: ComponentFixture<C568Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C568Component]
    });
    fixture = TestBed.createComponent(C568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
