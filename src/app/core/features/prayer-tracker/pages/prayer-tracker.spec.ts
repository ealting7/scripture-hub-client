import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerTracker } from './prayer-tracker';

describe('PrayerTracker', () => {
  let component: PrayerTracker;
  let fixture: ComponentFixture<PrayerTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerTracker],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
