import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C508Component } from './c508.component';

describe('C508Component', () => {
  let component: C508Component;
  let fixture: ComponentFixture<C508Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C508Component]
    });
    fixture = TestBed.createComponent(C508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
