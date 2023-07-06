import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C809Component } from './c809.component';

describe('C809Component', () => {
  let component: C809Component;
  let fixture: ComponentFixture<C809Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C809Component]
    });
    fixture = TestBed.createComponent(C809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
