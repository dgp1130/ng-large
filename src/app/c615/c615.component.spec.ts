import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C615Component } from './c615.component';

describe('C615Component', () => {
  let component: C615Component;
  let fixture: ComponentFixture<C615Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C615Component]
    });
    fixture = TestBed.createComponent(C615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
