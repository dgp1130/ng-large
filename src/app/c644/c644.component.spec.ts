import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C644Component } from './c644.component';

describe('C644Component', () => {
  let component: C644Component;
  let fixture: ComponentFixture<C644Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C644Component]
    });
    fixture = TestBed.createComponent(C644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
