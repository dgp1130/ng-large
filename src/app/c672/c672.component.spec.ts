import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C672Component } from './c672.component';

describe('C672Component', () => {
  let component: C672Component;
  let fixture: ComponentFixture<C672Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C672Component]
    });
    fixture = TestBed.createComponent(C672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
