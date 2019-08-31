import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrebleClefNotesComponent } from './treble-clef-notes.component';

describe('ClefNotesComponent', () => {
  let component: TrebleClefNotesComponent;
  let fixture: ComponentFixture<TrebleClefNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrebleClefNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrebleClefNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
