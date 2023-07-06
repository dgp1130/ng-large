import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C447Component } from './c447.component';

describe('C447Component', () => {
  let component: C447Component;
  let fixture: ComponentFixture<C447Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C447Component]
    });
    fixture = TestBed.createComponent(C447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
