import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C512Component } from './c512.component';

describe('C512Component', () => {
  let component: C512Component;
  let fixture: ComponentFixture<C512Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C512Component]
    });
    fixture = TestBed.createComponent(C512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
