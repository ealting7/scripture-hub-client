import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedNavigation } from './selected-navigation';

describe('SelectedNavigation', () => {
  let component: SelectedNavigation;
  let fixture: ComponentFixture<SelectedNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
