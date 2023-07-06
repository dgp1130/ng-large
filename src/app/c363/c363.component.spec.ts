import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C363Component } from './c363.component';

describe('C363Component', () => {
  let component: C363Component;
  let fixture: ComponentFixture<C363Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C363Component]
    });
    fixture = TestBed.createComponent(C363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
