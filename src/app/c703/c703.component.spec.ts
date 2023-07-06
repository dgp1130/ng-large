import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C703Component } from './c703.component';

describe('C703Component', () => {
  let component: C703Component;
  let fixture: ComponentFixture<C703Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C703Component]
    });
    fixture = TestBed.createComponent(C703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
