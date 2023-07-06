import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C484Component } from './c484.component';

describe('C484Component', () => {
  let component: C484Component;
  let fixture: ComponentFixture<C484Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C484Component]
    });
    fixture = TestBed.createComponent(C484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
