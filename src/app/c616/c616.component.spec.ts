import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C616Component } from './c616.component';

describe('C616Component', () => {
  let component: C616Component;
  let fixture: ComponentFixture<C616Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C616Component]
    });
    fixture = TestBed.createComponent(C616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
