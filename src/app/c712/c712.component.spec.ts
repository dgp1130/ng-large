import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C712Component } from './c712.component';

describe('C712Component', () => {
  let component: C712Component;
  let fixture: ComponentFixture<C712Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C712Component]
    });
    fixture = TestBed.createComponent(C712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
