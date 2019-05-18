import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treble-clef-notes',
  templateUrl: './treble-clef-notes.component.html',
  styleUrls: ['./treble-clef-notes.component.css']
})
export class TrebleClefNotesComponent implements OnInit {
  private allNotes = [
    'assets/tA4n.gif',
    'assets/tA5n.gif',
    'assets/tB4n.gif',
    'assets/tB5n.gif',
    'assets/tC4n.gif',
    'assets/tC5n.gif',
    'assets/tD4n.gif',
    'assets/tD5n.gif',
    'assets/tE4n.gif',
    'assets/tE5n.gif',
    'assets/tF4n.gif',
    'assets/tF5n.gif',
    'assets/tG4n.gif',
    'assets/tG5n.gif'];

  notes = [];
  answer = '';
  constructor() { }

  ngOnInit() {
    this.shuffle();
  }

  check(n: number) {
    this.answer = this.notes[n][8];
  }

  shuffle() {
    this.answer = '';
    this.notes = [];

    while (this.notes.length !== 6) {
      const rn = Math.floor(Math.random() * (this.allNotes.length - 1)) + 1;

      if (this.notes.indexOf(rn) === -1) {
        this.notes.push(this.allNotes[rn]);
      }
    }
  }
}
