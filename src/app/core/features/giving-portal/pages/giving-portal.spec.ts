import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingPortal } from './giving-portal';

describe('GivingPortal', () => {
  let component: GivingPortal;
  let fixture: ComponentFixture<GivingPortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GivingPortal],
    }).compileComponents();

    fixture = TestBed.createComponent(GivingPortal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
