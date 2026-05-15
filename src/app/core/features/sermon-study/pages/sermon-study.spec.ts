import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonStudy } from './sermon-study';

describe('SermonStudy', () => {
  let component: SermonStudy;
  let fixture: ComponentFixture<SermonStudy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SermonStudy],
    }).compileComponents();

    fixture = TestBed.createComponent(SermonStudy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
