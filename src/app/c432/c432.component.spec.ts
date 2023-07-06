import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C432Component } from './c432.component';

describe('C432Component', () => {
  let component: C432Component;
  let fixture: ComponentFixture<C432Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C432Component]
    });
    fixture = TestBed.createComponent(C432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
