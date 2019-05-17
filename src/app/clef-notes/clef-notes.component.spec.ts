import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClefNotesComponent } from './clef-notes.component';

describe('ClefNotesComponent', () => {
  let component: ClefNotesComponent;
  let fixture: ComponentFixture<ClefNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClefNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClefNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
