import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C849Component } from './c849.component';

describe('C849Component', () => {
  let component: C849Component;
  let fixture: ComponentFixture<C849Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C849Component]
    });
    fixture = TestBed.createComponent(C849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
