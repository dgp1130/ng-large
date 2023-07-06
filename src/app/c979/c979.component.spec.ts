import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C979Component } from './c979.component';

describe('C979Component', () => {
  let component: C979Component;
  let fixture: ComponentFixture<C979Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C979Component]
    });
    fixture = TestBed.createComponent(C979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
