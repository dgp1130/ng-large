import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C68Component } from './c68.component';

describe('C68Component', () => {
  let component: C68Component;
  let fixture: ComponentFixture<C68Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C68Component]
    });
    fixture = TestBed.createComponent(C68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
