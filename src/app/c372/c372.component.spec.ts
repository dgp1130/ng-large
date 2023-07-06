import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C372Component } from './c372.component';

describe('C372Component', () => {
  let component: C372Component;
  let fixture: ComponentFixture<C372Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C372Component]
    });
    fixture = TestBed.createComponent(C372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
