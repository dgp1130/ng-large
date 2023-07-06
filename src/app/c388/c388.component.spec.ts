import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C388Component } from './c388.component';

describe('C388Component', () => {
  let component: C388Component;
  let fixture: ComponentFixture<C388Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C388Component]
    });
    fixture = TestBed.createComponent(C388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
