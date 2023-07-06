import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C342Component } from './c342.component';

describe('C342Component', () => {
  let component: C342Component;
  let fixture: ComponentFixture<C342Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C342Component]
    });
    fixture = TestBed.createComponent(C342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
