import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJournal } from './my-journal';

describe('MyJournal', () => {
  let component: MyJournal;
  let fixture: ComponentFixture<MyJournal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyJournal],
    }).compileComponents();

    fixture = TestBed.createComponent(MyJournal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
