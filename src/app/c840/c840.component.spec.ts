import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C840Component } from './c840.component';

describe('C840Component', () => {
  let component: C840Component;
  let fixture: ComponentFixture<C840Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C840Component]
    });
    fixture = TestBed.createComponent(C840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
