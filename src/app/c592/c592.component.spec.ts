import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C592Component } from './c592.component';

describe('C592Component', () => {
  let component: C592Component;
  let fixture: ComponentFixture<C592Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C592Component]
    });
    fixture = TestBed.createComponent(C592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
