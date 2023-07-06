import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C392Component } from './c392.component';

describe('C392Component', () => {
  let component: C392Component;
  let fixture: ComponentFixture<C392Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C392Component]
    });
    fixture = TestBed.createComponent(C392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
