import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C632Component } from './c632.component';

describe('C632Component', () => {
  let component: C632Component;
  let fixture: ComponentFixture<C632Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C632Component]
    });
    fixture = TestBed.createComponent(C632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
