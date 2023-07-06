import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C523Component } from './c523.component';

describe('C523Component', () => {
  let component: C523Component;
  let fixture: ComponentFixture<C523Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C523Component]
    });
    fixture = TestBed.createComponent(C523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
