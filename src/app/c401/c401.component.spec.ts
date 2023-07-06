import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C401Component } from './c401.component';

describe('C401Component', () => {
  let component: C401Component;
  let fixture: ComponentFixture<C401Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C401Component]
    });
    fixture = TestBed.createComponent(C401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
