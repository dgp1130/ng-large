import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C701Component } from './c701.component';

describe('C701Component', () => {
  let component: C701Component;
  let fixture: ComponentFixture<C701Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C701Component]
    });
    fixture = TestBed.createComponent(C701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
