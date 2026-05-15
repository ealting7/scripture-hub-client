import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleReader } from './bible-reader';

describe('BibleReader', () => {
  let component: BibleReader;
  let fixture: ComponentFixture<BibleReader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleReader],
    }).compileComponents();

    fixture = TestBed.createComponent(BibleReader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
